import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ImpulseSpinner } from "react-spinners-kit";
import UserContext from "../../contexts/UserContext";

import { Container } from "../TelaCadastro/style";

export default function TelaLogin() {
  const [login, SetLogin] = useState({
    email: "",
    senha: "",
  });
  const [enviado, SetEnviado] = useState(false);
  const navigate = useNavigate();
  const { SetUserInfo } = useContext(UserContext);

  const { email, senha } = login;

  function enviarLogin(e) {
    e.preventDefault();
    SetEnviado(true);

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      alert("O email deve ser preenchido corretamente");
      SetEnviado(false);
      return;
    }

    if (senha.length < 3 || senha.length > 30) {
      alert("A senha deve ter entre 3 e 30 caracteres");
      SetEnviado(false);
      return;
    }

    const promisse = axios.post("https://plantae.herokuapp.com/login", {
      email,
      senha,
    });

    promisse.then((obj) => {
      const { data } = obj;
      localStorage.setItem(
        "UserInfo",
        JSON.stringify({ token: data.token, nome: data.nome })
      );
      SetUserInfo({ token: data.token, nome: data.nome });
      SetEnviado(false);
      navigate("/");
    });
    promisse.catch((erro) => {
      alert(erro.response.data);
      console.log(erro);
      SetEnviado(false);
    });
  }

  return (
    <Container preenchido={!(email && senha)} enviado={enviado}>
      <h1>Plantae</h1>
      <form onSubmit={enviarLogin}>
        <input
          type="email"
          required
          disabled={enviado}
          value={email}
          placeholder="email"
          onChange={(e) => {
            SetLogin({ ...login, email: e.target.value });
          }}
        />
        <input
          type="password"
          required
          disabled={enviado}
          value={senha}
          placeholder="senha"
          onChange={(e) => {
            SetLogin({ ...login, senha: e.target.value });
          }}
        />
        <button type="submit" disabled={!(email && senha) || enviado}>
          {enviado ? <ImpulseSpinner size={40} color="#20b25d" /> : "Cadastrar"}
        </button>
      </form>

      <Link to="/auth/cadastro">
        <p>Não possui conta? clique aqui!</p>
      </Link>
    </Container>
  );
}
