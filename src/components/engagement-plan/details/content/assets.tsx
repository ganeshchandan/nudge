import { DownloadIcon, FolderIcon } from "@assets/images";
import { OverflowContainer } from "@components/common";
import { ASSETS_SAMPLE } from "@components/engagement-plan/constants";

export const Assets = () => {
  const assets = ASSETS_SAMPLE;
  return (
    <div className="engagement-plan-assets">
      <OverflowContainer>
        <div className="engagement-plan-assets-list">
          {assets.map(({ fileName, _id }) => (
            <div className="engagement-plan-asset" key={_id}>
              <FolderIcon className="asset-folder-icon" />
              <label className="file-name">{fileName}</label>
              <DownloadIcon className="asset-download-icon" />
            </div>
          ))}
        </div>
      </OverflowContainer>
      <div className="upload-assets">
        <DownloadIcon className="asset-upload-icon" />
        Upload Asset(s)
      </div>
    </div>
  );
};
