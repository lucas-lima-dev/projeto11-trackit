import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { PageContainer, SubHeader } from "./styled";

export default function Historico() {
  return (
    <PageContainer>
      <Header />
      <SubHeader>
        <h2>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </SubHeader>

      <Footer />
    </PageContainer>
  );
}
