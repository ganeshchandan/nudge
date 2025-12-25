import type { FC } from "react";

interface LeadsCardTagsProps {
  tags: string[];
}

export const LeadsCardTags: FC<LeadsCardTagsProps> = ({ tags }) => {
  return (
    <div className="leads-capital-tags">
      {tags.map((tag) => (
        <div className="leads-card-tags" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};
