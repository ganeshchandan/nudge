import { type FC } from "react";
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

interface InsideStoryContentProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const InsideStoryContent: FC<InsideStoryContentProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  // const [selectedCategory, setSelectedCategory] = useState<string>("scoreCard");

  const renderContent = () => {
    switch (selectedCategory) {
      case "scoreCard":
        return <ScoreCard />;
      case "keyStakeholders":
        return <KeyStakeholders />;
      case "oneMinuteSummary":
        return <OneMinuteSummary />;
      case "insideStory":
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
      case "focusArea":
        return (
          <div className="inside-story-main">
            <h1 className="inside-story-main-title">Focus Area</h1>
            <div className="inside-story-content">
              {/* Focus Area content */}
            </div>
          </div>
        );
      case "whatChanged":
        return (
          <div className="inside-story-main">
            <h1 className="inside-story-main-title">What Changed</h1>
            <div className="inside-story-content">
              {/* What Changed content */}
            </div>
          </div>
        );
      case "engagementJourney":
        return (
          <div className="inside-story-main">
            <h1 className="inside-story-main-title">Engagement Journey</h1>
            <div className="inside-story-content">
              {/* Engagement Journey content */}
            </div>
          </div>
        );
      case "swotAnalysis":
        return (
          <div className="inside-story-main">
            <h1 className="inside-story-main-title">SWOT Analysis</h1>
            <div className="inside-story-content">
              {/* SWOT Analysis content */}
            </div>
          </div>
        );
      case "potentialOpportunities":
        return (
          <div className="inside-story-main">
            <h1 className="inside-story-main-title">Potential Opportunities</h1>
            <div className="inside-story-content">
              {/* Potential Opportunities content */}
            </div>
          </div>
        );
      case "engagementRoadmap":
        return (
          <div className="inside-story-main">
            <h1 className="inside-story-main-title">Engagement Roadmap</h1>
            <div className="inside-story-content">
              {/* Engagement Roadmap content */}
            </div>
          </div>
        );
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
