import type { FC } from "react";

interface LeadsDetailRatingsProps {
  executiveCapitalDetails: number;
}

export const LeadsDetailRatings: FC<LeadsDetailRatingsProps> = ({
  executiveCapitalDetails,
}) => {
  console.log(executiveCapitalDetails);
  return (
    <div className="leads-capital-detail-ratings">
      {[1, 2, 3].map((id) => (
        <div
          className={`leads-capital-detail-rate-indictor ${
            id <= executiveCapitalDetails ? "rate-indictor-selected" : ""
          }`}
          key={id}
        />
      ))}
    </div>
  );
};
