import { OverflowContainer } from "@components/common";
import { ExecutiveCapitalCard } from "@components/leads/executive-capital/lists/card";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

export const ExecutiveCapitalList = () => {
  const { executiveCapitals } = useSelector(
    (state: RootState) => state.leadsDashboard.executiveCapitalDetails
  );
  return (
    <OverflowContainer>
      <div className="executive-capital-lists">
        {executiveCapitals.map((executiveCapital) => (
          <ExecutiveCapitalCard
            executiveCapital={executiveCapital}
            key={executiveCapital.id}
          />
        ))}
      </div>
    </OverflowContainer>
  );
};
