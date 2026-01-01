import { useState } from "react";
import { DownloadIcon } from "@assets/images";
import { OverflowContainer } from "@components/common";
import { SAMPLE_MEETING_NOTES } from "@components/engagement-plan/constants";
import "@components/engagement-plan/details/content/meeting-notes/index.scss";
import { MeetingNote } from "./meeting-note";

export const MeetingNotes = () => {
  const meetingNotes = SAMPLE_MEETING_NOTES;
  const [selectedDate, setSelectedDate] = useState<number>(-1);

  return (
    <div className="engagement-plan-meeting-notes smooth-content-load">
      <OverflowContainer>
        <div className="meeting-notes">
          {meetingNotes.map((meetingNote) => (
            <MeetingNote
              key={meetingNote._id}
              meetingNote={meetingNote}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          ))}
        </div>
      </OverflowContainer>
      <div className="upload-documents">
        <DownloadIcon className="meeting-notes-doucments-icon" />
        Upload Document(s)
      </div>
    </div>
  );
};
