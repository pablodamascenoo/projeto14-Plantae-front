import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../assets/global_styles/Reset";
import Inicio from "./Inicio/index.jsx";
import GlobalStyle from "../assets/global_styles/GlobalStyle";
import TelaCadastro from "./TelaCadastro";
import UserContext from "../contexts/UserContext";
import TelaLogin from "./TelaLogin";
import TelaProduto from "./TelaProduto";
import TelaEndereco from "./TelaEndereco";
import AddressContext from "../contexts/AddressContext";

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
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/checkout/endereco" element={<TelaEndereco />} />
            </Routes>
          </AddressContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
