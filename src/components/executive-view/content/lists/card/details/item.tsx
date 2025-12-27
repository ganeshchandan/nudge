import type { FC, PropsWithChildren } from "react";
import { ExecutiveViewDetailList } from "./list-component";
import { ExecutiveViewDetailRatings } from "./ratings";

interface ExecutiveViewDetailItemProps {
  label: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const COMPONENT_TYPE_MAPPER: Record<string, FC<any>> = {
  personaQuadrant: ExecutiveViewDetailList,
  behaviouralTrait: ExecutiveViewDetailList,
  influenceMapping: ExecutiveViewDetailRatings,
  networkIntelligence: ExecutiveViewDetailRatings,
  conferenceIntelligence: ExecutiveViewDetailList,
};

export const ExecutiveViewDetailItem: FC<
  PropsWithChildren<ExecutiveViewDetailItemProps>
> = ({ label, children }) => {
  return (
    <div className="executive-capital-detail-item">
      <div className="executive-capital-detail-item-header">{label}</div>
      <div className="executive-capital-detail-item-content">{children}</div>
    </div>
  );
};
