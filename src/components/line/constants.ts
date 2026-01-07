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

export const ENGAGEMENT_FIELDS: EngagementField[] = [];

export const QUICK_LINKS: QuickLink[] = [];
