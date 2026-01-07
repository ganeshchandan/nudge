import type { FC } from "react";
import "@components/common/tag/index.scss";

interface NudgeTagProps {
  tagName: string;
  className?: string;
}

export const NudgeTag: FC<NudgeTagProps> = ({ tagName, className = "" }) => {
  return <div className={`nudge-tag ${className}`}>{tagName}</div>;
};
