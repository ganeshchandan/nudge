import { type FC } from "react";
import { RelationshipChart, type RelationshipNode, type RelationshipConnection } from "@components/common";
// import { fetchNetworkIntelligence } from "@services/network-intelligence";
// import type { NetworkNode } from "@services/network-intelligence";

export const ExternalComponent: FC = () => {
  const nodes: RelationshipNode[] = [
    {
      id: "murdo-gordon",
      image: "assignee1",
      name: "Murdo Gordon",
    },
    {
      id: "anthony-mancini",
      image: "assignee2",
      name: "Anthony Mancini",
      title: "CCO, Revolution Medicine",
      additionalInfo: ["Indegene, SAB"],
      showButton: true,
      buttonLabel: "Additional Inroads",
    },
    {
      id: "manish-gupta",
      image: "assignee3",
      name: "Manish Gupta",
      title: "Chairman & CEO",
      company: "Indegene",
    },
  ];

  const connections: RelationshipConnection[] = [
    { 
      from: "murdo-gordon", 
      to: "anthony-mancini",
      type: "known-known" // Example: known-known relationship (bidirectional)
    },
    { 
      from: "anthony-mancini", 
      to: "murdo-gordon",
      type: "known-known" // Explicit reverse connection for bidirectional
    },
    { 
      from: "murdo-gordon", 
      to: "manish-gupta",
      type: "known-unknown" // Example: known-unknown relationship
    },
  ];

  return (
    <RelationshipChart
      nodes={nodes}
      connections={connections}
      rootNodeId="murdo-gordon"
    />
  );
};

