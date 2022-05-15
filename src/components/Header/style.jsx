import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  z-index: 1;

  background: #ffffff;

  img {
    width: 30px;
  }

  .casinha {
    margin-left: 8px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 70px;

    margin-right: 8px;
  }

  .agrupar {
    width: 95%;
    margin-right: 0;
    margin: auto;
    justify-content: space-between;
  }
`;
