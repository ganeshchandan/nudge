import { DownloadIcon } from "@assets/images";
import { OverflowContainer } from "@components/common";
import { SAMPLE_MEETING_NOTES } from "@components/engagement-plan/constants";
import "@components/engagement-plan/details/content/meeting-notes/index.scss";
import { MeetingNote } from "./meeting-note";

export const MeetingNotes = () => {
  const meetingNotes = SAMPLE_MEETING_NOTES;
  return (
    <div className="engagement-plan-meeting-notes">
      <OverflowContainer>
        <div className="meeting-notes">
          {meetingNotes.map((meetingNote) => (
            <MeetingNote key={meetingNote._id} meetingNote={meetingNote} />
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
