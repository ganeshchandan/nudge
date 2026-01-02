import { FolderIcon } from "@assets/images";
import { NudgeLists } from "@components/common";
import type { PlanMeetingNote } from "@components/engagement-plan/types";
import type { FC } from "react";
import { MeetingNoteItems } from "./meeting-note-item";

interface MeetingNoteProps {
  meetingNote: PlanMeetingNote;
  selectedDate: number;
  setSelectedDate: React.Dispatch<React.SetStateAction<number>>;
}

export const MeetingNote: FC<MeetingNoteProps> = ({
  meetingNote,
  selectedDate,
  setSelectedDate,
}) => {
  const { date, notes, _id } = meetingNote;

  const onDateNotesClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const id = Number(event.currentTarget.dataset.id);
    setSelectedDate(id);
  };

  return (
    <div
      className={`meeting-note ${
        selectedDate === _id ? "meeting-note-content-selected" : ""
      }`}
    >
      <div
        className="meeting-note-header"
        onClick={onDateNotesClick}
        data-id={_id}
      >
        <FolderIcon />
        <label className="meeting-note-date-text">{date}</label>
      </div>

      <div className="meeting-note-content">
        <NudgeLists
          items={notes as any[]}
          Component={MeetingNoteItems}
          className="meeting-note-lists"
        />
      </div>
    </div>
  );
};
