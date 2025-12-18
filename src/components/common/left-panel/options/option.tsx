import type { FC } from "react";
import type { OptionsList } from "@components/common/left-panel/types";
import { useLeftPanel } from "@components/common/left-panel/hooks/left-panel";
import { ArrowIcon } from "@assets/images";

interface OptionItemProps {
  option: OptionsList;
  className: string;
}

export const OptionItem: FC<OptionItemProps> = ({ option, className }) => {
  const { displayName, id } = option;
  const { hanldeOptionSelect } = useLeftPanel();

  const onOptionClick = () => hanldeOptionSelect(id);

  return (
    <div className={`option-item ${className}`} onClick={onOptionClick}>
      {displayName}
      <ArrowIcon className="option-item-select-icon" />
    </div>
  );
};
