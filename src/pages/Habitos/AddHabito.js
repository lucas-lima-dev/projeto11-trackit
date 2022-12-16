import { StyledAddHabito,HabitoInfoForm,WeekDayContainer,ContainerButtons } from "./styled"
import { WEEK_DAYS } from "../../constants/weekdays";
import FrequencyBox from "./FrequencyBox";

export default function AddHabito({nomeHabito,setNomeHabito}) {
    return(
        <>
        <StyledAddHabito>
        <HabitoInfoForm>
          <input
            placeholder="nome do habito"
            value={nomeHabito}
            onChange={(e) => setNomeHabito(e.target.value)}
            required
          />
          <WeekDayContainer>
            {WEEK_DAYS.map((day, i) => (
              <FrequencyBox key={i} weekday={day} />
            ))}
          </WeekDayContainer>
        </HabitoInfoForm>
        <ContainerButtons>
          <p>Cancelar</p>
          <button>Salvar</button>
        </ContainerButtons>
      </StyledAddHabito>
      <h3>
        Você não tem nenhum hábito <br />
        cadastrado ainda. Adicione um hábito <br />
        para começar a trackear!
      </h3>
        </>
    )

}