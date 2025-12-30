import type { QuickLink } from "@components/common";
import {
  ExecutiveViewDetailList,
  ExecutiveViewDetailRatings,
} from "@components/executive-view/profile-lists/card/details";
import type {
  OverallStatsField,
  ExecutiveCardCapitalDetail,
  EngagementField,
} from "@components/executive-view/types";

export const OVERALL_STATS_FIELDS: OverallStatsField[] = [
  {
    name: "At Risk",
    id: "atRisk",
  },
  {
    name: "Top Connections",
    id: "topConnections",
  },
  {
    name: "Performing Verticals",
    id: "performingVerticals",
  },
];

export const EXECUTIVE_CAPITAL_DETAILS: ExecutiveCardCapitalDetail[] = [
  {
    name: "Persona Quadrant",
    id: "personaQuadrant",
    Component: ExecutiveViewDetailList,
  },
  {
    name: "Behavioural Trait",
    id: "behaviouralTrait",
    Component: ExecutiveViewDetailList,
  },
  {
    name: "Influence Mapping",
    id: "influenceMapping",
    Component: ExecutiveViewDetailRatings,
  },
  {
    name: "Network Intelligence",
    id: "networkIntelligence",
    Component: ExecutiveViewDetailRatings,
  },
  {
    name: "Conference Intelligence",
    id: "conferenceIntelligence",
    showProgress: true,
    Component: ExecutiveViewDetailList,
  },
];

export const ENGAGEMENT_FIELDS: EngagementField[] = [
  {
    type: "number",
    id: "activeEngagements",
    name: "Active Engagements",
    isClickAble: true,
  },
  {
    type: "percentage",
    id: "engagementScore",
    name: "Engagement Score",
    isClickAble: false,
  },
];

export const QUICK_LINKS: QuickLink[] = [
  {
    name: "1 Minute Summary",
    id: "1MinuteSummary",
  },
  {
    name: "Personal Life",
    id: "Personal Life",
  },
  {
    name: "Summits he attends",
    id: "Summits he attends",
  },
  {
    name: "Him at Amgen",
    id: "himatAmgen",
  },
  {
    name: "Personality Traits",
    id: "personalityTraits",
  },
  {
    name: "Themes of interest",
    id: "themesOfinterest",
  },
  {
    name: "Who influences him?",
    id: "whoinfluenceshim?",
  },
  {
    name: "Version History",
    id: "versionHistory",
  },
  {
    name: "Notes",
    id: "notes",
  },
];
