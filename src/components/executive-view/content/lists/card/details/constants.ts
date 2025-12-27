import type { ExecutiveStatsDetail } from "@components/executive-view/types";

export const EXECUTIVE_CAPITAL_DETAILS: {
  name: string;
  id: keyof ExecutiveStatsDetail;
  showProgress?: boolean;
}[] = [
  {
    name: "Persona Quadrant",
    id: "personaQuadrant",
  },
  {
    name: "Behavioural Trait",
    id: "behaviouralTrait",
  },
  {
    name: "Influence Mapping",
    id: "influenceMapping",
  },
  {
    name: "Network Intelligence",
    id: "networkIntelligence",
  },
  {
    name: "Conference Intelligence",
    id: "conferenceIntelligence",
    showProgress: true,
  },
];
