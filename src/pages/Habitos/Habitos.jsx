import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddHabito from "./AddHabito";
import ListaHabitos from "./ListaHabitos";
import { PageContainer, SubHeader } from "./styled";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import AuthContext from "../../contexts/AuthenticationContext";


export default function Habitos() {
  const [nomeHabito, setNomeHabito] = useState([]);
  const [openHabitWindow,setOpenHabitWindow] = useState(false)
  const {token} = useContext(AuthContext)

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

  function closeHabitWindow(){
    setOpenHabitWindow(false)
  }

  return (
    <PageContainer>
      <Header />
      <SubHeader>
        <h2>Meus hábitos</h2>
        <button onClick={()=>setOpenHabitWindow(true)} data-test="habit-create-btn">
          +
        </button>
      </SubHeader>
      {openHabitWindow 
      && 
      <AddHabito 
      closeHabitWindow={closeHabitWindow}
      token={token}
      />}
      {/* <AddHabito nomeHabito={nomeHabito} setNomeHabito={setNomeHabito}/> */}
      {/* <ListaHabitos 
      key={habit.id}
      habitInfo={habit}
      token={token}
      /> */}
      {nomeHabito.length <= 0 
      && 
      (
        <h3>
          Você não tem nenhum hábito <br />
          cadastrado ainda. Adicione um hábito <br />
          para começar a trackear!
        </h3>
      )}

      <Footer />
    </PageContainer>
  );
}
