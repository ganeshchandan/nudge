import type { FC } from "react";

interface CompletionProps {
  completion: number;
}
export const Completion: FC<CompletionProps> = ({ completion }) => {
  return (
    <div className="table-content-row-cell header-content-row-cell completion-cell">
      {completion}
    </div>
  );
};
