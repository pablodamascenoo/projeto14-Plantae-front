import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  height: 100%;

  position: relative;

  background: #ffffff;

  font-family: "Lato", sans-serif;

  span {
    font-weight: 700;
    font-size: 18px;
  }

  h1 {
    margin-bottom: 15px;

    font-weight: 700;
    font-size: 20px;

    width: 90%;
  }

  img {
    width: 70px;
  }

  .listaDeItens {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    padding: 10px;
    margin-bottom: 15px;
    background: #f1f4fb;
  }

  .infos {
    display: flex;
    flex-direction: column;
  }

  .excluir {
    width: 30px;
  }

  .total {
    display: flex;
    justify-content: space-between;

    width: 90%;

    font-weight: 700;
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    height: 60px;
    width: auto;
    margin-top: 30px;
    border-radius: 25px;
    border: none;
    font-size: 20px;
    font-family: "Lato", sans-serif;
    color: white;
    background-color: #1da154;
  }

  .carrinho {
    width: 170px;
  }

  .deslogado {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
