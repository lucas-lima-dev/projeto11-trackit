import { PageContainer, Form } from "./styled";
import logo from "../../assets/LogoCadastro.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    function cadastro() {}
  
    return (
      <PageContainer>
        
        <img src={logo} atl="" />
        
        <Form onSubmit={cadastro}>
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
           <input
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
           <input
            placeholder="foto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </Form>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
        
      </PageContainer>
    );
  }