import React, { useState, useContext, useEffect } from "react";
import { ImpulseSpinner } from "react-spinners-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../Header";
import { Input, Box, Button } from "../TelaEndereco/style";

import AddressContext from "../../contexts/AddressContext";
import UserContext from "../../contexts/UserContext";

export default function TelaPagamento() {
  const [pagamento, SetPagamento] = useState({
    numero: "",
    cpf: "",
    codigo: "",
    validade: "",
  });
  const [enviado, SetEnviado] = useState(false);
  const { address } = useContext(AddressContext);
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const { numero, cpf, codigo, validade } = pagamento;
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  useEffect(() => {
    if (!userInfo) {
      alert("é necessário estar logado para estar aqui");
      navigate("/auth/login");
      return;
    }
    if (!address) {
      alert("preencha os dados de endereço primeiro");
      navigate("checkout/endereco");
      return;
    }

    const promisse = axios.get(
      "https://plantae.herokuapp.com/carrinho",
      config
    );

    promisse.then((obj) => {
      const { data } = obj;
      if (!data.length) {
        alert("O usuário não possui itens no carrinho");
        navigate("/");
        return;
      }
    });

    promisse.catch((erro) => {
      alert(erro.response.data);
      navigate("/");
      return;
    });
  }, []);

  function campoVazio() {
    let keys = Object.keys(pagamento);

    for (let key of keys) {
      if (!pagamento[key]) return true;
    }
  }

  function mascaraCpf(value) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    SetPagamento({ ...pagamento, cpf: value });
  }

  function mascaraNumeroCartao(value) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");

    SetPagamento({ ...pagamento, numero: value });
  }

  function concluirCompra(e) {
    e.preventDefault();
    SetEnviado(true);

    if (campoVazio()) {
      alert("preencha todos os campos!");
      SetEnviado(false);
      return;
    }

    const promisse = axios.post(
      `https://plantae.herokuapp.com/checkout`,
      { address, pagamento },
      config
    );

    promisse.then(() => {
      navigate("/sucesso");
      SetEnviado(false);
      return;
    });

    promisse.catch((erro) => {
      alert(erro.response.data);
      SetEnviado(false);
      return;
    });
  }

  return (
    <Box>
      <Header />
      <form onSubmit={concluirCompra}>
        <h2>Pagamento</h2>
        <Input
          disabled={enviado}
          enviado={enviado}
          maxLength={19}
          type="text"
          required
          value={numero}
          placeholder="numero do cartão"
          onChange={(e) => mascaraNumeroCartao(e.target.value)}
        />
        <Input
          disabled={enviado}
          enviado={enviado}
          type="text"
          required
          value={cpf}
          placeholder="cpf"
          onChange={(e) => mascaraCpf(e.target.value)}
          maxLength={14}
        />
        <Input
          disabled={enviado}
          enviado={enviado}
          type="text"
          maxLength={3}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, "");
            SetPagamento({ ...pagamento, codigo: value });
          }}
          required
          value={codigo}
          placeholder="código de segurança"
        />
        <Input
          disabled={enviado}
          enviado={enviado}
          required
          type="month"
          value={validade}
          onChange={(e) => {
            SetPagamento({ ...pagamento, validade: e.target.value });
          }}
        />
        <Button disabled={campoVazio() || enviado} preenchido={campoVazio()}>
          {enviado ? (
            <ImpulseSpinner size={40} color="#20b25d" />
          ) : (
            "Concluir a compra"
          )}
        </Button>
      </form>
    </Box>
  );
}
