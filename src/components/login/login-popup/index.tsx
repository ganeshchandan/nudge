import "@components/login/login-popup/index.scss";
import { useState } from "react";
import { LoginPopupFrom } from "./form";
import { LoginMagicCode } from "./magic-code";

export const LoginPopup = () => {
  const [registeredEmail, setRegisteredEmail] = useState<string>("");
  const [isMagicCodeSent, setIsMagicCodeSent] = useState<boolean>(false);

  return (
    <div className="login-popup">
      <div className="login-popup-header">Intelligence in Action</div>
      <div className="login-popup-content">
        <div className="login-instructions">
          <div>1. Enter your Registered Email Id.</div>
          <div>2. Click Proceed.</div>
          <div>3. Check your inbox for the magic code.</div>
          <div>4. Click your code & submit.</div>
        </div>
        {isMagicCodeSent ? (
          <LoginMagicCode />
        ) : (
          <LoginPopupFrom
            setRegisteredEmail={setRegisteredEmail}
            registeredEmail={registeredEmail}
            setIsMagicCodeSent={setIsMagicCodeSent}
          />
        )}
      </div>
      <div className="login-popup-footer">Powered by Alethic Insights</div>
    </div>
  );
};
