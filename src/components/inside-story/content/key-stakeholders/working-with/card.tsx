import { ProfileIcon } from "@components/common";
import type { KeyStakeholdersWorkingWith } from "@components/inside-story/types";
import type { FC } from "react";

interface KeyStakeholdersWorkingWithProps {
  details: KeyStakeholdersWorkingWith;
}

export const KeyStakeholdersWorkingWithCard: FC<
  KeyStakeholdersWorkingWithProps
> = ({ details }) => {
  const { image, description, name, position, responsibility } = details;
  return (
    <div className="key-stakeholders-working-with-card">
      <ProfileIcon image={image} />
      <div className="description">{description}</div>
      <div className="key-stakeholder-details">
        <div className="key-stakeholder-name">{name}</div>
        <div className="key-stakeholder-position">{position}</div>
        <div className="key-stakeholder-action">{responsibility}</div>
      </div>
    </div>
  );
};
