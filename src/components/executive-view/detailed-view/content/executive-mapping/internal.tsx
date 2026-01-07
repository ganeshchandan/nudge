import { KnowledgeMap } from "@components/common";
// import { NudgeStrategies } from "./nudge-strategies";
// import { fetchNetworkIntelligence } from "@services/network-intelligence";
// import type { NetworkNode } from "@services/network-intelligence";

export const InternalComponent = () => {
  return (
    <>
      {/* <NudgeStrategies /> */}
      <KnowledgeMap
        edges={[
          { source: "AI", target: "Machine Learning" },
          { source: "Machine Learning", target: "Neural Networks" },
          { source: "Machine Learning", target: "Deep Learning" },
        ]}
        nodes={[
          {
            id: "AI",
            image: "assignee1",
            name: "Market Access",
          },
          {
            id: "Machine Learning",
            image: "assignee2",
            name: "Medical Affairs",
          },
          {
            id: "Neural Networks",
            image: "assignee3",
            name: "Safety",
          },
          {
            id: "Deep Learning",
            image: "assignee4",
            name: "Biotech",
          },
        ]}
      />
    </>
  );
};
