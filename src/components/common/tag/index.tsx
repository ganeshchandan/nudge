import type { FC } from "react";
import "@components/common/tag/index.scss";

interface NudegeTagProps {
  tagName: string;
  className?: string;
}

export const NudegeTag: FC<NudegeTagProps> = ({ tagName, className = "" }) => {
  return <div className={`nudge-tag ${className}`}>{tagName}</div>;
};
