import styled from "styled-components";

export const Box = styled.main`
  width: 100%;
  height: 100%;
  background-color: #f1f4fb;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ImageBox = styled.div`
  margin-top: 45px;
  border: 4px solid #20b25d;
  border-radius: 6px;
  height: 200px;
  width: 250px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoBox = styled.div`
  height: 55%;
  position: absolute;
  background-color: white;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px 30px 0 0;
  padding: 0 30px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  gap: 35px;

  .produto {
    margin-top: 40px;
    font-weight: 900;
    font-size: 26px;
    display: flex;
    justify-content: space-between;
  }

  .quantidade {
    font-size: 18px;
    width: 100px;
    display: flex;
    border: 1px solid #d3d3d3;
    font-weight: 900;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;

    button {
      background-color: transparent;
      font-size: 22px;
      border: none;
    }
  }
  .descricao {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      line-height: 1.5rem;
      font-weight: 400;
      color: #a9a9a9;
    }
  }
`;

export const FinishButton = styled.button`
  width: 90%;
  max-width: 365px;
  height: 54px;
  font-size: 16px;
  font-weight: 900;
  font-family: "Lato", sans-serif;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
`;
