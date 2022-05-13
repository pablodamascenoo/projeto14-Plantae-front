import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, ImageBox, InfoBox, FinishButton } from "./style";

export default function TelaProduto() {
  const { id } = useParams();
  const [quantidade, SetQuantidade] = useState(1);
  const [produto, SetProduto] = useState();

  useEffect(() => {
    const promisse = axios.get(`http://localhost:5000/produtos/${id}`);

    promisse
      .then((obj) => {
        const { data } = obj;
        SetProduto({ ...data });
      })
      .catch((erro) => {
        alert(erro.response.data);
        console.log(erro);
      });
  }, []);

  return (
    <Box>
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
            onClick={() => {
              let novoValor = quantidade === 1 ? quantidade : quantidade - 1;
              SetQuantidade(novoValor);
            }}
          >
            -
          </button>
          <p>{quantidade}</p>
          <button
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
        <FinishButton>Adicionar ao carrinho</FinishButton>
      </InfoBox>
    </Box>
  );
}

//https://plantae.herokuapp.com
