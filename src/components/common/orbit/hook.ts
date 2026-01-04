import { useState } from "react";
import type {
  OrbitHierarchy,
  OrbitConfig,
  JsonHierarchyData,
} from "@components/common/orbit/types";
import {
  loadHierarchyFromJson,
  loadHierarchyFromConfig,
  groupConnectedNodesForAllLevels,
} from "@components/common/orbit/utils";

export const useOrbit = () => {
  const [hierarchy, setHierarchy] = useState<OrbitHierarchy>({
    levels: [],
    connections: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async (
    hierarchyJsonData: JsonHierarchyData,
    config: OrbitConfig
  ) => {
    try {
      setLoading(true);
      setError(null);
      let loadedHierarchy: OrbitHierarchy;
      if (config.dataSource.data) {
        loadedHierarchy = await loadHierarchyFromJson(config.dataSource.data);
      } else if (config.dataSource.url) {
        try {
          loadedHierarchy = await loadHierarchyFromConfig(config);
        } catch {
          // Fallback to imported JSON
          loadedHierarchy = await loadHierarchyFromJson(
            hierarchyJsonData as JsonHierarchyData
          );
        }
      } else {
        // Default to imported JSON
        loadedHierarchy = await loadHierarchyFromJson(
          hierarchyJsonData as JsonHierarchyData
        );
      }
      // Group connected nodes together for all levels
      const groupedHierarchy = {
        ...loadedHierarchy,
        levels: groupConnectedNodesForAllLevels(
          loadedHierarchy.levels,
          loadedHierarchy.connections
        ),
      };
      setHierarchy(groupedHierarchy);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load hierarchy data"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loadData,
    loading,
    setLoading,
    error,
    setError,
    hierarchy,
    setHierarchy,
  };
};
