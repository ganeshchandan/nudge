// import { LeadsContent } from "@components/leads/content";
// import { LeadsDetailedView } from "@components/leads/detailed-view";
import { ExecutiveDashboard } from "@components/executive-view";
import type { RootState } from "@stores";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedExecutiveID } from "@stores/reducers";

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
    <ExecutiveDashboard
      detailedViewStats={detailedViewStats}
      executiveCapitalDetails={executiveCapitalDetails}
      selectedExecutiveID={selectedExecutiveID}
      onExecutiveSelect={onExecutiveSelect}
    />
  );
};
