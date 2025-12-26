import type { EngagementScores } from "../types";

export const DETAILED_EXECUTIVE_CAPITAL_ENGAGEMENT_FIELDS: {
  type: string;
  value: keyof EngagementScores;
  name: string;
  isClickAble: boolean;
}[] = [
  {
    type: "number",
    value: "activeEngagements",
    name: "Active Engagements",
    isClickAble: true,
  },
  {
    type: "percentage",
    value: "engagementScore",
    name: "Engagement Score",
    isClickAble: false,
  },
];
