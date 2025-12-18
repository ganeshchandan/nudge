import "@components/common/left-panel/index.scss";
import { NudgeIcon } from "@assets/images";
import { OptionsList } from "@components/common/left-panel/options";
import { UsersProfile } from "@components/common/left-panel/user-profile";

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
