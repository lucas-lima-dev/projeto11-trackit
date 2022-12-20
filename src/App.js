import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage_Login/HomePage";
import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import DiaSemana from "./pages/DiaSemana/DiaSemana";
import Historico from "./pages/Historico/Historico";
import styled from "styled-components";
import { useState } from "react";
import AuthContext from "./contexts/AuthenticationContext";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <StyledApp>
      <AuthContext.Provider value={{token,setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/hoje" element={<DiaSemana />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
