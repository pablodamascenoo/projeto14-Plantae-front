import React from "react";
import Logo from "../Logo";
import { Container } from "./style";
import pessoa from "../../assets/SVGs/person-outline.svg"
import carrinho from "../../assets/SVGs/cart-outline.svg"
import menu from "../../assets/SVGs/menu-outline.svg"

export default function Header() {
    return(
        <Container>
            <div className="agrupar">
                <img src={menu} alt="menu" className="menu"/>
                
                <Logo />
                <div> 
                    <img src={pessoa} alt="perfil"/>
                    <img src={carrinho} alt="carrinho"/>
                </div>
            </div>
            
            
        </Container>
    );
}