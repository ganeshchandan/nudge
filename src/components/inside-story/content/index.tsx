import { type FC, useState } from "react";
import "@components/inside-story/content/index.scss";
import { OrganizationalOverview } from "./organizational-overview";
import { DigitalFocus } from "./digital-focus";
import { KeyPartners } from "./key-partners";
import { PipelineTherapy } from "./pipeline-therapy";
import { StrategicImplications } from "./strategic-implications";
import { ScoreCard } from "./score-card";
import {
  OverflowContainer,
  QuickLinks,
  type QuickLink,
} from "@components/common";
import { KeyStakeholders } from "./key-stakeholders";
import { OneMinuteSummary } from "./one-minute-summary";

const categories: QuickLink[] = [
  { name: "Score Card", id: "scoreCard" },
  { name: "1 Minute Summary", id: "oneMinuteSummary" },
  { name: "Inside Story", id: "insideStory" },
  { name: "Key Stakeholders", id: "keyStakeholders" },
  { name: "Focus Area", id: "focusArea" },
  { name: "What Changed", id: "whatChanged" },
  { name: "Engagement Journey", id: "engagementJourney" },
  { name: "SWOT Analysis", id: "swotAnalysis" },
  { name: "Potential Opportunities", id: "potentialOpportunities" },
  { name: "Engagement Roadmap", id: "engagementRoadmap" },
];

export const InsideStoryContent: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("scoreCard");

  const renderContent = () => {
    switch (selectedCategory) {
      case "scoreCard":
        return <ScoreCard />;
      case "keyStakeholders":
        return <KeyStakeholders />;
      case "oneMinuteSummary":
        return <OneMinuteSummary />;
      case "insideStory":
      default:
        return (
          <div className="inside-story-main">
            <h1 className="inside-story-main-title">Inside Story</h1>
            <div className="inside-story-content">
              <OrganizationalOverview />
              <DigitalFocus />
              <KeyPartners />
              <PipelineTherapy />
              <StrategicImplications />
            </div>
          </div>
        );
    }
  };

  const onQuickLinkSelect = (quickLink: string) => {
    setSelectedCategory(quickLink);
  };

  return (
    <>
      <OverflowContainer>
        <div className="inside-story-main-content">{renderContent()}</div>
      </OverflowContainer>
      <QuickLinks
        headerName={"Account Plan Category"}
        quickLinks={categories}
        onLinkSelect={onQuickLinkSelect}
      />
    </>
  );
};
