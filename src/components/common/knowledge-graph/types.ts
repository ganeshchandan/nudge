export interface Node {
  id: string;
  name: string;
  image: string;
  data?: Record<string, any>;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface Edge {
  source: string;
  target: string;
  sourceX?: number;
  sourceY?: number;
  targetX?: number;
  targetY?: number;
}

export interface LabelConfig {
  size: string;
  color: string;
  selectedColor: string;
  hide?: boolean;
}

export interface NodeConfig {
  size: string;
  hide?: boolean;
  disabled: boolean;
  label: LabelConfig;
  distance: number;
}

export interface EdgeConfig {
  stroke?: string;
  strokeWidth?: string;
  strokeDasharray?: number;
  strokeDashoffset?: number;
  hide?: boolean;
  disabled?: boolean;
  label?: LabelConfig;
}

export interface GraphConfig {
  node: NodeConfig;
  edge: EdgeConfig;
  strength: number;
  forceCenter: number[];
}

export type CSSPropertiesWithVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};
