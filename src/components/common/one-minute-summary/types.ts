export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
}

export interface OneMinuteSummaryProps {
  title?: string;
  points: SummaryPoint[];
  className?: string;
}

