import React from "react";
import { Container } from "./style.jsx";
import Header from "../Header/index.jsx";
import VitrineContainer from "../VitrineContainer/index.jsx";
import Filtro from "../Filtro/index.jsx";

export default function Inicio() {
    return (
        <>
        <Header />
        <Filtro />
        <Container>
            <VitrineContainer nomeProduto="" imagem="" preco=""/>
            <VitrineContainer nomeProduto="" imagem="" preco=""/>
            <VitrineContainer nomeProduto="" imagem="" preco=""/>
            <VitrineContainer nomeProduto="" imagem="" preco=""/>
            <VitrineContainer nomeProduto="" imagem="" preco=""/>
            <VitrineContainer nomeProduto="" imagem="" preco=""/>
        </Container>
        </>
        
        
    );
}