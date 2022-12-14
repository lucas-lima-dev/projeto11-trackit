import { PageContainer, Form } from "./styled";
import logo from "../../assets/LogoLogin.png";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function login() {}

  return (
    <PageContainer>
      HomePage
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
    </PageContainer>
  );
}
