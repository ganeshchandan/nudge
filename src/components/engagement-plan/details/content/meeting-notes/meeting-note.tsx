import { FolderIcon } from "@assets/images";
import type { PlanMeetingNote } from "@components/engagement-plan/types";
import type { FC } from "react";

interface MeetingNoteProps {
  meetingNote: PlanMeetingNote;
}

export const MeetingNote: FC<MeetingNoteProps> = ({ meetingNote }) => {
  const { date } = meetingNote;
  return (
    <div className="meeting-note">
      <div className="meeting-note-header">
        <FolderIcon />
        <label className="meeting-note-date-text">{date}</label>
      </div>
    </div>
  );
};
