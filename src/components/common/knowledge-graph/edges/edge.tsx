import type {
  Edge,
  EdgeConfig,
} from "@components/common/knowledge-graph/types";
import { memo } from "react";

interface GraphEdgeProps {
  edge: Edge;
  edgeConfig: EdgeConfig;
}

export const GraphEdge = memo(({ edge, edgeConfig }: GraphEdgeProps) => {
  const { sourceX, sourceY, targetX, targetY } = edge;
  const {
    strokeWidth = 1,
    stroke = "#e1e1e1",
    strokeDasharray = "4",
  } = edgeConfig;

  return (
    <line
      x1={sourceX}
      y1={sourceY}
      x2={targetX}
      y2={targetY}
      strokeDasharray={strokeDasharray}
      stroke={stroke}
      strokeWidth={strokeWidth}
      {...edgeConfig}
    />
  );
});
