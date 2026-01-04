import * as d3 from "d3";
import type {
  Node,
  Edge,
  GraphConfig,
  CSSPropertiesWithVars,
} from "@components/common/knowledge-graph/types";

const getNodeDetails = (nodes: Node[], nodeId: string) =>
  nodes.find(({ id }) => id === nodeId);

export const getEdgeSourceAndTargetPosition = (nodes: Node[], edge: Edge) => {
  const { source, target } = edge;
  const sourceNode = getNodeDetails(nodes, source);
  const targetNode = getNodeDetails(nodes, target);

  const { x: sourceX = 0, y: sourceY = 0 } = sourceNode || {};
  const { x: targetX = 0, y: targetY = 0 } = targetNode || {};
  return {
    ...edge,
    sourceX,
    sourceY,
    targetX,
    targetY,
  };
};

export const updateEdgePositionForNode = (
  nodes: Node[],
  edges: Edge[],
  node: Node
) => {
  const { id } = node;
  return edges.map((edge) => {
    const { source, target } = edge;
    if (source === id || target === id) {
      return getEdgeSourceAndTargetPosition(nodes, edge);
    }
    return edge;
  });
};

export const getNodeAndEdgePositions = (
  nodes: Node[],
  edges: Edge[],
  graphConfig?: GraphConfig
) => {
  const { node, strength = -200, forceCenter = [400, 250] } = graphConfig || {};
  const { distance } = node || {};
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink<Node, Edge>(JSON.parse(JSON.stringify(edges)))
        .id((d: Node) => d.id)
        .distance(distance || 300)
    )
    .force("charge", d3.forceManyBody().strength(strength))
    .force("center", d3.forceCenter(...forceCenter));

  simulation.stop();

  for (let i = 0; i < 150; i++) simulation.tick();

  const mappedEdges = edges
    .map((edge) => getEdgeSourceAndTargetPosition(nodes, edge))
    .filter((l) => l !== null);

  return { edges: mappedEdges, nodes };
};

export const updateNodeAfterDrop = (nodes: Node[], updatedNode: Node) => {
  const { id: updatedNodeId } = updatedNode;
  return nodes.map((node) => {
    const { id } = node;
    return id === updatedNodeId ? updatedNode : node;
  });
};

export const getNodeSize = (size: string | number): string => {
  if (typeof size === "number") {
    return `${size}px`;
  }

  const trimmed = size.trim();

  if (trimmed.endsWith("px") || trimmed.endsWith("rem")) {
    return trimmed;
  }

  const numeric = Number(trimmed);
  if (!isNaN(numeric)) {
    return `${numeric}px`;
  }

  return trimmed;
};

export const getGraphStylesVariables = (
  graphConfig?: GraphConfig
): CSSPropertiesWithVars => {
  const styles: CSSPropertiesWithVars = {};
  const { node } = graphConfig || {};

  /* Nodes */
  const { size = "3.875rem" } = node || {};
  styles["--graph-node-size"] = getNodeSize(size);

  return styles;
};
