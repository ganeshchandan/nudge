import { NudgeTag, ProfileDetails } from "@components/common";
import type { PersonDetailCard } from "@components/inside-story/types";
import type { FC } from "react";
import "./index.scss";

interface PersonDetailsCardProps {
  personDetailCard: PersonDetailCard;
}

export const PersonDetailsCard: FC<PersonDetailsCardProps> = ({
  personDetailCard,
}) => {
  const { image, name, teamName, priorities, status } = personDetailCard;
  const { headerName, subHeader, items } = priorities;
  const { label, type } = status;
  return (
    <div className="person-details-card">
      <ProfileDetails imageUrl={image} name={name} teamName={teamName} />
      <div className="priorities-header">
        <div className="priorities-main-header">{headerName}</div>
        <div className="priorities-sub-header">{subHeader}</div>
      </div>
      <ul className="priorities-lists">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="person-details-status">
        <NudgeTag
          className={`person-details-status-tag ${type}-tag`}
          tagName={label}
        />
      </div>
    </div>
  );
};
