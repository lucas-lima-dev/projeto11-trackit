import { StyledHabitoCard, CheckSquare } from "./styled";

export default function HabitoCard() {
  return (
    <>
    <StyledHabitoCard data-test="today-habit-container">
      <h4 data-test="today-habit-name">Ler 1 capítulo de livro </h4>
      <p data-test="today-habit-sequence">
        Sequência atual: 3 dias <br />
        Seu recorde: 5 dias
      </p>
      
      <CheckSquare />
      
    </StyledHabitoCard>
    
    </>
  );
}
