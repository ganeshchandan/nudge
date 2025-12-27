import {
  ExecutiveViewDetailList,
  ExecutiveViewDetailRatings,
} from "@components/executive-view/content/lists/card/details";
import type {
  EngagementField,
  ExecutiveCardCapitalDetail,
  OverallStatsField,
} from "@components/executive-view/types";

export const OVERALL_STATS_FIELDS: OverallStatsField[] = [
  {
    name: "Dips Flagged",
    id: "dipsFlagged",
  },
  {
    name: "Competitor Entry ",
    id: "competitorEntry",
  },
  {
    name: "Unique Offering",
    id: "uniqueOffering",
  },
];

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
    type: "text",
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
