import type { QuickLink } from "@components/common";
import {
  ExecutiveViewDetailList,
  ExecutiveViewDetailRatings,
} from "@components/executive-view/profile-lists/card/details";
import type {
  EngagementField,
  ExecutiveCardCapitalDetail,
  OverallStatsField,
} from "@components/executive-view/types";

export const OVERALL_STATS_FIELDS: OverallStatsField[] = [];

export const EXECUTIVE_CAPITAL_DETAILS: ExecutiveCardCapitalDetail[] = [
  {
    name: "Strategic Posture",
    id: "strategicPosture",
    Component: ExecutiveViewDetailList,
  },
  {
    name: "Investment Direction",
    id: "investmentDirection",
    Component: ExecutiveViewDetailList,
  },
  {
    name: "Pressure Vectors",
    id: "pressureVectors",
    Component: ExecutiveViewDetailList,
  },
  {
    name: "Account Relationship",
    id: "accountRelationship",
    Component: ExecutiveViewDetailRatings,
  },
];

export const ENGAGEMENT_FIELDS: EngagementField[] = [
  {
    type: "sentiment",
    id: "sentiment",
    name: "Sentiment",
    isClickAble: false,
  },
  {
    type: "status-text",
    id: "accountRelationship",
    name: "Account Relationship",
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
    id: "",
  },
  {
    name: "Personality Traits",
    id: "",
  },
  {
    name: "Themes of interest",
    id: "",
  },
  {
    name: "Who influences him ?",
    id: "",
  },
  {
    name: "Version History",
    id: "",
  },
  {
    name: "Notes",
    id: "",
  },
];
