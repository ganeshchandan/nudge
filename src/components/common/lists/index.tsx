import type { FC } from "react";

interface NudgeListsProps {
  className?: string;
  items: {
    id: number;
    value: string | number;
    name: string;
    [key: string]: any;
  }[];
  onClick?: (params: { [key: string]: any }) => void;
  Component: FC<any>;
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
