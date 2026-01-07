import { type FC, useState, useRef } from "react";
import "@components/common/relationship-chart/index.scss";
import { APP_IMAGES } from "@assets/images/app_image";

export interface RelationshipNode {
  id: string;
  image: string;
  name: string;
  title?: string;
  company?: string;
  additionalInfo?: string[];
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  onNodeClick?: (node: RelationshipNode) => void;
  x?: number; // Optional absolute x position
  y?: number; // Optional absolute y position
}

export type RelationshipType = "known-known" | "known-unknown";

export interface RelationshipConnection {
  from: string; // node id
  to: string; // node id
  type?: RelationshipType; // Relationship type: known-known or known-unknown
}

export interface RelationshipChartProps {
  nodes: RelationshipNode[];
  connections: RelationshipConnection[];
  rootNodeId: string; // The top node id
  className?: string;
  onNodeClick?: (node: RelationshipNode) => void;
}

export const RelationshipChart: FC<RelationshipChartProps> = ({
  nodes,
  connections,
  rootNodeId,
  className = "",
  onNodeClick,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Calculate positions if not provided
  const nodesWithPositions = nodes.map((node) => {
    if (node.x !== undefined && node.y !== undefined) {
      return node;
    }

    const isRoot = node.id === rootNodeId;
    const childNodes = nodes.filter((n) => n.id !== rootNodeId);
    const childIndex = childNodes.findIndex((n) => n.id === node.id);

    if (isRoot) {
      // Root node at top center
      return { ...node, x: 400, y: 100 };
    } else {
      // Child nodes at bottom
      if (childNodes.length === 1) {
        return { ...node, x: 400, y: 350 };
      } else if (childNodes.length === 2) {
        return { ...node, x: childIndex === 0 ? 200 : 600, y: 350 };
      } else {
        // Distribute evenly for more than 2
        const spacing = 400 / (childNodes.length - 1);
        return { ...node, x: 200 + childIndex * spacing, y: 350 };
      }
    }
  });

  const renderConnections = () => {
    const processed = new Set<string>();
    const connectionList: Array<{
      from: string;
      to: string;
      bidirectional: boolean;
      type?: RelationshipType;
      idx: number;
    }> = [];

    connections.forEach((rel) => {
      const key = `${rel.from}-${rel.to}`;
      const revKey = `${rel.to}-${rel.from}`;
      if (processed.has(key) || processed.has(revKey)) return;

      const hasBoth = connections.some(
        (r) => r.from === rel.to && r.to === rel.from
      );
      // known-known connections are always bidirectional
      const isBidirectional = rel.type === "known-known" || hasBoth;
      processed.add(key);
      if (isBidirectional) processed.add(revKey);

      connectionList.push({
        ...rel,
        bidirectional: isBidirectional,
        idx: connectionList.length,
        type: rel.type,
      });
    });

    return connectionList.map((conn) => {
      const from = nodesWithPositions.find((n) => n.id === conn.from);
      const to = nodesWithPositions.find((n) => n.id === conn.to);
      if (!from || !to || !from.x || !from.y || !to.x || !to.y) return null;

      const r = 40; // Node radius
      const corner = 15;
      const goingUp = to.y < from.y;
      const goingRight = to.x > from.x;

      let sx: number, sy: number, ex: number, ey: number, path: string;
      let sDir: "up" | "down" | "left" | "right",
        eDir: "up" | "down" | "left" | "right";

      if (goingUp) {
        sx = from.x;
        sy = from.y - r;
        ex = to.x + r;
        ey = to.y;
        sDir = "down";
        eDir = "left";
        path = goingRight
          ? `M ${sx} ${sy} L ${sx} ${ey + corner} Q ${sx} ${ey} ${sx + corner} ${ey} L ${ex} ${ey}`
          : `M ${sx} ${sy} L ${sx} ${ey + corner} Q ${sx} ${ey} ${sx - corner} ${ey} L ${ex} ${ey}`;
      } else {
        ex = to.x;
        ey = to.y - r;
        eDir = "up";
        if (goingRight) {
          sx = from.x + r;
          sy = from.y;
          sDir = "right";
          path = `M ${sx} ${sy} L ${ex - corner} ${sy} Q ${ex} ${sy} ${ex} ${sy + corner} L ${ex} ${ey}`;
        } else {
          sx = from.x - r;
          sy = from.y;
          sDir = "left";
          path = `M ${sx} ${sy} L ${ex + corner} ${sy} Q ${ex} ${sy} ${ex} ${sy + corner} L ${ex} ${ey}`;
        }
      }

      const arrow = (
        x: number,
        y: number,
        dir: "up" | "down" | "left" | "right"
      ): string => {
        const map = {
          up: `${x},${y} ${x - 8},${y - 14} ${x + 8},${y - 14}`,
          down: `${x},${y} ${x - 8},${y + 14} ${x + 8},${y + 14}`,
          left: `${x},${y} ${x + 14},${y - 8} ${x + 14},${y + 8}`,
          right: `${x},${y} ${x - 14},${y - 8} ${x - 14},${y + 8}`,
        };
        return map[dir];
      };

      // Connection color - all lines are gray
      const connectionColor = "#cbd5e1"; // Gray for all connections
      const strokeDashArray = "6 6"; // Dashed for all connections

      // Rotate arrow 180 degrees if pointing to murdo-gordon
      const reverseArrowDir = (dir: "up" | "down" | "left" | "right"): "up" | "down" | "left" | "right" => {
        const map = {
          up: "down" as const,
          down: "up" as const,
          left: "right" as const,
          right: "left" as const,
        };
        return map[dir];
      };
      
      const endArrowDir = to.id === "murdo-gordon" ? reverseArrowDir(eDir) : eDir;
      const startArrowDir = from.id === "murdo-gordon" && conn.bidirectional ? reverseArrowDir(sDir) : sDir;

      return (
        <g key={`${conn.from}-${conn.to}-${conn.idx}`}>
          <path
            d={path}
            fill="none"
            stroke={connectionColor}
            strokeWidth="2"
            strokeDasharray={strokeDashArray}
            strokeLinecap="round"
          />
          <polygon
            points={arrow(ex, ey, endArrowDir)}
            fill={connectionColor}
            stroke={connectionColor}
            strokeWidth="1"
          />
          {conn.bidirectional && (
            <polygon
              points={arrow(sx, sy, startArrowDir)}
              fill={connectionColor}
              stroke={connectionColor}
              strokeWidth="1"
            />
          )}
        </g>
      );
    });
  };

  const handleNodeClick = (node: RelationshipNode) => {
    setSelectedNode(node.id === selectedNode ? null : node.id);
    if (onNodeClick) {
      onNodeClick(node);
    }
    if (node.onNodeClick) {
      node.onNodeClick(node);
    }
  };

  const handleButtonClick = (e: React.MouseEvent, node: RelationshipNode) => {
    e.stopPropagation();
    if (node.onButtonClick) {
      node.onButtonClick();
    }
  };

  return (
    <div
      className={`relationship-chart-container ${className}`}
      onClick={() => setSelectedNode(null)}
    >
      <svg
        ref={svgRef}
        width="800"
        height="500"
        className="relationship-chart-svg"
      >
        <g>
          {nodesWithPositions.map((node) => {
            if (!node.x || !node.y) return null;

            return (
              <g
                key={node.id}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(node);
                }}
              >
                {selectedNode === node.id && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="45"
                    fill="none"
                    stroke="#9c27b0"
                    strokeWidth="3"
                    opacity="0.3"
                  />
                )}
                {/* Gradient border circle */}
                <defs>
                  <linearGradient
                    id={`gradient-${node.id}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#9c27b0" />
                    <stop offset="50%" stopColor="#2196f3" />
                    <stop offset="100%" stopColor="#4caf50" />
                  </linearGradient>
                </defs>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="40"
                  fill={`url(#gradient-${node.id})`}
                  className="relationship-chart-node-border"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="37"
                  fill="white"
                  className="relationship-chart-node-circle"
                />
                <image
                  x={node.x - 32}
                  y={node.y - 32}
                  width="64"
                  height="64"
                  href={APP_IMAGES[node.image] || APP_IMAGES.assignee1}
                  clipPath={`circle(32px at ${node.x}px ${node.y}px)`}
                  className="relationship-chart-node-image"
                />
                <text
                  x={node.x}
                  y={node.y + 60}
                  textAnchor="middle"
                  fill="#1a202c"
                  fontSize="13"
                  fontWeight="600"
                  className="relationship-chart-node-name"
                >
                  {node.name}
                </text>
                {node.title && (
                  <text
                    x={node.x}
                    y={node.y + 78}
                    textAnchor="middle"
                    fill="#4a5568"
                    fontSize="11"
                    className="relationship-chart-node-title"
                  >
                    {node.title}
                  </text>
                )}
                {node.company && (
                  <text
                    x={node.x}
                    y={node.y + 95}
                    textAnchor="middle"
                    fill="#718096"
                    fontSize="10"
                    className="relationship-chart-node-company"
                  >
                    {node.company}
                  </text>
                )}
                {node.additionalInfo?.map((info, infoIndex) => (
                  <text
                    key={infoIndex}
                    x={node.x}
                    y={(node.y || 0) + 112 + infoIndex * 15}
                    textAnchor="middle"
                    fill="#a0aec0"
                    fontSize="10"
                    className="relationship-chart-node-additional"
                  >
                    {info}
                  </text>
                ))}
                {node.showButton && node.buttonLabel && (
                  <g
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClick(e, node);
                    }}
                  >
                    <rect
                      x={node.x - 60}
                      y={(node.y || 0) + 140}
                      width="120"
                      height="30"
                      rx="6"
                      fill="white"
                      stroke="#9c27b0"
                      strokeWidth="1"
                      className="relationship-chart-node-button"
                    />
                    <text
                      x={node.x}
                      y={(node.y || 0) + 160}
                      textAnchor="middle"
                      fill="#9c27b0"
                      fontSize="11"
                      fontWeight="500"
                      className="relationship-chart-node-button-text"
                    >
                      {node.buttonLabel}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
        <g>{renderConnections()}</g>
      </svg>
    </div>
  );
};
