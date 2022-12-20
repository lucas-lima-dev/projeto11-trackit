import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { StyledHeader, StyledLogo, StyledUserImg } from "./styed";

export default function Header() {
  const {userImg} = useContext(UserContext)
  return (
    <StyledHeader data-test="header">
      <Link to={"/"}>
      <h1>TrackIt</h1>
      </Link>
      <StyledUserImg src={userImg} />
    </StyledHeader>
  );
}
