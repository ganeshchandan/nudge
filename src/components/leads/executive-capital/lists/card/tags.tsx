import type { FC } from "react";

interface ExecutiveCapitalTagsProps {
  tags: string[];
}

export const ExecutiveCapitalTags: FC<ExecutiveCapitalTagsProps> = ({
  tags,
}) => {
  return (
    <div className="executive-capital-tags">
      {tags.map((tag) => (
        <div className="executive-capital-tag" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};
