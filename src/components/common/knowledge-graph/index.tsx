import { useEffect, useMemo, useRef, useState, type FC } from "react";
import "@components/common/knowledge-graph/index.scss";
import type {
  Node,
  Edge,
  GraphConfig,
} from "@components/common/knowledge-graph/types";
import {
  getGraphStylesVariables,
  getNodeAndEdgePositions,
  updateEdgePositionForNode,
  updateNodeAfterDrop,
} from "@components/common/knowledge-graph/utils";
import { Nodes } from "@components/common/knowledge-graph/nodes";
import { Edges } from "@components/common/knowledge-graph/edges";
import { ContextMenu } from "./context-menu";

interface KnowledgeMapProps {
  edges: Edge[];
  nodes: Node[];
  graphConfig?: GraphConfig;
}

export const KnowledgeMap: FC<KnowledgeMapProps> = ({
  edges,
  nodes,
  graphConfig,
}) => {
  const knowledgeGraphRef = useRef<HTMLDivElement>(null);
  const { edge = {} } = graphConfig || {};
  const [graphNodes, setGraphNodes] = useState<Node[]>([]);
  const [graphEdges, setGraphEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    const { edges: graphEdges, nodes: graphNodes } = getNodeAndEdgePositions(
      nodes,
      edges,
      knowledgeGraphRef
    );
    setGraphNodes(graphNodes);
    setGraphEdges(graphEdges);
  }, [knowledgeGraphRef, nodes, edges]);

  const styles = useMemo(
    () => getGraphStylesVariables(graphConfig),
    [graphConfig]
  );

  const handleNodeClick = (node: Node | null) => setSelectedNode(node);

  const handleOutsideClick = () => setSelectedNode(null);

  const handleDrag = (updatedNode: Node, x: number, y: number) => {
    updatedNode.x = x;
    updatedNode.y = y;

    setGraphNodes(updateNodeAfterDrop(graphNodes, { ...updatedNode }));
    setGraphEdges(
      updateEdgePositionForNode(graphNodes, graphEdges, updatedNode)
    );
    handleOutsideClick();
  };

  return (
    <div
      className="knowledge-graph"
      style={styles}
      onClick={handleOutsideClick}
      ref={knowledgeGraphRef}
    >
      <svg className="knowledge-graph-svg">
        <Edges edges={graphEdges} edgeConfig={edge} />
      </svg>
      <Nodes
        nodes={graphNodes}
        handleNodeClick={handleNodeClick}
        handleDrag={handleDrag}
      />
      {selectedNode && (
        <ContextMenu node={selectedNode} key={selectedNode.id} />
      )}
    </div>
  );
};
