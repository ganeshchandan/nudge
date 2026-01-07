import type { FC } from "react";
import "./index.scss";

interface StakeholdersInformationListProps {
  headerName: string;
  informations: string[];
}

export const StakeholdersInformationList: FC<
  StakeholdersInformationListProps
> = ({ headerName, informations }) => {
  return (
    <div className="stakeholders-information-list">
      <div className="stakeholders-information-header">{headerName}</div>
      <ul className="informations-lists">
        {informations.map((information, index) => (
          <li key={index}>{information}</li>
        ))}
      </ul>
    </div>
  );
};
