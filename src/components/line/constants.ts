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
    id: "PersonalLife",
  },
  {
    name: "Summits he attends",
    id: "summitsheattends",
  },
  {
    name: "Him at Amgen",
    id: "himAtAmgen",
  },
  {
    name: "Personality Traits",
    id: "personalityTraits",
  },
  {
    name: "Themes of interest",
    id: "themesofinterest",
  },
  {
    name: "Who influences him ?",
    id: "whoinfluenceshim",
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
