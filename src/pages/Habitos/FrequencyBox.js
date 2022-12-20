import { WeekDay } from "./styled"
export default function FrequencyBox({weekday,selected, onClick}) {
    return (
      <WeekDay selected={selected} onClick={onClick} >
        {weekday}
      </WeekDay>
    )
}