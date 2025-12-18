import { FavoriteIcon, MessageIcon } from "@assets/images";

export const UsersProfile = () => {
  return (
    <div className="users-profile">
      <div className="users-message">
        <MessageIcon className="users-message-icon" />
        <div className="users-messgae-indicator"></div>
      </div>
      <div className="favorite-message">
        <FavoriteIcon className="favorite-icon" />
      </div>
      <div className="user-profile-icon"></div>
    </div>
  );
};
