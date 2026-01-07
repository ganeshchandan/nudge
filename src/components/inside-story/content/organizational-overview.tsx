import { type FC } from "react";
import { RegionalDonutChart } from "./regional-donut-chart";

export const OrganizationalOverview: FC = () => {
  return (
    <div className="organizational-overview">
      <h2 className="section-title">Organizational Overview</h2>
      <div className="overview-content">
        <RegionalDonutChart />
        <div className="key-changes">
          <ul className="changes-list">
            <li>
              <span className="highlight-purple">Change in Leadership</span>
              {`, `}
              <br />
              <span>New Bayer AG CEO Bill Anderson (Ex Roche)</span>
            </li>
            <li>
              <span className="highlight-purple">Shift</span>
              {` from Opex Saving to Pharma Investment`}
            </li>
            <li>
              <span className="highlight-purple">Bayer's IMCM*</span>
              {` dismantled & replaced by`}
              <br />
              <span>Customer Excellence Commercial & Medical</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

