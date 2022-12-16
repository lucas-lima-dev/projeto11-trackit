import { StyledHabitoCard, CheckSquare } from "./styled";

export default function HabitoCard() {
  return (
    <>
    <StyledHabitoCard>
      <h4>Ler 1 capítulo de livro </h4>
      <p>
        Sequência atual: 3 dias <br />
        Seu recorde: 5 dias
      </p>
      <CheckSquare />
    </StyledHabitoCard>
    
    </>
  );
}
