import { NudgeButton } from "@components/common/button";
import { NudgeInput } from "@components/common/input";
import { useState, type FC } from "react";

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
  const [isValid, setIsValid] = useState<boolean>(true);

  const onRegisteredEmail = (event: any) => {
    const value = event.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value !== "") {
      setIsValid(emailRegex.test(value));
    } else {
      setIsValid(true);
    }
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
        type="email"
        isInvalid={!isValid}
      />
      <NudgeButton
        className="login-proced"
        isDisabled={registeredEmail.trim() === "" || !isValid}
        onClick={proceedClick}
      >
        PROCEED
      </NudgeButton>
    </div>
  );
};
