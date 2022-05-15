import React from "react";
import Logo from "../Logo";
import { Container } from "./style";
import pessoa from "../../assets/SVGs/person-outline.svg"
import carrinho from "../../assets/SVGs/cart-outline.svg"
import casinha from "../../assets/SVGs/home-outline.svg"
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Container>
            <div className="agrupar">
                <Link to="/">
                    <img src={casinha} alt="Início" className="casinha"/>
                </Link>
                
                <Logo />
                <div> 
                    <Link to={"/auth/login"}>
                        <img src={pessoa} alt="perfil" />
                    </Link>
                    <Link to={"/carrinho"}>
                        <img src={carrinho} alt="carrinho"/>
                    </Link>
                </div>
            </div>
            
            
        </Container>
    );
}