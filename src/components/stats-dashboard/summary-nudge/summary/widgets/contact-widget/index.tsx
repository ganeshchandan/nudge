import { APP_IMAGES } from "@assets/images/app_image";
import { NudgeWidget } from "@components/common/widget";
import "@components/stats-dashboard/summary-nudge/summary/widgets/contact-widget/index.scss";

export const ContactWidget = () => {
  return (
    <NudgeWidget className="contact-widget">
      <div className="others-contact">+1</div>
      <div className="contact-image">
        <img src={APP_IMAGES.userIcon5}></img>
      </div>
      <div className="contact-details">
        <div className="contact-person-name">Christina Mouy</div>
        <div className="contact-person-position">J&J AI Pitch</div>
        <div className="pulished-days">1 day ago</div>
      </div>
      <div className="contact-connect-media">
        <img src={APP_IMAGES.teams} />
        <img src={APP_IMAGES.outlook} />
      </div>
    </NudgeWidget>
  );
};
