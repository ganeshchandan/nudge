import { useState, type FC } from "react";
import "@components/executive-view/detailed-view/content/account-relationship-orbit/index.scss";
import { EditIcon, ExpandIcon } from "@assets/images";
import { Orbit } from "@components/common/orbit";
import hierarchyJsonData from "./data/hierarchy.json";
import type { JsonHierarchyData } from "@components/common/orbit/types";

interface AccountRelationshipOrbitProps {}

export const AccountRelationshipOrbit: FC<
  AccountRelationshipOrbitProps
> = () => {
  const [showAllConnections, setShowAllConnections] = useState<boolean>(true);

  return (
    <div className="account-relationship-orbit">
      <div className="account-relationship-orbit-header">
        <label>Account Relationship Orbit</label>
        <div className="account-relationship-orbit-actions">
          <EditIcon className="account-relationship-orbit-action-icon" />
          <ExpandIcon className="account-relationship-orbit-action-icon" />
        </div>
      </div>
      <div className="account-relationship-orbit-content">
        <label className="information-text">
          VP & Above [Click ‘Node’ to see downstream activity]
        </label>
        <Orbit
          showAllConnections={showAllConnections}
          setShowAllConnections={setShowAllConnections}
          hierarchyJsonData={hierarchyJsonData as JsonHierarchyData}
        />
      </div>
    </div>
  );
};
