import { PageContainer, Form } from "./styled";
import logo from "../../assets/LogoCadastro.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function createAccount(event) {
    event.preventDefault();

    const URL = `${BASE_URL}/auth/sign-up`;

    const body = {
      email,
      name,
      image,
      password,
    };

    axios
      .post(URL, body)
      .then((res) => {
        alert("Cadastro realizado com sucesso");
        navigate("/");
        setEmail("");
        setPassword("");
        setName("");
        setImage("");
      })

      .catch((err) => alert(err.response.data.message));
  }

  return (
    <PageContainer>
      <img src={logo} atl="" />

      <Form onSubmit={createAccount}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          dataIdentifier="input-email"
        />
        <input
          type="password"
          name="senha"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          dataIdentifier="input-password"
        />
        <input
          type="text"
          name="nome"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          dataIdentifier="input-name"
        />
        <input
          type="url"
          name="foto"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          dataIdentifier="input-photo"
        />
        <button type="submit">Entrar</button>
      </Form>
      <Link to={"/"}>
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </PageContainer>
  );
}
