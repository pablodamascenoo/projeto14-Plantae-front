import styled from "styled-components";

export const Box = styled.main`
  padding-top: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  h2 {
    font-size: 35px;
    font-family: "Lato", sans-serif;
    font-weight: 900;
  }
`;

export const Input = styled.input`
  border: 3px solid #20b25d;
  padding-left: 15px;
  background-color: ${(props) =>
    props.enviado ? "rgba(0, 0, 0, 0.2)" : "white"};
  transition: 0.5s;
  height: 60px;
  border-radius: 25px;
  max-width: 365px;
  width: 90%;
  font-size: 20px;
  font-family: "Lato", sans-serif;

  :focus {
    outline: none;
    transform: scale(1.1);
    border-color: #1b663e;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  height: 60px;
  border-radius: 25px;
  max-width: 365px;
  width: 90%;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  border: none;
  color: white;
  background-color: grey;
  cursor: ${(props) => (props.preenchido ? "initial" : "pointer")};
  font-weight: 700;
  animation: ${(props) =>
    props.preenchido
      ? "fadeOutColor 0.5s forwards"
      : "fadeInColor 0.5s forwards"};

  @keyframes fadeInColor {
    from {
      background-color: #888888;
    }
    to {
      background-color: #20b25d;
    }
  }

  @keyframes fadeOutColor {
    from {
      background-color: #20b25d;
    }
    to {
      background-color: #888888;
    }
  }
`;
