// import { LeadsContent } from "@components/leads/content";
// import { LeadsDetailedView } from "@components/leads/detailed-view";
import { ExecutiveDashboard } from "@components/executive-view";
import "@components/leads/index.scss";
import { NudgeAI } from "@components/nudge-ai";
import type { RootState } from "@stores";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedExecutiveID } from "@stores/reducers";
import {
  ENGAGEMENT_FIELDS,
  EXECUTIVE_CAPITAL_DETAILS,
  OVERALL_STATS_FIELDS,
  QUICK_LINKS,
} from "@components/leads/constants";

export const Leads = () => {
  const dispatch = useDispatch();
  const { detailedViewStats, executiveCapitalDetails, selectedExecutiveID } =
    useSelector((state: RootState) => state.leadsDashboard);

  const onExecutiveSelect = (executiveId: number) => {
    dispatch(setSelectedExecutiveID(executiveId));
  };

  return (
     // <div className="leads-dashboard">
    //   {/* <LeadsContent /> */}
    //   <LeadsDetailedView />
    // </div>
    <div className="leads-dashboard">
      <ExecutiveDashboard
        detailedViewStats={detailedViewStats}
        executiveCapitalDetails={executiveCapitalDetails}
        selectedExecutiveID={selectedExecutiveID}
        onExecutiveSelect={onExecutiveSelect}
        executiveViewUIFields={{
          overallStatsFields: OVERALL_STATS_FIELDS,
          viewDetailsButtonLabel: "VIEW DETAILS",
          cardCapitalDetails: EXECUTIVE_CAPITAL_DETAILS,
          engagementFields: ENGAGEMENT_FIELDS,
          quickLinks: {
            headerName: "Profile Category",
            links: QUICK_LINKS,
          },
        }}
      />
      <NudgeAI />
    </div>
  );
};
