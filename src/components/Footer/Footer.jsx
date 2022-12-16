import { StyledFooter } from "./styled"
import ImgFooter from "../../assets/Group 26.png"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <StyledFooter>
            <Link to={"/habitos"}>
            <h4>Hábitos</h4>
            </Link>
            <Link to={"/hoje"}>
            <img src={ImgFooter} alt=""/>
            </Link>
            <Link to={"/historico"}>
            <h5>Histórico</h5>
            </Link>
        </StyledFooter>
    )
}