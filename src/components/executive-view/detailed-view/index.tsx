import "@components/executive-view/detailed-view/index.scss";
import { DetailedOverallStats } from "@components/executive-view/detailed-view/overall-stats";
import { DetailedViewContent } from "@components/executive-view/detailed-view/content";
import { LeftIcon } from "@assets/images";
import { useContext, type FC } from "react";
import type { DetailedViewStats } from "../types";
import { ExecutiveContext } from "../context/setup";

interface ExecutiveDetailedViewProps {
  detailedViewStats: DetailedViewStats;
}

export const ExecutiveDetailedView: FC<ExecutiveDetailedViewProps> = ({
  detailedViewStats,
}) => {
  const { onExecutiveSelect } = useContext(ExecutiveContext);

  const onExecutiveIdSelect = () => onExecutiveSelect(-1);

  return (
    <div className="executive-detailed-view">
      <div className="detailed-view-back-button" onClick={onExecutiveIdSelect}>
        <LeftIcon className="detailed-view-back-button-icon" />
      </div>
      <DetailedOverallStats detailedViewStats={detailedViewStats} />
      <DetailedViewContent detailedViewStats={detailedViewStats} />
    </div>
  );
};
