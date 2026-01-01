import type { FC } from "react";

interface DueDateProps {
  dueDate: string;
}
export const DueDate: FC<DueDateProps> = ({ dueDate }) => {
  return (
    <div className="table-content-row-cell header-content-row-cell due-date-cell">
      {dueDate}
    </div>
  );
};
