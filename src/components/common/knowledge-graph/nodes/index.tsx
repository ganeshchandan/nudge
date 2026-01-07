import type {
  Node,
  GraphConfig,
} from "@components/common/knowledge-graph/types";
import type { FC } from "react";
import { GraphNode } from "@components/common/knowledge-graph/nodes/node";

interface NodesProps {
  nodes: Node[];
  graphConfig?: GraphConfig;
  handleNodeClick: (node: Node | null) => void;
  handleDrag: (updatedNode: Node, x: number, y: number) => void;
}

export const Nodes: FC<NodesProps> = ({
  nodes,
  handleDrag,
  handleNodeClick,
}) => {
  return nodes.map((node) => (
    <GraphNode
      key={node.id}
      node={node}
      onDrag={handleDrag}
      handleNodeClick={handleNodeClick}
    />
  ));
};
