import { NudgeButton } from "@components/common/button";
import { NudgeInput } from "@components/common/input";
import { type FC } from "react";

interface LoginPopupFromProps {
  setRegisteredEmail: React.Dispatch<React.SetStateAction<string>>;
  setIsMagicCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
  registeredEmail: string;
}

export const LoginPopupFrom: FC<LoginPopupFromProps> = ({
  setRegisteredEmail,
  registeredEmail,
  setIsMagicCodeSent,
}) => {
  const onRegisteredEmail = (event: any) => {
    setRegisteredEmail(event.target.value);
  };

  const proceedClick = () => {
    setIsMagicCodeSent(true);
  };

  return (
    <div className="login-popup-from">
      <NudgeInput
        controlId="registeredEmailId"
        label="Registered Email Id"
        placeholder="Registered Email Id"
        className="registered-email-id"
        onChange={onRegisteredEmail}
      />
      <NudgeButton
        className="login-proced"
        isDisabled={registeredEmail.trim() === ""}
        onClick={proceedClick}
      >
        PROCEED
      </NudgeButton>
    </div>
  );
};
