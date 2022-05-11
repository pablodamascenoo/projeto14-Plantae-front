import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}

body{
    height: 100vh;
    font-family: 'Lato', sans-serif;
}

.root{
    width: 100%;
    height: 100%;
}

button{
    cursor: pointer;
}
`;

export default GlobalStyle;
