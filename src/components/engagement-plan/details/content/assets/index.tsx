import { DownloadIcon } from "@assets/images";
import { NudgeLists, OverflowContainer } from "@components/common";
import { ASSETS_SAMPLE } from "@components/engagement-plan/constants";
import { AssetsItem } from "./item";

export const Assets = () => {
  const assets = ASSETS_SAMPLE;
  return (
    <div className="engagement-plan-assets smooth-content-load">
      <OverflowContainer>
        <NudgeLists
          items={assets}
          Component={AssetsItem}
          className="engagement-plan-assets-list"
        />
      </OverflowContainer>
      <div className="upload-assets">
        <DownloadIcon className="asset-upload-icon" />
        Upload Asset(s)
      </div>
    </div>
  );
};
