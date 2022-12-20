import { StyledHabitoCard, WeekDayContainer2, TrashCan } from "./styled";

import { WEEK_DAYS } from "../../constants/weekdays";
import FrequencyBox from "./FrequencyBox";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export default function HabitoCard({habitInfo,token}) {
  const {name,days,id} = habitInfo


  function handleDeleteClick(){
    const confirmHabitDelete= window.confirm("Gostaria realmente de apagar o hábito?");

    if(confirmHabitDelete){

      const URL = `${BASE_URL}/habits/${id}`

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      axios.delete(URL,config)

    }
  }

  return (
    <StyledHabitoCard data-test="habit-container">
      <h4 data-test="habit-name">{name} </h4>
      <TrashCan onClick={handleDeleteClick} data-test="habit-delete-btn"/>
      <WeekDayContainer2>
        {WEEK_DAYS.map((day, i) => (
          <FrequencyBox 
          key={i} 
          weekday={day} 
          selected={days.includes(i)}
          data-test="habit-day"
          />
        ))}
      </WeekDayContainer2>
    </StyledHabitoCard>
  );
}
