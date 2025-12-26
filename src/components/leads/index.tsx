import "@components/leads/index.scss";
import { LeadsContent } from "@components/leads/content";
import { LeadsDetailedView } from "@components/leads/detailed-view";

export const Leads = () => {
  return (
    <div className="leads-dashboard">
      {/* <LeadsContent /> */}
      <LeadsDetailedView />
    </div>
  );
};
