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
    const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };
    
    let total = 0.00;
    let itensDoCarrinho = [];
    function solicitarCarrinho(){
        useEffect(() => {
            const requisicao = axios.get("//127.0.0.1:5000/carrinho" , config , body);

            requisicao.then((resposta) => {
                itensDoCarrinho = [...resposta.data];
                console.log(itensDoCarrinho);                
                //Fazer requisição para cada id de produto e armazenar os dados em um array de objetos
                //Depois iterar um map no return para carregar as informações na tela
                //Testar se é possível fazer essa requisição de uma só vez no back e já retornar o array com as informações dos itens
            });
            requisicao.catch((resposta) => {
                const {data} = resposta;
                console.log(data);
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
                    <div className="listaDeItens" >
                        <div className="item" >
                            <img src={item.imagem}/>
                            <div className="infos">
                                <span>({item.quantidade}x) {item.nome}</span><span>R${item.preco}</span>
                            </div>
                            <img src={lixo} alt="Excluir" className="excluir"/>
                            </div>
                            <div className="total"><span>Total</span><span>R${total}</span></div>
                    </div>
                </div>
                <Link to={"/checkout/endereco"}>
                    <button>Finalizar Pedido</button>
                </Link>
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