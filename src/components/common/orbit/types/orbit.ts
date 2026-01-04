export interface Person {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  color?: string;
  countryCode?: string; // Country code like 'IND', 'UK', 'US'
}

export interface SentimentConnection {
  from: string; // Person ID
  to: string; // Person ID
  sentiment: "positive" | "neutral" | "negative";
  strength: number; // 0-1, how strong the connection is
  label?: string;
}

export interface OrbitNode {
  id: string;
  person: Person;
  startAngle: number;
  level: number; // Which orbit level (0 = innermost)
}

export interface OrbitLevel {
  level: number;
  radius: number; // Radius of this orbit path
  nodes: OrbitNode[];
}

export interface OrbitHierarchy {
  levels: OrbitLevel[];
  connections: SentimentConnection[];
  centerPerson?: Person; // Optional person at the center
}

/**
 * JSON data structure as it comes from the file
 */
export interface JsonHierarchyData {
  people: Person[];
  levels: Array<{
    level: number;
    radius: number;
    nodeIds: string[];
  }>;
  connections: Array<{
    from: string;
    to: string;
    sentiment: "positive" | "neutral" | "negative";
    strength: number;
    label?: string;
  }>;
  centerPerson?: Person;
}
