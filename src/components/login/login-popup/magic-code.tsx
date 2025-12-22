import { NudgeButton } from "@components/common/button";
import { setUserAuthenticated } from "@stores/reducers";
import { type FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface LoginMagicCodeProps {}

export const LoginMagicCode: FC<LoginMagicCodeProps> = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [magicCodes, setMagicCodes] = useState<string[]>(["", "", "", ""]);
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const firstInput = inputsRef.current[0];
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  const handleInput = (index: number, value: string) => {
    const char = value.replace(/\D/g, "").slice(0, 1);
    const newValues = [...magicCodes];
    newValues[index] = char;
    setMagicCodes(newValues);
    setIsError(false);

    const input = inputsRef.current[index];
    if (input) input.value = char;

    if (char && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const allFilled = magicCodes.every((magicCode) => magicCode !== "");

  const onSubmitMagicCode = () => {
    if (magicCodes.join("") === "2304") {
      navigate("/dashboard");
      dispatch(setUserAuthenticated(true));
    } else {
      setIsError(true);
    }
  };

  // const onKeyDown = (e: any, index: number) => {
  //   if (e.key === "Backspace") {
  //     e.preventDefault(); // prevent default browser behavior
  //     const newValues = [...magicCodes];

  //     if (magicCodes[index] === "") {
  //       // move focus to previous input
  //       if (index > 0) {
  //         inputsRef.current[index - 1].focus();
  //         newValues[index - 1] = "";
  //       }
  //     } else {
  //       // clear current input
  //       newValues[index] = "";
  //     }

  //     setMagicCodes(newValues);
  //   }
  // };

  return (
    <div className={`login-magic-code-form ${isError ? "is-code-error" : ""}`}>
      <div className="login-magic-codes">
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            ref={(el) => {
              if (el) inputsRef.current[i] = el;
            }}
            className="login-magic-code"
            type="text"
            onChange={(e) => handleInput(i, e.target.value)}
            value={magicCodes[i] || "*"}
            // onKeyDown={(event) => onKeyDown(event, i)}
          />
        ))}
      </div>
      <div className="inavlid-codes">Invalid code. Try Again</div>
      <NudgeButton
        className="submit-magic-code"
        isDisabled={!allFilled || isError}
        onClick={onSubmitMagicCode}
      >
        submit magic code
      </NudgeButton>
    </div>
  );
};
