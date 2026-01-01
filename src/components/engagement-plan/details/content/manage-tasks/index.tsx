import "@components/engagement-plan/details/content/manage-tasks/index.scss";
import { ReviewerDetails } from "@components/engagement-plan/details/content/manage-tasks/reviewer-details";
import { AssineeDetails } from "./assinee-details";

export const ManageTasks = () => {
  return (
    <div className="engagement-plan-manage-tasks smooth-content-load">
      <AssineeDetails />
      <ReviewerDetails />
    </div>
  );
};
