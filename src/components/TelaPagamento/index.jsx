import React, { useState } from "react";
import { ImpulseSpinner } from "react-spinners-kit";
import Header from "../Header";
import { Input, Box, Button } from "../TelaEndereco/style";

export default function TelaPagamento() {
  const [pagamento, SetPagamento] = useState({
    numero: "",
    cpf: "",
    codigo: "",
    validade: "",
  });
  const [enviado, SetEnviado] = useState(false);

  const { numero, cpf, codigo, validade } = pagamento;

  console.log(validade);

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

  return (
    <Box>
      <Header />
      <form action="">
        <h2>Pagamento</h2>
        <Input
          enviado={enviado}
          maxLength={19}
          type="text"
          required
          value={numero}
          placeholder="numero do cartão"
          onChange={(e) => mascaraNumeroCartao(e.target.value)}
        />
        <Input
          enviado={enviado}
          type="text"
          required
          value={cpf}
          placeholder="cpf"
          onChange={(e) => mascaraCpf(e.target.value)}
          maxLength={14}
        />
        <Input
          enviado={enviado}
          type="text"
          maxLength={4}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, "");
            SetPagamento({ ...pagamento, codigo: value });
          }}
          required
          value={codigo}
          placeholder="código de segurança"
        />
        <Input
          enviado={enviado}
          required
          type="month"
          value={validade}
          onChange={(e) => {
            SetPagamento({ ...pagamento, validade: e.target.value });
          }}
        />
        <Button disabled={campoVazio() || enviado} preenchido={campoVazio()}>
          Concluir a compra
        </Button>
      </form>
    </Box>
  );
}
