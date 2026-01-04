import type {
  OrbitLevel,
  OrbitNode,
  SentimentConnection,
} from "@components/common/orbit/types";

/**
 * Automatically calculates equal spacing for nodes in an orbit level
 * @param level The orbit level to update
 * @returns Updated level with equally spaced nodes
 */
export const calculateEqualSpacing = (level: OrbitLevel): OrbitLevel => {
  const nodeCount = level.nodes.length;
  if (nodeCount === 0) return level;

  const angleStep = 360 / nodeCount;

  const equallySpacedNodes: OrbitNode[] = level.nodes.map((node, index) => ({
    ...node,
    startAngle: index * angleStep,
  }));

  return {
    ...level,
    nodes: equallySpacedNodes,
  };
};

/**
 * Calculates equal spacing for all levels in a hierarchy
 * @param levels Array of orbit levels
 * @returns Array of levels with equally spaced nodes
 */
export const calculateEqualSpacingForAllLevels = (
  levels: OrbitLevel[]
): OrbitLevel[] => {
  return levels.map(calculateEqualSpacing);
};

/**
 * Groups nodes that have connections together and positions them adjacently
 * @param level The orbit level
 * @param connections Array of sentiment connections
 * @returns Updated level with grouped nodes
 */
export const groupConnectedNodes = (
  level: OrbitLevel,
  connections: SentimentConnection[]
): OrbitLevel => {
  // Create Set of node IDs for O(1) lookup instead of O(n) some() calls
  const nodeIds = new Set(level.nodes.map((n) => n.person.id));

  // Get connections within this level - optimized to O(n) instead of O(n*m)
  const levelConnections = connections.filter(
    (conn) => nodeIds.has(conn.from) && nodeIds.has(conn.to)
  );

  if (levelConnections.length === 0) {
    // No connections, use equal spacing
    return calculateEqualSpacing(level);
  }

  // Build a graph of connected nodes
  const connectedGroups: string[][] = [];
  const processed = new Set<string>();

  const findGroup = (personId: string): string[] => {
    const group: string[] = [personId];
    processed.add(personId);

    // Find all connected nodes recursively
    const findConnected = (id: string) => {
      levelConnections.forEach((conn) => {
        const otherId =
          conn.from === id ? conn.to : conn.to === id ? conn.from : null;
        if (otherId && !processed.has(otherId)) {
          group.push(otherId);
          processed.add(otherId);
          findConnected(otherId);
        }
      });
    };

    findConnected(personId);
    return group;
  };

  // Group all connected nodes
  level.nodes.forEach((node) => {
    if (!processed.has(node.person.id)) {
      const group = findGroup(node.person.id);
      if (group.length > 1) {
        connectedGroups.push(group);
      }
    }
  });

  // Separate connected and unconnected nodes - optimized with Set for O(1) lookup
  const connectedNodeIds = new Set(connectedGroups.flat());
  const connectedNodes: OrbitNode[] = [];
  const unconnectedNodes: OrbitNode[] = [];

  level.nodes.forEach((node) => {
    if (connectedNodeIds.has(node.person.id)) {
      connectedNodes.push(node);
    } else {
      unconnectedNodes.push(node);
    }
  });

  // Calculate angles
  const totalNodes = level.nodes.length;
  const angleStep = 360 / totalNodes;
  let currentAngle = 0;

  const positionedNodes: OrbitNode[] = [];

  // Position connected groups first - optimized with Map for O(1) lookup
  const connectedNodeMap = new Map(connectedNodes.map((n) => [n.person.id, n]));
  connectedGroups.forEach((group) => {
    group.forEach((personId) => {
      const node = connectedNodeMap.get(personId);
      if (node) {
        positionedNodes.push({
          ...node,
          startAngle: currentAngle,
        });
        currentAngle += angleStep;
      }
    });
  });

  // Position unconnected nodes
  unconnectedNodes.forEach((node) => {
    positionedNodes.push({
      ...node,
      startAngle: currentAngle,
    });
    currentAngle += angleStep;
  });

  return {
    ...level,
    nodes: positionedNodes,
  };
};

/**
 * Groups connected nodes for all levels
 */
export const groupConnectedNodesForAllLevels = (
  levels: OrbitLevel[],
  connections: SentimentConnection[]
): OrbitLevel[] => {
  return levels.map((level) => groupConnectedNodes(level, connections));
};
