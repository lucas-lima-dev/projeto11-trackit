import { StyledFooter } from "./styled"
import ImgFooter from "../../assets/Group 26.png"

export default function Footer() {
    return (
        <StyledFooter>
            <h4>Hábitos</h4>
            <img src={ImgFooter} alt=""/>
            <h5>Histórico</h5>
        </StyledFooter>
    )
}