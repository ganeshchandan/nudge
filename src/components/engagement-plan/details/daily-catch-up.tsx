import { CalendarIcon } from "@assets/images";

export const DailyCatchup = () => {
  return (
    <div className="daily-catch-up">
      <CalendarIcon className="daily-catch-up-icon" />
      <div className="daily-catch-up-details">
        <label className="daily-catch-up-label">Daily Catch-up</label>
        <label className="daily-catch-up-time">8:15 am</label>
      </div>
      <div className="daily-catch-up-meeting-link">Join Meeting</div>
    </div>
  );
};
