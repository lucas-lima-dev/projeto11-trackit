import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddHabito from "./AddHabito";
import ListaHabitos from "./ListaHabitos";
import { PageContainer, SubHeader } from "./styled";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { config } from "localforage";

export default function Habitos({ token }) {
  const [nomeHabito, setNomeHabito] = useState({});
  

  useEffect(() => {
    const URL = `${BASE_URL}/habits`;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    
    axios
    .get(URL, config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err.response.data.message));

  }, []);

  

  return (
    <PageContainer>
      <Header />
      <SubHeader>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </SubHeader>
      {/* <AddHabito nomeHabito={nomeHabito} setNomeHabito={setNomeHabito}/> */}
      {/* <ListaHabitos/> */}

      <Footer />
    </PageContainer>
  );
}
