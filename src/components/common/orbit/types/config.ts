import type { Person } from "./orbit";

export interface OrbitConfigLayout {
  minContainerSize: number;
  maxContainerSize: number;
  padding: number;
  responsive: boolean;
}

/**
 * Configuration for rendering the orbit visualization
 */
export interface OrbitConfig {
  // Visual settings
  visual: {
    backgroundColor: string;
    nodeSize: number;
    nodeBackgroundColor: string;
    nodeTextColor: string;
    trackColor: string;
    trackWidth: number;
    trackStyle: "solid" | "dashed" | "dotted";
    centerLogoSize: number;
    centerLogoColor: string;
    centerLogoTextColor: string;
  };

  // Sentiment visualization settings
  sentiment: {
    showEmojis: boolean;
    emojiSize: number;
    showNegativeTrackColor: boolean;
    negativeTrackColor: string;
    emojiPositions: "onTrack" | "betweenNodes";
    arcStrokeWidth: number;
    arcDashArray: string;
  };

  // Interaction settings
  interaction: {
    enableClick: boolean;
    enableHover: boolean;
    showPopup: boolean;
    showConnectionsToggle: boolean;
  };

  // Layout settings
  layout: OrbitConfigLayout;

  // Data source
  dataSource: {
    url?: string;
    data?: {
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
    };
  };
}

/**
 * Default configuration
 */
export const defaultOrbitConfig: OrbitConfig = {
  visual: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    nodeSize: 40,
    nodeBackgroundColor: "#ffffff",
    nodeTextColor: "#000000",
    trackColor: "rgba(200, 200, 200, 0.6)",
    trackWidth: 2,
    trackStyle: "dashed",
    centerLogoSize: 70,
    centerLogoColor: "#ff6600",
    centerLogoTextColor: "#ffffff",
  },
  sentiment: {
    showEmojis: true,
    emojiSize: 28,
    showNegativeTrackColor: true,
    negativeTrackColor: "#ef4444",
    emojiPositions: "onTrack",
    arcStrokeWidth: 3,
    arcDashArray: "5,6",
  },
  interaction: {
    enableClick: true,
    enableHover: true,
    showPopup: true,
    showConnectionsToggle: true,
  },
  layout: {
    minContainerSize: 300,
    maxContainerSize: 1000,
    padding: 100,
    responsive: true,
  },
  dataSource: {
    url: "/hierarchy.json",
  },
};
