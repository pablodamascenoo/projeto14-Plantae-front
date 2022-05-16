import React from "react";
import Header from "../Header";
import { Container } from "./style";
import { useContext , useEffect} from "react";
import UserContext from "../../contexts/UserContext";
import carrinho from "../../assets/SVGs/cart-outline.svg"
import lixo from "../../assets/SVGs/trash-bin-outline.svg"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Carrinho() {
    
    const { userInfo } = useContext(UserContext);
    const token = userInfo?.token;
    const nomeUsuario = userInfo?.nome;
    const email = userInfo?.email;  

    const body = {"email": `${email}`};

    function solicitarCarrinho(){
        useEffect(() => {
            const requisicao = axios.get("//127.0.0.1:5000/carrinho" , body);

            requisicao.then((resposta) => {
                console.log(resposta);
            });
            requisicao.catch((resposta) => {
                console.log(resposta);
            })
        } , [])
    }


    if(token){
        solicitarCarrinho();
        return(
            <>
            <Header />
            <Container>
                <h1>Seu carrinho, {nomeUsuario}: </h1>
                <div className="listaDeItens">
                    <div className="item">
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