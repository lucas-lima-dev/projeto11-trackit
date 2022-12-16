import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AcompanharListaHabitos from "./AcompanharListaHabitos";

import { PageContainer, SubHeader } from "./styled";

export default function DiaSemana() {
  return (
    <PageContainer>
      <Header />
      <SubHeader>
        <h2>Segunda, 17/05</h2>
        <p>Nenhum hábito concluído ainda</p>
      </SubHeader>
      <AcompanharListaHabitos />
      <Footer />
    </PageContainer>
  );
}
