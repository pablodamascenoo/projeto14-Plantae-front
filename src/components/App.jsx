import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../assets/global_styles/Reset";
import Inicio from "./Inicio/index.jsx";
import GlobalStyle from "../assets/global_styles/GlobalStyle";
import TelaCadastro from "./TelaCadastro";
import UserContext from "../contexts/UserContext";
import TelaLogin from "./TelaLogin";
import TelaProduto from "./TelaProduto";
import Carrinho from "./Carrinho";

export default function App() {
  const [userInfo, SetUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );

  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{ userInfo, SetUserInfo }}>
          <Routes>
            <Route path="/auth/cadastro" element={<TelaCadastro />} />
            <Route path="/auth/login" element={<TelaLogin />} />
            <Route path="/produtos/:id" element={<TelaProduto />} />
            <Route path="/" element={<Inicio />} />
            <Route path="carrinho" element={<Carrinho />}/>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
