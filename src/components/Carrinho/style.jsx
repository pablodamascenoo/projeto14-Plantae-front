import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;

position: relative;

min-height: 100%;
padding-top: 70px;
background: #FFFFFF;

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
    }

    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;

        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        background: #F1F4FB;
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