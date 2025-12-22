import { APP_OPTIONS_LISTS } from "@components/left-panel/constants";
import { OptionItem } from "@components/left-panel/options/option";
import { useLocation } from "react-router-dom";

export const OptionsList = () => {
  const { pathname } = useLocation();

  return (
    <div className="option-items">
      {APP_OPTIONS_LISTS.map((option) => (
        <OptionItem
          key={option.id}
          option={option}
          className={pathname === option.path ? "option-item-selected" : ""}
        />
      ))}
    </div>
  );
};
