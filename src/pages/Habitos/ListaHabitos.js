import { StyledListaHabitos } from "./styled";

import HabitoCard from "./HabitoCard";

export default function ListaHabitos({habitInfo,token}) {
  return (
    <StyledListaHabitos>
      <HabitoCard habitInfo={habitInfo} token={token} />
    </StyledListaHabitos>
  );
}
