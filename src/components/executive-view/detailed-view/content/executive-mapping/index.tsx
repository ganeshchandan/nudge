import { type FC, useState } from "react";
import "@components/executive-view/detailed-view/content/executive-mapping/index.scss";
import { EditIcon, ExpandIcon } from "@assets/images";
import { NudgeTabs } from "@components/common";
import { InternalComponent } from "./internal";
import { ExternalComponent } from "./external";

interface ExecutiveMappingProps {}

export const ExecutiveMapping: FC<ExecutiveMappingProps> = () => {
  const [selectedTab, setSelectedTab] = useState<string>("external");

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
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          contents={{
            external: {
              Component: ExternalComponent,
            },
            internal: { Component: InternalComponent },
          }}
        />
      </div>
    </div>
  );
};
