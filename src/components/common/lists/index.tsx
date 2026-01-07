import type { FC } from "react";

export interface ListItem {
  id: number;
  value: string | number;
  name: string;
  [key: string]: unknown;
}

interface NudgeListsProps {
  className?: string;
  items: ListItem[];
  onClick?: (params: ListItem) => void;
  Component: FC<{ item: ListItem }>;
}

export const NudgeLists: FC<NudgeListsProps> = ({
  className = "",
  items,
  Component,
}) => {
  return (
    <div className={`nudge-lists ${className}`}>
      {items.map((item) => (
        <Component key={item.id} item={item} />
      ))}
    </div>
  );
};
