import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage_Login/HomePage";
import Cadastro from "./pages/Cadastro/Cadastro"
import Habitos from "./pages/Habitos/Habitos"
import DiaSemana from "./pages/DiaSemana/DiaSemana"
import Historico from "./pages/Historico/Historico"

export default function App() {
  return (
    <>
      <HomePage />
      {/* <Cadastro/> */}
      {/* <Habitos/> */}
      {/* <DiaSemana/> */}
      {/* <Historico/> */}
    </>
  );
}
