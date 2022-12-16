import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddHabito from "./AddHabito";
import ListaHabitos from "./ListaHabitos";

import {
  PageContainer,
  SubHeader
} from "./styled";

export default function Habitos() {
  const [nomeHabito, setNomeHabito] = useState("");
  return (
    <PageContainer>
      <Header />
      <SubHeader>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </SubHeader>
      {/* <AddHabito nomeHabito={nomeHabito} setNomeHabito={setNomeHabito}/> */}
      <ListaHabitos/>
      
      <Footer />
    </PageContainer>
  );
}
