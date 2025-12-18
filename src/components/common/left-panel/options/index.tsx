import { APP_OPTIONS_LISTS } from "@components/common/left-panel/constants";
import { OptionItem } from "@components/common/left-panel/options/option";
import type { RootState } from "@stores";
import { useSelector } from "react-redux";

export const OptionsList = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.applicationConfig.selectedOption
  );

  return (
    <div className="option-items">
      {APP_OPTIONS_LISTS.map((option) => {
        const { id } = option;
        return (
          <OptionItem
            option={option}
            key={id}
            className={selectedOption === id ? "option-item-selected" : ""}
          />
        );
      })}
    </div>
  );
};
