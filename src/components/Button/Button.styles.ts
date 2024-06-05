import styled from "styled-components";


export const StyledButton = styled.button`
    width: 100%;
    border-radius: 12px;
    background-color: #A729F5;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 600;
    border: none;
    outline: none;
    margin-top: 10px;
    padding-top: 18px;
    padding-bottom: 18px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        font-size: 28px;
        margin-top: 20px;
        padding: 30px 0;
        border-radius: 24px;
    }

    @media screen and (min-width: 1024px) {
        padding: 25px 0;
        margin-top: 0;
    }

    @media screen and (min-width: 1280px) {
        margin-top: 25px;
    }
`