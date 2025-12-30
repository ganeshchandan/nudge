import { NudgeInput } from "@components/common";

export const EngagementDetails = () => {
  return (
    <div className="create-plan-engagement-details">
      <NudgeInput
        controlId="engagement-name"
        label="Engagement Name"
        placeholder="Engagement Name"
      />
      <NudgeInput
        controlId="opportunity-type"
        label="Opportunity Type (Optional)"
        placeholder="Opportunity Type"
      />
    </div>
  );
};
