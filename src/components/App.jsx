import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Reset from "../assets/global_styles/Reset";
import Inicio from "./Inicio/index.jsx";

export default function App() {
  return (
    <>
    <Reset />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
