import type { FC, PropsWithChildren } from "react";
import "@components/common/checkbox/index.scss";

interface NudgeCheckboxProps {
  className?: string;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  label?: string;
}

export const NudgeCheckbox: FC<PropsWithChildren<NudgeCheckboxProps>> = ({
  className = "",
  onClick,
  children,
  isDisabled,
}) => {
  return (
    <button
      className={`nudge-checkbox  ${className} ${
        isDisabled ? "nudge-button-disabled" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
