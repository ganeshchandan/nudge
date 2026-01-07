import { type FC, useEffect, useState } from "react";
import { KnowledgeMap } from "@components/common";
import { fetchCouncilRelationships } from "@services/network-intelligence";
import type { Node, Edge } from "@components/common/knowledge-graph/types";

const PERSON_ID = "695d8fdf46b435339f948e85"; // Murdo Gordon

export const InternalComponent: FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCouncilRelationships = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCouncilRelationships(PERSON_ID);
        
        // Transform API data to nodes and edges
        // Handle different possible response structures
        const graphNodes: Node[] = [];
        const graphEdges: Edge[] = [];

        // If response has person and connected_people structure (similar to external)
        if (data.person && data.connected_people) {
          graphNodes.push({
            id: data.person.id,
            name: data.person.name,
            image: "assignee1",
            data: {
              headline: data.person.headline,
              current_role: data.person.current_role,
            },
          });

          data.connected_people.forEach((person, index) => {
            graphNodes.push({
              id: person.id,
              name: person.name,
              image: `assignee${(index % 4) + 2}`, // Cycle through assignee images
              data: {
                headline: person.headline,
                current_role: person.current_role,
              },
            });

            graphEdges.push({
              source: data.person.id,
              target: person.id,
            });
          });
        } else if (data.relationships && Array.isArray(data.relationships)) {
          // If response has relationships array structure
          const personIds = new Set<string>();
          
          data.relationships.forEach((rel: any) => {
            if (rel.source) personIds.add(rel.source.id || rel.source);
            if (rel.target) personIds.add(rel.target.id || rel.target);
            if (rel.person1) personIds.add(rel.person1.id || rel.person1);
            if (rel.person2) personIds.add(rel.person2.id || rel.person2);
          });

          // Create nodes from unique person IDs
          Array.from(personIds).forEach((personId, index) => {
            graphNodes.push({
              id: personId,
              name: typeof personId === 'string' ? personId : `Person ${index + 1}`,
              image: `assignee${(index % 4) + 1}`,
            });
          });

          // Create edges from relationships
          data.relationships.forEach((rel: any) => {
            const sourceId = rel.source?.id || rel.source || rel.person1?.id || rel.person1;
            const targetId = rel.target?.id || rel.target || rel.person2?.id || rel.person2;
            
            if (sourceId && targetId) {
              graphEdges.push({
                source: sourceId,
                target: targetId,
              });
            }
          });
        } else {
          // Fallback: try to extract any person/people data from response
          console.warn("Unexpected API response structure:", data);
          // You might want to add more specific handling based on actual API response
        }

        setNodes(graphNodes);
        setEdges(graphEdges);
      } catch (err) {
        console.error("Failed to load council relationships data:", err);
        setError("Failed to load network data");
      } finally {
        setLoading(false);
      }
    };

    loadCouncilRelationships();
  }, []);

  if (loading) {
    return <div>Loading network data...</div>;
  }

  if (error) {
    return null;
  }

  return <KnowledgeMap nodes={nodes} edges={edges} />;
};
