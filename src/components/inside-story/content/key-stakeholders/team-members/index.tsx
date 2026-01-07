import type { FC } from "react";
import { PersonDetailsCard } from "../person-details-card";
import "./index.scss";
import type { PersonDetailCard } from "@components/inside-story/types";

interface TeamMembersProps {
  teamName: string;
  personDetailCards: PersonDetailCard[];
}

export const TeamMembers: FC<TeamMembersProps> = ({
  teamName,
  personDetailCards,
}) => {
  return (
    <div className="team-members">
      <div className="team-members-header">{teamName}</div>
      <div className="team-members-content">
        {personDetailCards.map((personDetailCard) => (
          <PersonDetailsCard
            personDetailCard={personDetailCard}
            key={personDetailCard.id}
          />
        ))}
      </div>
    </div>
  );
};
