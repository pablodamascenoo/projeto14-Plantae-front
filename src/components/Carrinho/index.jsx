import React, { useState } from "react";
import Header from "../Header";
import { Container } from "./style";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import carrinho from "../../assets/SVGs/cart-outline.svg";
import lixo from "../../assets/SVGs/trash-bin-outline.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Carrinho() {
  const { userInfo } = useContext(UserContext);
  const token = userInfo?.token;
  const nomeUsuario = userInfo?.nome;
  const email = userInfo?.email;
  const [itensDoCarrinho, SetItensDoCarrinho] = useState([]);
  const [total, SetTotal] = useState(0);

  const body = { email: `${email}` };
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  function solicitarCarrinho() {
    const requisicao = axios.get(
      "https://plantae.herokuapp.com/carrinho",
      config,
      body
    );

    requisicao.then((resposta) => {
      const { data } = resposta;
      let soma = 0;
      data.forEach((item) => {
        soma += item.preco * item.quantidade;
      });
      SetTotal(soma.toFixed(2));
      SetItensDoCarrinho([...data]);
    });
    requisicao.catch((resposta) => {
      const { data } = resposta;
      console.log(data);
    });
  }

  useEffect(() => {
    solicitarCarrinho();
  }, []);

  function deleteItem(idProduto) {
    const requisicao = axios.delete(
      `https://plantae.herokuapp.com/carrinho/${idProduto}`,
      config
    );

    requisicao.then(() => {
      solicitarCarrinho();
    });
    requisicao.catch((resposta) => {
      const { data } = resposta;
      console.log(data.response);
    });
  }

  if (token) {
    return (
      <>
        <Header />
        <Container>
          {itensDoCarrinho.length ? (
            <>
              <h1>Seu carrinho, {nomeUsuario}: </h1>
              <div className="listaDeItens">
                <div className="listaDeItens">
                  {itensDoCarrinho.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <img src={item.imagem} />
                        <div className="infos">
                          <span>
                            ({item.quantidade}x) {item.nome}
                          </span>
                          <span>R${item.preco}</span>
                        </div>
                        <img
                          src={lixo}
                          alt="Excluir"
                          className="excluir"
                          onClick={() => deleteItem(item._id)}
                        />
                      </div>
                    );
                  })}
                  <div className="total">
                    <span>Total</span>
                    <span>R${total}</span>
                  </div>
                </div>
              </div>
              <Link to={"/checkout/endereco"}>
                <button>Finalizar Pedido</button>
              </Link>
            </>
          ) : (
            <div className="vazio">
              <h1>Seu carrinho est?? vazio, {nomeUsuario}! </h1>
              <Link to={"/"}>
                <button>Ver produtos</button>
              </Link>
            </div>
          )}
        </Container>
      </>
    );
  } else {
    return (
      <Container>
        <div className="deslogado">
          <img src={carrinho} alt="Carrinho" className="carrinho" />
          <Link to={"/auth/login"}>
            <button>Fa??a login para acessar o carrinho</button>
          </Link>
        </div>
      </Container>
    );
  }
}
