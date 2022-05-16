import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../assets/global_styles/Reset";
import GlobalStyle from "../assets/global_styles/GlobalStyle";

import UserContext from "../contexts/UserContext";
import AddressContext from "../contexts/AddressContext";

import Inicio from "./Inicio/index.jsx";
import TelaCadastro from "./TelaCadastro";
import TelaLogin from "./TelaLogin";
import TelaProduto from "./TelaProduto";
import TelaEndereco from "./TelaEndereco";
import Carrinho from "./Carrinho";
import TelaPagamento from "./TelaPagamento";
import TelaSucesso from "./TelaSucesso";

export default function App() {
  const [userInfo, SetUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );
  const [address, SetAddress] = useState(
    JSON.parse(localStorage.getItem("Address"))
  );

  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{ userInfo, SetUserInfo }}>
          <AddressContext.Provider value={{ address, SetAddress }}>
            <Routes>
              <Route path="/auth/cadastro" element={<TelaCadastro />} />
              <Route path="/auth/login" element={<TelaLogin />} />
              <Route path="/produtos/:id" element={<TelaProduto />} />
              <Route path="/" element={<Inicio />} />
              <Route path="/checkout/endereco" element={<TelaEndereco />} />
              <Route path="/checkout/pagamento" element={<TelaPagamento />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/sucesso" element={<TelaSucesso />} />
            </Routes>
          </AddressContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
