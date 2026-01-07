import { useState, type FC } from "react";
import "@components/inside-story/index.scss";
import { InsideStoryContent } from "./content";

export const InsideStory: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("scoreCard");

  return (
    <div
      className={`inside-story-page smooth-content-load ${selectedCategory}`}
    >
      <InsideStoryContent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};
