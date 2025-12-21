import { APP_IMAGES } from "@assets/images/app_image";
import "@components/login/index.scss";
import { LoginPopup } from "@components/login/login-popup";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page-icon">
        <img src={APP_IMAGES.loginPageIcon} />
      </div>
      <LoginPopup />
    </div>
  );
};
