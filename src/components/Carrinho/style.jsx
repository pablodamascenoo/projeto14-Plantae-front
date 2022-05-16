import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;

position: relative;

min-height: 100%;
margin-top: 30px;
background: pink;

font-family: 'Lato', sans-serif;

    h1{
        margin-bottom: 15px;

        font-weight: 700;
        font-size: 20px;

        width: 90%;
    }

    img {
        width: 70px;
    }

    .listaDeItens {
        width: 90%;
        background: blue;
    }

    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;

        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        background: green;
    }

    .infos {
        display: flex;
        flex-direction: column;
    }

    .excluir {
        width: 30px;
    }

    .carrinho {
        width: 170px;
    }

    .deslogado {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50% , -50%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
`