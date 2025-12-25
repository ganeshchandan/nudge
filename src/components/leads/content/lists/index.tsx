import { OverflowContainer } from "@components/common";
import { LeadsListCard } from "@components/leads/content/lists/card";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

export const LeadsList = () => {
  const { executiveCapitals } = useSelector(
    (state: RootState) => state.leadsDashboard.executiveCapitalDetails
  );
  return (
    <OverflowContainer>
      <div className="leads-lists">
        {executiveCapitals.map((executiveCapital) => (
          <LeadsListCard
            executiveCapital={executiveCapital}
            key={executiveCapital.id}
          />
        ))}
      </div>
    </OverflowContainer>
  );
};
