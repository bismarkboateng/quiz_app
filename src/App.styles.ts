import styled from "styled-components";

export const StyledMain = styled.main`
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    @media screen and (min-width: 768px) {
        width: 80%;
    }

    @media screen and (min-width: 1024px) {
        width: 95%;
    }
`