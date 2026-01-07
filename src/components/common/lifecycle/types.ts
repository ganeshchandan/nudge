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
  type: "meeting" | "escalation" | "milestone" | "recovery" | "okr" | "flag" | "meetings-logged";
  label: string;
  count?: number;
  position: "above" | "middle" | "below";
  profileImages?: string[];
  icon?: string;
  sentiment?: "positive" | "negative";
  participants?: string[]; // Participant names
  showCountLabel?: boolean; // Whether to show "Meetings Logged - XX" format
  showParticipantNames?: boolean; // Whether to show participant names in card
}

export interface LifecycleProps {
  startDate: Date;
  endDate: Date;
  segments: TimelineSegment[];
  events: TimelineEvent[];
  className?: string;
}

