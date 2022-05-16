import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

import { Box, Button } from "../TelaEndereco/style";
import { Text } from "./style";

import Header from "../Header";

export default function TelaSucesso() {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      alert("é necessário estar logado para entrar nessa página");
      navigate("/auth/login");
      return;
    }
  }, []);

  return (
    <Box>
      <Header />
      <Text>{`Muito obrigado pela sua compra, ${userInfo.nome}. Continue contribuíndo para um mundo mais verde`}</Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Voltar para a tela inicial
      </Button>
    </Box>
  );
}
