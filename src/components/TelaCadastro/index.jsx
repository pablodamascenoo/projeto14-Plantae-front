import React from "react";

import { Container } from "./style";

export default function TelaCadastro() {
  return (
    <Container>
      <h1>Plantae</h1>

      <div>
        <h2>Criar uma conta</h2>
        <form action="">
          <input type="text" placeholder="nome" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="senha" />
          <input type="password" placeholder="confirme sua senha" />
        </form>
      </div>
    </Container>
  );
}
