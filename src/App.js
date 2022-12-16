import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage_Login/HomePage";
import Cadastro from "./pages/Cadastro/Cadastro"
import Habitos from "./pages/Habitos/Habitos"
import DiaSemana from "./pages/DiaSemana/DiaSemana"
import Historico from "./pages/Historico/Historico"
import styled from "styled-components";

export default function App() {
  return (
    <StyledApp>
      {/* <HomePage /> */}
      {/* <Cadastro/> */}
      {/* <Habitos/> */}
      <DiaSemana/>
      {/* <Historico/> */}
    </StyledApp>
  );
}

const StyledApp = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
