import "@components/stats-dashboard/summary-nudge/summary/widgets/program-view/index.scss";
import { NudgeWidget } from "@components/common/widget";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";
import { APP_IMAGES } from "@assets/images/app_image";

export const ProgramView = () => {
  const programView = useSelector(
    (state: RootState) => state.statsDashbaord.accountSummary.programView
  );
  return (
    <NudgeWidget className="program-view-widget">
      <div className="program-view-header">Program View</div>
      <div className="program-view-lists">
        <div className="program-view-table-headers">
          <div className="program-view-table-header-cell"></div>
          <div className="program-view-table-header-cell">Powercentres</div>
          <div className="program-view-table-header-cell">Actions Taken</div>
          <div className="program-view-table-header-cell">% score (0–100)</div>
        </div>
        <div className="program-view-table-content">
          {programView.map(
            ({ personImage, powerCentres, actionsTaken, scores }) => (
              <div className="program-view-table-content-row">
                <div className="program-view-table-row-cell person-image-cell">
                  <img src={APP_IMAGES[personImage]} className="person-image" />
                </div>
                <div className="program-view-table-row-cell">
                  {powerCentres}
                </div>
                <div className="program-view-table-row-cell">
                  {actionsTaken}
                </div>
                <div className="program-view-table-row-cell">{scores}</div>
              </div>
            )
          )}
        </div>
      </div>
    </NudgeWidget>
  );
};
