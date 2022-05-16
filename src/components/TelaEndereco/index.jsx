import axios from "axios";
import React, { useState, useContext } from "react";

import Header from "../Header";
import { Box, Input, Button } from "./style";
import AddressContext from "../../contexts/AddressContext";

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
  const { address, SetAddress } = useContext(AddressContext);

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

    localStorage.setItem("Address", JSON.stringify({ ...endereco }));
    SetAddress({ ...endereco });
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
