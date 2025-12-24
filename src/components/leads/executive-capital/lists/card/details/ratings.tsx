import type { FC } from "react";

interface ExecutiveCapitalDetailRatingsProps {
  executiveCapitalDetails: number;
}

export const ExecutiveCapitalDetailRatings: FC<
  ExecutiveCapitalDetailRatingsProps
> = ({ executiveCapitalDetails }) => {
  console.log(executiveCapitalDetails);
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
