import { StyledHabitoCard, WeekDayContainer2, TrashCan } from "./styled";

import { WEEK_DAYS } from "../../constants/weekdays";
import FrequencyBox from "./FrequencyBox";

export default function HabitoCard() {
  return (
    <StyledHabitoCard>
      <h4>Ler 1 capítulo de livro </h4>
      <TrashCan />
      <WeekDayContainer2>
        {WEEK_DAYS.map((day, i) => (
          <FrequencyBox key={i} weekday={day} />
        ))}
      </WeekDayContainer2>
    </StyledHabitoCard>
  );
}
