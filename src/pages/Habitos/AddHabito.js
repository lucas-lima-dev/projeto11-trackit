import {
  StyledAddHabito,
  HabitoInfoForm,
  WeekDayContainer,
  ContainerButtons,
} from "./styled";
import { WEEK_DAYS } from "../../constants/weekdays";
import FrequencyBox from "./FrequencyBox";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export default function AddHabito({ closeHabitWindow, token }) {
  const [habitInfo, setHabitInfo] = useState({ name: "", days: [] });

  function handleSubmit(e){
    e.preventDefaut();

    const URL = `${BASE_URL}/habits`;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(URL, habitInfo, config);
    closeHabitWindow();

  }

  function handleClickWeekDay (weekday) {
    const selected = habitInfo.days.includes(weekday)

    if (selected) {
      
    }

  }

  return (
    <StyledAddHabito data-test="habit-create-container">
      <HabitoInfoForm onSubmit={handleSubmit}>
        <input
          placeholder="nome do habito"
          value={habitInfo.name}
          onChange={(e) => setHabitInfo({ ...habitInfo, name: e.target.value })}
          required
          data-test="habit-name-input"
        />
        <WeekDayContainer>
          {WEEK_DAYS.map((day, i) => (
            <FrequencyBox 
            key={i} 
            weekday={day} 
            selected={habitInfo.days.includes(i)}
            onClick={()=>handleClickWeekDay(i)}
            data-test="habit-day"
            />
          ))}
        </WeekDayContainer>
      </HabitoInfoForm>
      <ContainerButtons>
        <p onClick={closeHabitWindow} data-test="habit-create-cancel-btn">Cancelar</p>
        <button type="submit" data-test="habit-create-save-btn">Salvar</button>
      </ContainerButtons>
    </StyledAddHabito>
  );
}
