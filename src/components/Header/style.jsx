import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
position: sticky;

max-width: 100%;
background: pink;

    img {
        width: 30px;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 75px;

    }

    .agrupar {
        width: 95%;
        margin: auto;
        justify-content: space-between;
    }
`