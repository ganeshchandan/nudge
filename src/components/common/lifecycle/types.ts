export interface TimelineSegment {
  id: string;
  startDate: Date;
  endDate: Date;
  color: "green" | "red" | "purple" | "blue" | "yellow";
  label?: string;
}

export interface TimelineEvent {
  id: string;
  date: Date;
  type: "meeting" | "escalation" | "milestone" | "recovery" | "okr" | "flag";
  label: string;
  count?: number;
  position: "above" | "middle" | "below";
  profileImages?: string[];
  icon?: string;
  sentiment?: "positive" | "negative";
}

export interface LifecycleProps {
  startDate: Date;
  endDate: Date;
  segments: TimelineSegment[];
  events: TimelineEvent[];
  className?: string;
}

