import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AcompanharListaHabitos from "./AcompanharListaHabitos";

import { PageContainer, SubHeader } from "./styled";

export default function DiaSemana() {
  return (
    <PageContainer>
      <Header />
      <SubHeader>
        <h2 data-test="today">Segunda, 17/05</h2>
        {/* <p data-test="today-counter">Nenhum hábito concluído ainda</p> */}
        <p data-test="today-counter">67% dos hábitos concluídos</p>
      </SubHeader>
      <AcompanharListaHabitos />
      
      <Footer />
    </PageContainer>
  );
}
