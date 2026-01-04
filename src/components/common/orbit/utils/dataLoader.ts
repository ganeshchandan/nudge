import type {
  JsonHierarchyData,
  OrbitConfig,
  OrbitHierarchy,
  OrbitLevel,
  OrbitNode,
  Person,
} from "@components/common/orbit/types";

/**
 * Load hierarchy data from JSON and transform it into OrbitHierarchy format
 * @throws {Error} If the data structure is invalid or required people are missing
 */
export const loadHierarchyFromJson = async (
  jsonData: JsonHierarchyData
): Promise<OrbitHierarchy> => {
  // Validate input data
  if (
    !jsonData ||
    !Array.isArray(jsonData.people) ||
    !Array.isArray(jsonData.levels)
  ) {
    throw new Error(
      "Invalid hierarchy data: missing required fields (people, levels)"
    );
  }

  // Create a map of people for quick lookup
  const peopleMap = new Map<string, Person>();
  jsonData.people.forEach((person) => {
    if (!person || !person.id || !person.name) {
      console.warn("Invalid person data found, skipping:", person);
      return;
    }
    peopleMap.set(person.id, person);
  });

  // Transform levels: convert nodeIds to OrbitNodes with equal spacing
  const levels: OrbitLevel[] = jsonData.levels.map((levelData) => {
    const nodeCount = levelData.nodeIds.length;
    const angleStep = nodeCount > 0 ? 360 / nodeCount : 0;

    const nodes: OrbitNode[] = levelData.nodeIds
      .map((personId, index) => {
        const person = peopleMap.get(personId);
        if (!person) {
          console.error(
            `Person with id "${personId}" not found in people array. Skipping node.`
          );
          return null;
        }

        return {
          id: `node-${levelData.level}-${index}`,
          person,
          startAngle: index * angleStep,
          level: levelData.level,
        };
      })
      .filter((node): node is OrbitNode => node !== null);

    return {
      level: levelData.level,
      radius: levelData.radius,
      nodes,
    };
  });

  return {
    levels,
    connections: jsonData.connections,
    centerPerson: jsonData.centerPerson,
  };
};

/**
 * Load hierarchy data from a URL
 */
export const loadHierarchyFromUrl = async (
  url: string
): Promise<OrbitHierarchy> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to load hierarchy data from ${url}: ${response.statusText}`
      );
    }
    const jsonData: JsonHierarchyData = await response.json();
    return loadHierarchyFromJson(jsonData);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Failed to load hierarchy data from ${url}: Unknown error`);
  }
};

/**
 * Load hierarchy data from configuration
 */
export const loadHierarchyFromConfig = async (
  config: OrbitConfig
): Promise<OrbitHierarchy> => {
  if (config.dataSource.data) {
    return loadHierarchyFromJson(config.dataSource.data);
  } else if (config.dataSource.url) {
    return loadHierarchyFromUrl(config.dataSource.url);
  } else {
    throw new Error("No data source specified in configuration");
  }
};
