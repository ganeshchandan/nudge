import { DownloadIcon, FolderIcon } from "@assets/images";
import type { FC } from "react";

interface AssetsItemProps {
  item: Record<string, any>;
}

export const AssetsItem: FC<AssetsItemProps> = ({ item }) => {
  const { name, _id } = item;
  return (
    <div className="engagement-plan-asset" key={_id}>
      <FolderIcon className="asset-folder-icon" />
      <label className="file-name">{name}</label>
      <DownloadIcon className="asset-download-icon" />
    </div>
  );
};
