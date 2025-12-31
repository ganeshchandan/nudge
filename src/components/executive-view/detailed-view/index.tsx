import "@components/executive-view/detailed-view/index.scss";
import { DetailedOverallStats } from "@components/executive-view/detailed-view/overall-stats";
import { DetailedViewContent } from "@components/executive-view/detailed-view/content";
import { useContext, type FC } from "react";
import type { DetailedViewStats } from "../types";
import { ExecutiveContext } from "../context/setup";
import { DetailedViewBackButton } from "@components/common";

interface ExecutiveDetailedViewProps {
  detailedViewStats: DetailedViewStats;
}

export const ExecutiveDetailedView: FC<ExecutiveDetailedViewProps> = ({
  detailedViewStats,
}) => {
  const { onExecutiveSelect } = useContext(ExecutiveContext);

  const onExecutiveIdSelect = () => onExecutiveSelect(-1);

  return (
    <div className="executive-detailed-view smooth-content-load">
      <DetailedViewBackButton onBack={onExecutiveIdSelect} />
      <DetailedOverallStats detailedViewStats={detailedViewStats} />
      <DetailedViewContent detailedViewStats={detailedViewStats} />
    </div>
  );
};
