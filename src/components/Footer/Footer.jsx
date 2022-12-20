import { StyledFooter } from "./styled"
import ImgFooter from "../../assets/Group 26.png"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <StyledFooter data-test="menu">
            <Link to={"/habitos"} data-test="habit-link">
            <h4>Hábitos</h4>
            </Link>
            <Link to={"/hoje"} data-test="today-link">
            <img src={ImgFooter} alt=""/>
            </Link>
            <Link to={"/historico"} data-test="history-link">
            <h5>Histórico</h5>
            </Link>
        </StyledFooter>
    )
}