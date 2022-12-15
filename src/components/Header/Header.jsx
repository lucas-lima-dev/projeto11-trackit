import { StyledHeader, StyledLogo, StyledUserImg } from "./styed";

export default function Header() {
  return (
    <StyledHeader>
      <h1>TrackIt</h1>
      <StyledUserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJW3t3AVN1Akr42U_unRhQM4kenvFxn8Y6_vd0e_Dl&s" />
    </StyledHeader>
  );
}
