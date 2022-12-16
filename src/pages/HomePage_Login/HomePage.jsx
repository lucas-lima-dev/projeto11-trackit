import { PageContainer, Form } from "./styled";
import logo from "../../assets/LogoLogin.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function login() {}

  return (
    <PageContainer>
      <img src={logo} atl="" />

      <Form onSubmit={login}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </Form>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </PageContainer>
  );
}
