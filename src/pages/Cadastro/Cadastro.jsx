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
          data-test="email-input"
        />
        <input
          type="password"
          name="senha"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          data-test="password-input"
        />
        <input
          type="text"
          name="nome"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          data-test="user-name-input"
        />
        <input
          type="url"
          name="foto"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          data-test="user-image-input"
        />
        <button type="submit" data-test="signup-btn">Entrar</button>
      </Form>
      <Link to={"/"} data-test="login-link">
        <p >Já tem uma conta? Faça login!</p>
      </Link>
    </PageContainer>
  );
}
