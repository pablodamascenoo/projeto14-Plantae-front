import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export default function VitrineContainer(props) {
  const navigate = useNavigate();
  return (
    <Container idProduto={props._id} onClick={() => mudarRota(`${props.id}`)}>
      <span className="nome">{props.nomeProduto}</span>
      <img src={props.imagem} alt="Imagem da planta" />
      <span className="preco">R$ {props.preco}</span>
    </Container>
  );

  function mudarRota(idProduto) {
    navigate(`/produtos/${idProduto}`);
    console.log(id);
  }
}
