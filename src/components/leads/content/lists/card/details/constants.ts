import type { LeadsDetailsStats } from "@components/leads/types";

export const EXECUTIVE_CAPITAL_DETAILS: {
  name: string;
  id: keyof LeadsDetailsStats;
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
