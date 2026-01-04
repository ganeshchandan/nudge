import type {
  Edge,
  EdgeConfig,
} from "@components/common/knowledge-graph/types";
import type { FC } from "react";
import { GraphEdge } from "./edge";

interface EdgesProps {
  edges: Edge[];
  edgeConfig: EdgeConfig;
}

export const Edges: FC<EdgesProps> = ({ edges, edgeConfig }) => {
  return edges.map((edge, idx) => (
    <GraphEdge key={idx} edge={edge} edgeConfig={edgeConfig} />
  ));
};
