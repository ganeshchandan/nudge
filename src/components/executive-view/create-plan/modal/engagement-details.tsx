import { NudgeInput } from "@components/common";
import type { CreatePlanDetails } from "@components/executive-view/create-plan/types";
import type { FC } from "react";

interface EngagementDetailsProps {
  createPlanDetails: CreatePlanDetails;
  setCreatePlanDetails: React.Dispatch<React.SetStateAction<CreatePlanDetails>>;
}

export const EngagementDetails: FC<EngagementDetailsProps> = ({
  createPlanDetails,
  setCreatePlanDetails,
}) => {
  const onInputChange = (event: any, id: string = "") =>
    setCreatePlanDetails((createPlanDetails) => ({
      ...createPlanDetails,
      [id]: event.target.value,
    }));

  return (
    <div className="create-plan-engagement-details">
      <NudgeInput
        id="engagementName"
        controlId="engagement-name"
        label="Engagement Name"
        placeholder="Engagement Name"
        value={createPlanDetails.engagementName}
        onChange={onInputChange}
      />
      <NudgeInput
        id="opportunityType"
        controlId="opportunity-type"
        label="Opportunity Type (Optional)"
        placeholder="Opportunity Type"
        value={createPlanDetails.opportunityType}
        onChange={onInputChange}
      />
    </div>
  );
};
