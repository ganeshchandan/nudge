import { type FC, useEffect, useState } from "react";
import { KnowledgeMap } from "@components/common";
import { fetchNetworkIntelligence } from "@services/network-intelligence";
import type { Node, Edge } from "@components/common/knowledge-graph/types";

const PERSON_ID = "695d8fdf46b435339f948e85"; // Murdo Gordon

export const ExternalComponent: FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNetworkData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchNetworkIntelligence(PERSON_ID);
        
        // Create nodes from API data
        const graphNodes: Node[] = [
          {
            id: data.person.id,
            name: data.person.name,
            image: "assignee1", // Default image, can be updated if API provides profile pictures
            data: {
              headline: data.person.headline,
              current_role: data.person.current_role,
            },
          },
          ...data.connected_people.map((person, index) => ({
            id: person.id,
            name: person.name,
            image: `assignee${(index % 4) + 1}`, // Cycle through assignee images
            data: {
              headline: person.headline,
              current_role: person.current_role,
            },
          })),
        ];

        // Create edges connecting the main person to all connected people
        const graphEdges: Edge[] = data.connected_people.map((person) => ({
          source: data.person.id,
          target: person.id,
        }));

        // Position nodes: center node in middle, some nodes on the right
        const centerNodeId = data.person.id;
        const connectedCount = data.connected_people.length;
        const nodesOnRight = Math.max(0, Math.ceil(connectedCount / 2) - 2); // 2 fewer nodes on the right
        
        const positionedNodes = graphNodes.map((node, index) => {
          if (node.id === centerNodeId) {
            // Center node stays at origin
            return {
              ...node,
              x: 0,
              y: 0,
            };
          }
          
          // Calculate position: first half on right, rest distributed in circle
          const connectedIndex = index - 1; // Subtract 1 for center node
          
          if (connectedIndex < nodesOnRight) {
            // Position on the right side
            const spacing = 70; // Vertical spacing between nodes
            const offsetY = (connectedIndex - (nodesOnRight - 1) / 2) * spacing;
            return {
              ...node,
              x: 70, // x position on the right
              y: offsetY,
            };
          } else {
            // Position others in a circle on the left
            const remainingNodes = connectedCount - nodesOnRight;
            const angleIndex = connectedIndex - nodesOnRight;
            const angle = (Math.PI * angleIndex) / remainingNodes + Math.PI; // Left side (180-360 degrees)
            const radius = 70; // Radius for shorter edges
            return {
              ...node,
              x: radius * Math.cos(angle),
              y: radius * Math.sin(angle),
            };
          }
        });

        setNodes(positionedNodes);
        setEdges(graphEdges);
      } catch (err) {
        console.error("Failed to load network intelligence data:", err);
        setError("Failed to load network data");
      } finally {
        setLoading(false);
      }
    };

    loadNetworkData();
  }, []);

  if (loading) {
    return <div>Loading network data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <KnowledgeMap 
      nodes={nodes} 
      edges={edges}
      graphConfig={{
        node: {
          size: "2.5rem", // Reduced from 3.875rem
          hide: false,
          disabled: false,
          label: {
            size: "0.625rem",
            color: "#666",
            selectedColor: "#000",
            hide: false,
          },
          distance: 70, // Reduced distance for shorter edges
        },
        edge: {
          stroke: "#ccc",
          strokeWidth: "1px",
          hide: false,
          disabled: false,
        },
        strength: -200, // Reduced repulsion for more compact layout
        forceCenter: [0, 0],
      }}
    />
  );
};

