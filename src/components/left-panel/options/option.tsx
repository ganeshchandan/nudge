import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { OptionsList } from "@components/left-panel/types";
import { ArrowIcon } from "@assets/images";

interface OptionItemProps {
  option: OptionsList;
  className?: string;
}

export const OptionItem: FC<OptionItemProps> = ({ option, className = "" }) => {
  const { displayName, path } = option;
  const navigate = useNavigate();

  const onOptionClick = () => {
    navigate(path);
  };

  return (
    <div className={`option-item ${className}`} onClick={onOptionClick}>
      {displayName}
      <ArrowIcon className="option-item-select-icon" />
    </div>
  );
};
