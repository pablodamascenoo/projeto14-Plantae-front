import React from "react";
import axios from "axios";
import { Container } from "./style.jsx";
import Header from "../Header/index.jsx";
import VitrineContainer from "../VitrineContainer/index.jsx";
import { useEffect , useState } from "react";

export default function Inicio() {
    const [produtos , setProdutos] = useState([]);

    useEffect(()=>{
        let requisicao = axios.get("//localhost:5000/produtos");
        requisicao.then(resposta => {
            setProdutos(resposta.data);          
        })
        requisicao.catch(resposta => {
            console.log("erro na requisição: /produtos");
            return(
                <>
                    <Header/>
                    <h1>Erro ao carregar a página</h1>
                </>
            );
        })
    },[])
    
    return (
        <>
        <Header />
        {/*<Filtro />*/}
        <Container>
            {
            produtos.map((produto , index) => <VitrineContainer key={index} nomeProduto={produto.nome} imagem={produto.imagem} preco={produto.preco} id={produto._id}/>)
            }
            
        </Container>
        </>
    );
}