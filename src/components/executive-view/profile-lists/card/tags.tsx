import { NudgeTag } from "@components/common";
import type { FC } from "react";

interface ExecutiveViewCardTagsProps {
  tags: string[];
}

export const ExecutiveViewCardTags: FC<ExecutiveViewCardTagsProps> = ({
  tags,
}) => {
  return (
    <div className="executive-capital-tags">
      {tags.map((tag) => (
        <NudgeTag className="executive-card-tags" key={tag} tagName={tag} />
      ))}
    </div>
  );
};
