import type { FC, PropsWithChildren } from "react";
import { ExecutiveCapitalDetailList } from "./list-component";
import { ExecutiveCapitalDetailRatings } from "./ratings";

interface ExecutiveCapitalDetailItemProps {
  label: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const COMPONENT_TYPE_MAPPER: Record<string, FC<any>> = {
  personaQuadrant: ExecutiveCapitalDetailList,
  behaviouralTrait: ExecutiveCapitalDetailList,
  influenceMapping: ExecutiveCapitalDetailRatings,
  networkIntelligence: ExecutiveCapitalDetailRatings,
  conferenceIntelligence: ExecutiveCapitalDetailList,
};

export const ExecutiveCapitalDetailItem: FC<
  PropsWithChildren<ExecutiveCapitalDetailItemProps>
> = ({ label, children }) => {
  return (
    <div className="executive-capital-detail-item">
      <div className="executive-capital-detail-item-header">{label}</div>
      <div className="executive-capital-detail-item-content">{children}</div>
    </div>
  );
};
