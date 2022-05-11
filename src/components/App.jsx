import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Reset from "../assets/global_styles/Reset";
import GlobalStyle from "../assets/global_styles/GlobalStyle";
import TelaCadastro from "./TelaCadastro";

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<TelaCadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
