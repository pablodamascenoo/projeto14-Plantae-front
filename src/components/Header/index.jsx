import React from "react";
import Logo from "../Logo";
import { Container } from "./style";
import pessoa from "../../assets/SVGs/person-outline.svg"
import carrinho from "../../assets/SVGs/cart-outline.svg"
import menu from "../../assets/SVGs/menu-outline.svg"
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Container>
            <div className="agrupar">
                <img src={menu} alt="menu" className="menu"/>
                
                <Logo />
                <div> 
                    <Link to={"/auth/login"}>
                    <img src={pessoa} alt="perfil"/>
                    </Link>
                    
                    <img src={carrinho} alt="carrinho"/>
                </div>
            </div>
            
            
        </Container>
    );
}