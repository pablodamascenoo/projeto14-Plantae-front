import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Reset from "../assets/global_styles/Reset";
import GlobalStyle from "../assets/global_styles/GlobalStyle";
import TelaCadastro from "./TelaCadastro";
import UserContext from "../contexts/UserContext";
import TelaLogin from "./TelaLogin";

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
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
