import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    min-width: 120px;
    
    left: 50%;
    transform: translate(-50%);

    span{
        font-weight: 600;
        font-family: 'Dosis', sans-serif;
        font-size: 35px;
        text-align: center;
        color: #1da154;

        margin: auto;
    }
`