import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header";
import { Box, Input, Button } from "./style";
import AddressContext from "../../contexts/AddressContext";
import UserContext from "../../contexts/UserContext";

export default function TelaEndereco() {
  const [endereco, SetEndereco] = useState({
    nome: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
  });
  const { SetAddress } = useContext(AddressContext);
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  useEffect(() => {
    if (!userInfo) {
      alert("o usuário deve estar logado para entrar nessa página!");
      navigate("/auth/login");
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

  function enderecoVazio() {
    const keys = Object.keys(endereco);

    for (let key of keys) {
      if (endereco[key] === "") return true;
    }
    return false;
  }

  function pesquisaCep(e) {
    const cep = e.target.value;
    const cepRegex = /^[0-9]{8}$/;

    if (!cep) return;

    if (cepRegex.test(cep)) {
      const promisse = axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      promisse.then((obj) => {
        const { data } = obj;
        SetEndereco({
          ...endereco,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
        });
      });

      promisse.catch(() => {
        alert("endereço não encontrado");
      });
    } else {
      alert("cep inválido");
    }
  }

  function armazenaEndereco(e) {
    e.preventDefault();

    if (enderecoVazio()) {
      alert("preencha os campos corretamente");
      return;
    }

    localStorage.setItem("Address", JSON.stringify({ ...endereco }));
    SetAddress({ ...endereco });
    navigate("/checkout/pagamento");
  }

  return (
    <Box>
      <Header />

      <form onSubmit={armazenaEndereco}>
        <h2>Endereço</h2>
        <Input
          type="text"
          placeholder="Nome completo"
          required
          value={endereco.nome}
          onChange={(e) => {
            SetEndereco({ ...endereco, nome: e.target.value });
          }}
        />
        <Input
          required
          placeholder="Cep"
          type="text"
          name="cep"
          maxLength={9}
          onBlur={pesquisaCep}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, "");
            SetEndereco({ ...endereco, cep: value });
          }}
          value={endereco.cep}
        />
        <Input
          placeholder="Endereço"
          required
          value={endereco.logradouro}
          onChange={(e) => {
            SetEndereco({ ...endereco, logradouro: e.target.value });
          }}
          type="text"
        />
        <Input
          placeholder="Complemento"
          required
          value={endereco.complemento}
          onChange={(e) => {
            SetEndereco({ ...endereco, complemento: e.target.value });
          }}
          type="text"
        />
        <Input
          placeholder="Estado"
          maxLength={2}
          required
          value={endereco.estado}
          onChange={(e) => {
            let value = e.target.value.replace(/\W/g, "");
            SetEndereco({ ...endereco, estado: value });
          }}
          type="text"
        />
        <Input
          placeholder="Cidade"
          required
          value={endereco.cidade}
          onChange={(e) => {
            SetEndereco({ ...endereco, cidade: e.target.value });
          }}
          type="text"
        />
        <Input
          placeholder="Bairro"
          required
          value={endereco.bairro}
          onChange={(e) => {
            SetEndereco({ ...endereco, bairro: e.target.value });
          }}
          type="text"
        />
        <Button
          type="submit"
          disabled={enderecoVazio()}
          preenchido={enderecoVazio()}
        >
          Ir para pagamento
        </Button>
      </form>
    </Box>
  );
}
