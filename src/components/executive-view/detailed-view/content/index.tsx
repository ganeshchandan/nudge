import type { DetailedViewStats } from "@components/executive-view/types";
import { OneMinuteSummary } from "./one-minute-summary";
import "@components/executive-view/detailed-view/content/index.scss";
import { useContext, type FC } from "react";
import { OverflowContainer, QuickLinks } from "@components/common";
import { ExecutiveContext } from "@components/executive-view/context/setup";
import { ExecutiveMapping } from "@components/executive-view/detailed-view/content/executive-mapping";
import { AccountRelationshipOrbit } from "@components/executive-view/detailed-view/content/account-relationship-orbit";
import { LEADS } from "@components/executive-view/constants";

interface DetailedViewContentProps {
  detailedViewStats: DetailedViewStats;
}

export const DetailedViewContent: FC<DetailedViewContentProps> = ({
  detailedViewStats,
}) => {
  const { executiveViewUIFields, typeOfView } = useContext(ExecutiveContext);
  const { quickLinks } = executiveViewUIFields;
  const { headerName, links } = quickLinks;
  return (
    <div className="detailed-view-content">
      <OverflowContainer>
        <OneMinuteSummary detailedViewStats={detailedViewStats} />
        {typeOfView === LEADS ? (
          <ExecutiveMapping />
        ) : (
          <AccountRelationshipOrbit />
        )}
      </OverflowContainer>
      <QuickLinks className={""} headerName={headerName} quickLinks={links} />
    </div>
  );
};
