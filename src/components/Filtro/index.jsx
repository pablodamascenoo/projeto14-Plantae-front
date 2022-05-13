import React from "react";
import { Container } from "./style";
import filtro from "../../assets/SVGs/options-outline.svg"

export default function Filtro() {
    return(
        <Container>
            <img src={filtro} alt="filtro"/>
        </Container>
    );
}
