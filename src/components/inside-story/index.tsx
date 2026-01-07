import { type FC } from "react";
import "@components/inside-story/index.scss";
import { InsideStoryContent } from "./content";

export const InsideStory: FC = () => {
  return (
    <div className="inside-story-page smooth-content-load">
      <InsideStoryContent />
    </div>
  );
};
