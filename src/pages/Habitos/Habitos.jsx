import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {WEEK_DAYS} from "../../constants/weekdays"
import FrequencyBox from "./FrequencyBox";
import {
  PageContainer,
  SubHeader,
  StyledHabitoCard,
  HabitoInfoForm,
  WeekDayContainer,
  
} from "./styled";

export default function Habitos() {
  const [nomeHabito, setNomeHabito] = useState("");
  return (
    <PageContainer>
      <Header />
      <SubHeader>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </SubHeader>
      <StyledHabitoCard>
        <HabitoInfoForm>
          <input
            placeholder="nome do habito"
            value={nomeHabito}
            onChange={(e) => setNomeHabito(e.target.value)}
            required
          />
          <WeekDayContainer>
            {WEEK_DAYS.map((day,i)=>
            <FrequencyBox
            key={i}
            weekday={day}
            />
            )}
          </WeekDayContainer>
        </HabitoInfoForm>
      </StyledHabitoCard>
      <h3>
        Você não tem nenhum hábito <br />
        cadastrado ainda. Adicione um hábito <br />
        h3ara começar a trackear!
      </h3>
      <Footer />
    </PageContainer>
  );
}
