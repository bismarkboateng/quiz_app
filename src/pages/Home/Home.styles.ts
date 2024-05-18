import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHome = styled.section`
    margin-top: 50px;
`

export const StyledTitle = styled.div`
    font-size: 40px;
    color: #313E51;
`
export const StyledWelcomeTitle = styled.div`
    font-weight: 300;
`

export const StyledSubtitle = styled.div`
    font-weight: 500;
`

export const StyledDesc = styled.p`
    font-size: 14px;
    font-style: italic;
    color: #626C7F;
    margin-top: 15px;
    line-height: 150%;
`

export const StyledCardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 50px;
    cursor: pointer;
`

export const StyledQuizTitle = styled.h1`
    font-size: 18px;
    color: #313E51;
    font-weight: 500;
`
export const IconWrapper = styled.div`
    border-radius: 8px;
    padding: 5px 6px;
`

export const HtmlWrapper = styled(IconWrapper)`
    background-color: #FFF1E9;
`

export const CssWrapper = styled(IconWrapper)`
    background-color: #E0FDEF;
`
export const JsWrappper = styled(IconWrapper)`
    background-color: #EBF0FF;
`

export const AcWrapper = styled(IconWrapper)`
    background-color: #F6E7FF;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`