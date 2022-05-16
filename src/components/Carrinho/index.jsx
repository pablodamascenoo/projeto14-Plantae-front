import React from "react";
import Header from "../Header";
import { Container } from "./style";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import carrinho from "../../assets/SVGs/cart-outline.svg"
import lixo from "../../assets/SVGs/trash-bin-outline.svg"
import { Link } from "react-router-dom";

export default function Carrinho() {
    
    const { userInfo } = useContext(UserContext);
    const token = userInfo?.token;
    const nomeUsuario = userInfo?.nome;

    

    if(token){
        console.log(`token = ${token}`)
        return(
            <>
            <Header />
            <Container>
                <h1>Seu carrinho, {nomeUsuario}: </h1>
                <div className="listaDeItens">
                    <div className="itemgit ">
                        <img />
                        <div className="infos">
                            <span>(qntx) nome</span>
                            <span>R$</span>
                        </div>
                        <img src={lixo} alt="Excluir" className="excluir"/>
                    </div>

                    <div className="item">
                        <img />
                        <div className="infos">
                            <span>(qntx) nome</span>
                            <span>R$</span>
                        </div>
                        <img src={lixo} alt="Excluir" className="excluir"/>
                    </div>
                </div>
            </Container>
            </>
            
            
        );
    }else {
        console.log("sem token;")
        return(
            <Container>
                <div className="deslogado">
                    <img src={carrinho} alt="Carrinho" className="carrinho"/>
                    <Link to={"/auth/login"}>
                        <button>Faça login para acessar o carrinho</button>
                    </Link>
                </div>
                
            </Container>
            
        );
    }
    
    
}