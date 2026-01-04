import { useRef, type ReactNode, useMemo, useCallback } from "react";
import OrbitItem from "@components/common/orbit/orbit-level/orbit-item";
import PersonNode from "@components/common/orbit/orbit-level/person-node";
import "@components/common/orbit/orbit-level/index.scss";
import type {
  OrbitLevel as OrbitLevelType,
  SentimentConnection,
  Person,
  OrbitConfig,
} from "@components/common/orbit/types";

interface OrbitLevelProps {
  level: OrbitLevelType;
  connections: SentimentConnection[];
  allPeople: Map<string, Person>;
  config: OrbitConfig;
  levelAnimationOrder?: number;
  onNodeClick?: (personId: string) => void;
  onNodeHover?: (personId: string | null) => void;
  selectedPersonId?: string | null;
  hoveredPersonId?: string | null;
  showAllConnections?: boolean;
  radius: number;
}

const OrbitLevel: React.FC<OrbitLevelProps> = ({
  level,
  connections,
  allPeople,
  config,
  // levelAnimationOrder = 0,
  onNodeClick,
  onNodeHover,
  selectedPersonId,
  hoveredPersonId,
  showAllConnections = false,
  radius,
}) => {
  const levelRef = useRef<HTMLDivElement>(null);

  // Create index map for O(1) node lookups instead of O(n) finds
  const nodeAngleMap = useMemo(() => {
    const map = new Map<string, number>();
    level.nodes.forEach((node) => {
      map.set(node.person.id, node.startAngle);
    });
    return map;
  }, [level.nodes]);

  // Create set of node IDs for O(1) membership checks
  const nodeIdSet = useMemo(() => {
    return new Set(level.nodes.map((n) => n.person.id));
  }, [level.nodes]);

  // Get connections within this level - memoized to avoid recalculation
  const levelConnections = useMemo(() => {
    return connections.filter((conn) => {
      return nodeIdSet.has(conn.from) && nodeIdSet.has(conn.to);
    });
  }, [connections, nodeIdSet]);

  // Helper to convert angle to radians
  const angleToRadians = useCallback(
    (angle: number) => (angle * Math.PI) / 180,
    []
  );

  // Helper to get node angle - now O(1) lookup
  const getNodeAngle = useCallback(
    (personId: string): number => {
      return nodeAngleMap.get(personId) ?? 0;
    },
    [nodeAngleMap]
  );

  // Get sentiment emoji
  const getSentimentEmoji = (sentiment: string): string => {
    switch (sentiment) {
      case "positive":
        return "😊";
      case "neutral":
        return "😐";
      case "negative":
        return "😞";
      default:
        return "😐";
    }
  };

  // Extract config values for stable dependencies
  const { nodeSize } = config.visual;
  const {
    showNegativeTrackColor,
    negativeTrackColor,
    arcStrokeWidth,
    arcDashArray,
    showEmojis,
    emojiSize,
  } = config.sentiment;

  // Draw colored arcs on the orbit path - only for negative sentiment
  // Also render emojis for all connections - memoized to prevent recalculation
  const renderSentimentArcs = useMemo(() => {
    if (!showAllConnections || levelConnections.length === 0) return null;

    const centerX = radius;
    const centerY = radius;
    // Node radius (half of node size from config)
    const nodeRadius = nodeSize / 2;

    return levelConnections.map((connection, index) => {
      const fromAngle = getNodeAngle(connection.from);
      const toAngle = getNodeAngle(connection.to);

      // Determine if this connection should be highlighted (when selected or hovered)
      const isHighlighted =
        (selectedPersonId &&
          (connection.from === selectedPersonId ||
            connection.to === selectedPersonId)) ||
        (hoveredPersonId &&
          (connection.from === hoveredPersonId ||
            connection.to === hoveredPersonId));

      // Calculate start and end angles
      const startAngle = Math.min(fromAngle, toAngle);
      const endAngle = Math.max(fromAngle, toAngle);
      const arcAngle = endAngle - startAngle;

      // Use the smaller arc (if more than 180, use the other direction)
      const useLargeArc = arcAngle > 180 ? 1 : 0;

      // Calculate the angle offset to account for node size
      // We want the arc to start/end at the edge of the node circle
      const nodeAngleOffset = Math.asin(nodeRadius / radius) * (180 / Math.PI);

      // Adjust angles to account for node size - stop at node edges
      const adjustedStartAngle = startAngle + nodeAngleOffset;
      const adjustedEndAngle = endAngle - nodeAngleOffset;

      const adjustedStartRad = angleToRadians(adjustedStartAngle);
      const adjustedEndRad = angleToRadians(adjustedEndAngle);

      // Calculate start and end points on the circle edge (at node boundaries)
      const startX = centerX + radius * Math.cos(adjustedStartRad);
      const startY = centerY + radius * Math.sin(adjustedStartRad);
      const endX = centerX + radius * Math.cos(adjustedEndRad);
      const endY = centerY + radius * Math.sin(adjustedEndRad);

      // Calculate midpoint angle for emoji placement
      const midAngle = (adjustedStartAngle + adjustedEndAngle) / 2;
      const midRad = angleToRadians(midAngle);
      // Position emoji on the track itself
      const emojiRadius = radius;
      const emojiX = centerX + emojiRadius * Math.cos(midRad);
      const emojiY = centerY + emojiRadius * Math.sin(midRad);

      const elements: ReactNode[] = [];

      // Only render colored arc for negative sentiment if configured
      if (connection.sentiment === "negative" && showNegativeTrackColor) {
        const opacity = isHighlighted ? 1.0 : 0.9;
        const strokeWidth = isHighlighted
          ? arcStrokeWidth + 0.5
          : arcStrokeWidth;

        elements.push(
          <path
            key={`arc-${connection.from}-${connection.to}-${index}`}
            d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${useLargeArc} 1 ${endX} ${endY}`}
            fill="none"
            stroke={negativeTrackColor}
            strokeWidth={strokeWidth}
            opacity={opacity}
            strokeLinecap="round"
            strokeDasharray={arcDashArray}
            className="sentiment-arc"
          />
        );
      }

      // Add emoji for all connections if configured - positioned on the track
      if (showEmojis) {
        elements.push(
          <text
            key={`emoji-${connection.from}-${connection.to}-${index}`}
            x={emojiX}
            y={emojiY}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={emojiSize}
            className="sentiment-emoji"
            style={{
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {getSentimentEmoji(connection.sentiment)}
          </text>
        );
      }

      return (
        <g key={`connection-${connection.from}-${connection.to}-${index}`}>
          {elements}
        </g>
      );
    });
  }, [
    levelConnections,
    radius,
    nodeSize,
    showNegativeTrackColor,
    negativeTrackColor,
    arcStrokeWidth,
    arcDashArray,
    showEmojis,
    emojiSize,
    selectedPersonId,
    hoveredPersonId,
    showAllConnections,
    getNodeAngle,
    angleToRadians,
  ]);

  return (
    <div
      ref={levelRef}
      className="orbit-level"
      style={{
        width: radius * 2,
        height: radius * 2,
        borderColor: config.visual.trackColor,
        borderWidth: `${config.visual.trackWidth}px`,
        borderStyle: config.visual.trackStyle,
      }}
    >
      <svg className="sentiment-arcs-overlay">{renderSentimentArcs}</svg>

      {level.nodes.map((node, nodeIndex) => {
        const person = allPeople.get(node.person.id);
        if (!person) return null;

        return (
          <OrbitItem
            key={node.id}
            startAngle={node.startAngle}
            anglePerStep={0}
            timeBetweenSteps={16}
            direction="clockwise"
            isRotating={false}
            orbitRadius={radius}
          >
            <PersonNode
              person={person}
              config={config}
              nodeIndex={nodeIndex}
              levelAnimationOrder={0}
              onClick={() => onNodeClick?.(node.person.id)}
              onMouseEnter={() => onNodeHover?.(node.person.id)}
              onMouseLeave={() => onNodeHover?.(null)}
            />
          </OrbitItem>
        );
      })}
    </div>
  );
};

export default OrbitLevel;
