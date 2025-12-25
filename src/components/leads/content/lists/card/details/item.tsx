import type { FC, PropsWithChildren } from "react";
import { LeadsDetailList } from "./list-component";
import { LeadsDetailRatings } from "./ratings";

interface LeadsDetailItemProps {
  label: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const COMPONENT_TYPE_MAPPER: Record<string, FC<any>> = {
  personaQuadrant: LeadsDetailList,
  behaviouralTrait: LeadsDetailList,
  influenceMapping: LeadsDetailRatings,
  networkIntelligence: LeadsDetailRatings,
  conferenceIntelligence: LeadsDetailList,
};

export const LeadsCardDetailItem: FC<
  PropsWithChildren<LeadsDetailItemProps>
> = ({ label, children }) => {
  return (
    <div className="leads-capital-detail-item">
      <div className="leads-capital-detail-item-header">{label}</div>
      <div className="leads-capital-detail-item-content">{children}</div>
    </div>
  );
};
