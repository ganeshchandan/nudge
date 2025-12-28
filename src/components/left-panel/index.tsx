import "@components/left-panel/index.scss";
import { NudgeIcon } from "@assets/images";
import { OptionsList } from "@components/left-panel/options";
import { UsersProfile } from "@components/left-panel/user-profile";

export const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="left-panel-app-log">
        <NudgeIcon />
      </div>
      <OptionsList />
      <UsersProfile />
    </div>
  );
};
