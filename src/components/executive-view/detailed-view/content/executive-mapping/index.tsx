import { type FC, useState, useMemo } from "react";
import "@components/executive-view/detailed-view/content/executive-mapping/index.scss";
import { EditIcon, ExpandIcon } from "@assets/images";
import { NudgeTabs, KnowledgeMap } from "@components/common";
import { Lifecycle } from "@components/common/lifecycle";
import type {
  TimelineSegment,
  TimelineEvent,
} from "@components/common/lifecycle/types";
import { APP_IMAGES } from "@assets/images/app_image";

interface ExecutiveMappingProps {}

// Sample data for testing
const sampleSegments: TimelineSegment[] = [
  {
    id: "1",
    startDate: new Date(2025, 7, 1), // Aug 1, 2025
    endDate: new Date(2025, 8, 15), // Sep 15, 2025
    color: "green",
  },
  {
    id: "2",
    startDate: new Date(2025, 8, 15), // Sep 15, 2025
    endDate: new Date(2025, 9, 10), // Oct 10, 2025
    color: "red",
  },
  {
    id: "3",
    startDate: new Date(2025, 9, 5), // Oct 5, 2025
    endDate: new Date(2025, 9, 25), // Oct 25, 2025
    color: "purple",
  },
  {
    id: "4",
    startDate: new Date(2025, 9, 25), // Oct 25, 2025
    endDate: new Date(2025, 11, 20), // Dec 20, 2025
    color: "green",
  },
];

const sampleEvents: TimelineEvent[] = [
  {
    id: "1",
    date: new Date(2025, 7, 19), // Aug 19, 2025 (moved by ~1rem equivalent = ~4 days)
    type: "meeting",
    label: "Meetings Logged",
    count: 2,
    position: "above",
    profileImages: [APP_IMAGES.userIcon2, APP_IMAGES.userIcon3],
  },
  {
    id: "2",
    date: new Date(2025, 8, 17), // Sep 17, 2025 (moved right by ~0.5rem equivalent)
    type: "escalation",
    label: "Escalations",
    count: 3,
    position: "below",
    profileImages: [APP_IMAGES.userIcon2],
  },
  {
    id: "3",
    date: new Date(2025, 9, 15), // Oct 15, 2025
    type: "recovery",
    label: "Recovery Lineage",
    position: "below",
    icon: "📊",
  },
  {
    id: "4",
    date: new Date(2025, 11, 10), // Dec 10, 2025
    type: "okr",
    label: "OKR",
    position: "below",
    profileImages: [APP_IMAGES.userIcon3],
  },
  {
    id: "5",
    date: new Date(2026, 0, 15), // Jan 15, 2026 (moved more left)
    type: "flag",
    label: "",
    position: "above",
  },
];

const ExternalContent = () => {
  // Use Date(year, month, day) to avoid timezone issues
  // month is 0-indexed: 0 = January, 7 = August
  const startDate = useMemo(() => new Date(2025, 7, 1), []); // Aug 1, 2025
  const endDate = useMemo(() => new Date(2026, 0, 31), []); // Jan 31, 2026

  return (
    <Lifecycle
      startDate={startDate}
      endDate={endDate}
      segments={sampleSegments}
      events={sampleEvents}
    />
  );
};

export const ExecutiveMapping: FC<ExecutiveMappingProps> = () => {
  const [selectedTab, setSelectedTab] = useState<string>("external");

  return (
    <div className="executive-mapping">
      <div className="executive-mapping-header">
        <label>Executive Mapping</label>
        <div className="executive-mapping-actions">
          <EditIcon className="executive-mapping-action-icon" />
          <ExpandIcon className="executive-mapping-action-icon" />
        </div>
      </div>
      <div>
        <NudgeTabs
          tabItems={[
            { name: "External", id: "external" },
            { name: "Internal", id: "internal" },
          ]}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          contents={{
            internal: {
              Component: ExternalContent,
            },
          }}
        />
      </div>

      <KnowledgeMap
        edges={[
          { source: "AI", target: "Machine Learning" },
          { source: "Machine Learning", target: "Neural Networks" },
          { source: "Machine Learning", target: "Deep Learning" },
        ]}
        nodes={[
          {
            id: "AI",
            image: "assignee1",
            name: "Market Access",
          },
          {
            id: "Machine Learning",
            image: "assignee2",
            name: "Medical Affairs",
          },
          {
            id: "Neural Networks",
            image: "assignee3",
            name: "Safety",
          },
          {
            id: "Deep Learning",
            image: "assignee4",
            name: "Biotech",
          },
        ]}
      />
    </div>
  );
};
