// import { LeadsContent } from "@components/leads/content";
// import { LeadsDetailedView } from "@components/leads/detailed-view";
import { ExecutiveDashboard } from "@components/executive-view";
import type { RootState } from "@stores";
import { useDispatch, useSelector } from "react-redux";
import { setLineSelectedExecutiveID } from "@stores/reducers";
import {
  EXECUTIVE_CAPITAL_DETAILS,
  OVERALL_STATS_FIELDS,
} from "@components/line/constants";

export const Lines = () => {
  const dispatch = useDispatch();
  const { detailedViewStats, executiveCapitalDetails, selectedExecutiveID } =
    useSelector((state: RootState) => state.lineDashboard);

  const onExecutiveSelect = (executiveId: number) => {
    dispatch(setLineSelectedExecutiveID(executiveId));
  };

  return (
    // <div className="leads-dashboard">
    //   {/* <LeadsContent /> */}
    //   <LeadsDetailedView />
    // </div>
    <ExecutiveDashboard
      detailedViewStats={detailedViewStats}
      executiveCapitalDetails={executiveCapitalDetails}
      selectedExecutiveID={selectedExecutiveID}
      onExecutiveSelect={onExecutiveSelect}
      executiveViewUIFields={{
        overallStatsFields: OVERALL_STATS_FIELDS,
        viewDetailsButtonLabel: "View Full Dossier",
        cardCapitalDetails: EXECUTIVE_CAPITAL_DETAILS,
      }}
    />
  );
};
