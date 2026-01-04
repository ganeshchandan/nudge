import { ExecutiveDashboard } from "@components/executive-view";
import type { RootState } from "@stores";
import { useDispatch, useSelector } from "react-redux";
import { setLineSelectedExecutiveID } from "@stores/reducers";
import {
  ENGAGEMENT_FIELDS,
  EXECUTIVE_CAPITAL_DETAILS,
  OVERALL_STATS_FIELDS,
  QUICK_LINKS,
} from "@components/line/constants";

export const Lines = () => {
  const dispatch = useDispatch();
  const { detailedViewStats, executiveCapitalDetails, selectedExecutiveID } =
    useSelector((state: RootState) => state.lineDashboard);

  const onExecutiveSelect = (executiveId: number) => {
    dispatch(setLineSelectedExecutiveID(executiveId));
  };

  return (
    <ExecutiveDashboard
      detailedViewStats={detailedViewStats}
      executiveCapitalDetails={executiveCapitalDetails}
      selectedExecutiveID={selectedExecutiveID}
      onExecutiveSelect={onExecutiveSelect}
      executiveViewUIFields={{
        overallStatsFields: OVERALL_STATS_FIELDS,
        viewDetailsButtonLabel: "View Full Dossier",
        cardCapitalDetails: EXECUTIVE_CAPITAL_DETAILS,
        engagementFields: ENGAGEMENT_FIELDS,
        quickLinks: {
          headerName: "Profile Category",
          links: QUICK_LINKS,
        },
      }}
      typeOfView="lines"
    />
  );
};
