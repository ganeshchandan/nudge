import type { FC } from "react";

interface ExecutiveViewDetailRatingsProps {
  executiveCapitalDetails: number;
}

export const ExecutiveViewDetailRatings: FC<
  ExecutiveViewDetailRatingsProps
> = ({ executiveCapitalDetails }) => {
  return (
    <div className="executive-capital-detail-ratings">
      {[1, 2, 3].map((id) => (
        <div
          className={`executive-capital-detail-rate-indictor ${
            id <= executiveCapitalDetails ? "rate-indictor-selected" : ""
          }`}
          key={id}
        />
      ))}
    </div>
  );
};
