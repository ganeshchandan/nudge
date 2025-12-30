import type { FC, PropsWithChildren } from "react";
import "@components/common/button/index.scss";

export * from "@components/common/button/constants";

interface NudgeButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  variant?: "primary" | "outline-primary" | "cta";
}

export const NudgeButton: FC<PropsWithChildren<NudgeButtonProps>> = ({
  className = "",
  variant = "primary",
  onClick,
  children,
  isDisabled,
}) => {
  return (
    <button
      className={`nudge-button nudge-button-${variant} ${className} ${
        isDisabled ? "nudge-button-disabled" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
