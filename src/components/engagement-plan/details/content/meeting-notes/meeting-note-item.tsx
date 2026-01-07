import { FolderIcon } from "@assets/images";
import type { FC } from "react";

interface MeetingNoteItemProps {
  item: Record<string, any>;
}

export const MeetingNoteItems: FC<MeetingNoteItemProps> = ({ item }) => {
  const { name } = item;
  return (
    <div className="meeting-note-item">
      <FolderIcon className="asset-folder-icon" />
      <label className="file-name">{name}</label>
    </div>
  );
};
