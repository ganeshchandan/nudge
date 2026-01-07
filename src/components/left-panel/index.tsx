import "@components/left-panel/index.scss";
import { NudgeIcon } from "@assets/images";
import { OptionsList } from "@components/left-panel/options";
import { UsersProfile } from "@components/left-panel/user-profile";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { APP_OPTIONS_LISTS } from "./constants";

export const LeftPanel = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const selectedPage = useMemo(
    () =>
      APP_OPTIONS_LISTS.find(({ path }) => path === pathname)?.id || "stats",
    [pathname]
  );

  const onClick = () => {
    navigate("/dashboard/stats");
  };

  return (
    <div className={`left-panel ${selectedPage}-left-panel`}>
      <div className="left-panel-app-log" onClick={onClick}>
        <NudgeIcon />
      </div>
      <OptionsList />
      <UsersProfile />
    </div>
  );
};
