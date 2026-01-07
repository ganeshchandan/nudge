import { StarIcon } from "@assets/images";
import "@components/common/rating/index.scss";
import { memo } from "react";

interface RatingProps {
  className?: string;
  rating: number;
}

export const Rating = memo(({ rating, className = "" }: RatingProps) => {
  return (
    <div className={`nudge-rating ${className}`}>
      {[1, 2, 3, 4, 5].map((ratingIndex) => (
        <StarIcon
          className={`nudge-rating-icon ${
            ratingIndex <= rating ? "rating-selected" : ""
          }`}
        />
      ))}
    </div>
  );
});
