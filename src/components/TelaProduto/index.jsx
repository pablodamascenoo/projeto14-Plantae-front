import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import Header from "../Header";

import { Box, ImageBox, InfoBox, FinishButton } from "./style";

export default function TelaProduto() {
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);

  const [quantidade, SetQuantidade] = useState(1);
  const [produto, SetProduto] = useState({
    imagem: "",
    nome: "",
    descricao: "",
    preco: "",
  });
  const [enviado, SetEnviado] = useState(false);

  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  useEffect(() => {
    const promisse = axios.get(`https://plantae.herokuapp.com/produtos/${id}`);

    promisse
      .then((obj) => {
        const { data } = obj;
        SetProduto({ ...data });
      })
      .catch((erro) => {
        alert(erro.response.data);
        navigate("/");
        return;
      });
  }, []);

  function enviarItemCarrinho() {
    SetEnviado(true);

    if (!userInfo) {
      alert("O usuário deve estar logado para adicionar itens ao carrinho");
      navigate("/auth/login");
      SetEnviado(false);
      return;
    }

    const promisse = axios.post(
      "https://plantae.herokuapp.com/carrinho",
      { quantidade, idProduto: id },
      config
    );

    promisse.then(() => {
      navigate("/");
      SetEnviado(false);
    });
    promisse.catch((erro) => {
      console.log(erro);
      if (erro.response.status === 401) {
        alert("O usuário deve estar logado para adicionar itens ao carrinho");
        navigate("/auth/login");
        SetEnviado(false);
      } else {
        alert(erro.response.data);
        SetEnviado(false);
      }
    });
  }

  return (
    <Box>
      <Header />
      <ImageBox>
        <img src={produto?.imagem} alt={produto?.nome} />
      </ImageBox>
      <InfoBox>
        <div className="produto">
          <p>{produto?.nome}</p>
          <p>{`R$ ${produto?.preco}`}</p>
        </div>
        <div className="quantidade">
          <button
            disabled={enviado}
            onClick={() => {
              let novoValor = quantidade === 1 ? quantidade : quantidade - 1;
              SetQuantidade(novoValor);
            }}
          >
            -
          </button>
          <p>{quantidade}</p>
          <button
            disabled={enviado}
            onClick={() => {
              let novoValor = quantidade + 1;
              SetQuantidade(novoValor);
            }}
          >
            +
          </button>
        </div>
        <div className="descricao">
          <h2>Descrição</h2>
          <p>{produto?.descricao}</p>
        </div>
        <FinishButton
          disabled={enviado || produto.preco === ""}
          onClick={enviarItemCarrinho}
        >
          Adicionar ao carrinho
        </FinishButton>
      </InfoBox>
    </Box>
  );
}
