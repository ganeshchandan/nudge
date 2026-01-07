import type { FC } from "react";

interface ExecutiveViewDetailRatingsProps {
  executiveCapitalDetails: number;
}

export const ExecutiveViewDetailRatings: FC<
  ExecutiveViewDetailRatingsProps
> = ({ executiveCapitalDetails }) => {
  // Handle undefined or null values - default to 0
  const rating = executiveCapitalDetails ?? 0;
  
  return (
    <div className="executive-capital-detail-ratings">
      {[1, 2, 3].map((id) => (
        <div
          className={`executive-capital-detail-rate-indictor ${
            id <= rating ? "rate-indictor-selected" : ""
          }`}
          key={id}
        />
      ))}
    </div>
  );
};
