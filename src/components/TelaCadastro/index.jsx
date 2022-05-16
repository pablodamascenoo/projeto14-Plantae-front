import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ImpulseSpinner } from "react-spinners-kit";

import { Container } from "./style";

export default function TelaCadastro() {
  const [cadastro, SetCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
    senha2: "",
  });
  const [enviado, SetEnviado] = useState(false);
  const navigate = useNavigate();

  const { nome, email, senha, senha2 } = cadastro;

  function enviarCadastro(e) {
    e.preventDefault();
    SetEnviado(true);

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(cadastro.email)) {
      alert("O email deve ser preenchido corretamente");
      SetEnviado(false);
      return;
    }

    if (cadastro.senha !== cadastro.senha2) {
      alert("As senhas devem coincidir");
      SetEnviado(false);
      return;
    }

    const promisse = axios.post("https://plantae.herokuapp.com/cadastro", {
      nome,
      email,
      senha,
      senha2,
    });

    promisse.then(() => {
      SetEnviado(false);
      navigate("/auth/login");
    });

    promisse.catch((erro) => {
      alert(erro.response.data);
      SetEnviado(false);
    });
  }

  return (
    <Container
      preenchido={!(nome && email && senha && senha2)}
      enviado={enviado}
    >
      <h1>Plantae</h1>

      <form onSubmit={enviarCadastro}>
        <input
          disabled={enviado}
          required
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(e) => {
            SetCadastro({ ...cadastro, nome: e.target.value });
          }}
        />
        <input
          disabled={enviado}
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            SetCadastro({ ...cadastro, email: e.target.value });
          }}
        />
        <input
          disabled={enviado}
          required
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => {
            SetCadastro({ ...cadastro, senha: e.target.value });
          }}
        />
        <input
          disabled={enviado}
          required
          type="password"
          placeholder="confirme sua senha"
          value={senha2}
          onChange={(e) => {
            SetCadastro({ ...cadastro, senha2: e.target.value });
          }}
        />
        <button
          type="submit"
          disabled={!(nome && email && senha && senha2) || enviado}
        >
          {enviado ? <ImpulseSpinner size={40} color="#20b25d" /> : "Cadastrar"}
        </button>
      </form>
      <Link to="/auth/login">
        <p>Já possui uma conta? clique aqui</p>
      </Link>
    </Container>
  );
}
