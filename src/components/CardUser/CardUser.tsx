import { UserStructure } from "../../redux/features/loadUsers/types";
import UserCardStyled from "./CardUserStyled";

interface UserCardProps {
  user: UserStructure;
}

const UserCard = ({ user: { username } }: UserCardProps): JSX.Element => {
  return (
    <UserCardStyled>
      <h2>{username}</h2>
      <img
        src="https://play-lh.googleusercontent.com/VMUtD6CPpGXz7QDDA-hbDpnbkQUx6hH7Aen5l1qgg-3jXIruLMdDF-he-_gWB4WiiRg"
        alt=""
      />
    </UserCardStyled>
  );
};

export default UserCard;
