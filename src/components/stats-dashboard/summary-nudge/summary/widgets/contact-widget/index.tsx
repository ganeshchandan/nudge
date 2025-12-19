import { TOP_PERFROMER } from "@assets/images/top_performers";
import { NudgeWidget } from "@components/common/widget";
import "@components/stats-dashboard/summary-nudge/summary/widgets/contact-widget/index.scss";

export const ContactWidget = () => {
  return (
    <NudgeWidget className="contact-widget">
      <div className="others-contact">+1</div>
      <div className="contact-image">
        <img src={TOP_PERFROMER.userIcon5}></img>
      </div>
      <div className="contact-details">
        <div className="contact-person-name">Christina Mouy</div>
        <div className="contact-person-position">J&J AI Pitch</div>
        <div className="pulished-days">1 day ago</div>
      </div>
      <div className="contact-connect-media">
        <img src={TOP_PERFROMER.teams} />
        <img src={TOP_PERFROMER.outlook} />
      </div>
    </NudgeWidget>
  );
};
