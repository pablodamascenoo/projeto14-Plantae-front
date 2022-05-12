import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #1da154;
    font-weight: 700;
    margin-top: 20px;
  }

  h1 {
    font-family: "Dosis", sans-serif;
    font-size: 50px;
    font-weight: 700;
    color: #1da154;
  }

  form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;

    input,
    button {
      height: 60px;
      border-radius: 25px;
      max-width: 365px;
      width: 90%;
      font-size: 20px;
      font-family: "Lato", sans-serif;
    }

    input {
      border: 3px solid #20b25d;
      padding-left: 15px;
      background-color: ${(props) =>
        props.enviado ? "rgba(0, 0, 0, 0.2)" : "white"};
      transition: 0.5s;

      :focus {
        outline: none;
        transform: scale(1.1);
        border-color: #1b663e;
      }
    }

    button {
      border: none;
      background-color: grey;
      cursor: ${(props) => (props.preenchido ? "initial" : "pointer")};
      font-weight: 700;
      color: white;
      animation: ${(props) =>
        props.preenchido
          ? "fadeOutColor 0.5s forwards"
          : "fadeInColor 0.5s forwards"};
    }
  }

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
