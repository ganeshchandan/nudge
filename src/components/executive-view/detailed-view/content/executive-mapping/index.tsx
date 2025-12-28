import type { FC } from "react";
import "@components/executive-view/detailed-view/content/executive-mapping/index.scss";
import { EditIcon, ExpandIcon } from "@assets/images";
import { NudgeTabs } from "@components/common/tabs";

interface ExecutiveMappingProps {}

export const ExecutiveMapping: FC<ExecutiveMappingProps> = () => {
  return (
    <div className="executive-mapping">
      <div className="executive-mapping-header">
        <label>Executive Mapping</label>
        <div className="executive-mapping-actions">
          <EditIcon className="executive-mapping-action-icon" />
          <ExpandIcon className="executive-mapping-action-icon" />
        </div>
      </div>
      <div>
        <NudgeTabs
          tabItems={[
            { name: "External", id: "external" },
            { name: "Internal", id: "internal" },
          ]}
          selectedTab={"external"}
        />
      </div>
    </div>
  );
};
