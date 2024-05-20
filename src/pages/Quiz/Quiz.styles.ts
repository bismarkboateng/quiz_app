import styled from "styled-components";

type StyledOptionIndexProps = {
    selected?: boolean;
    isCorrectAnswer?: boolean | null;
    isSubmitClicked?: boolean | null;
}

export const StyledQuiz = styled.section`
    margin-top: 55px;

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
`

export const StyledQuizContent = styled.div`

    @media screen and (min-width: 1024px) {
        width: 50%;
    }

`

export const StyledNumber = styled.div`
    color: #626C7F;
    font-size: 14px;
    font-style: italic;
    line-height: 150%;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`

export const StyledQuestion = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: #313E51;
    line-height: 120%;
    margin-top: 10px;

    @media screen and (min-width: 768px) {
        font-size: 36px;
    }
`

export const StyledProgress = styled.div`
    margin: 20px 0;    
`

export const StyledOptions = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        gap: 20px;
    }

    @media screen and (min-width: 1024px) {
        width: 50%;
    }
`

export const StyledOption = styled.div`
    color: #313E51;
    font-size: 18px;
    font-weight: 500;

    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`

export const StyledOptionIndex = styled.div<StyledOptionIndexProps>`
    background-color: ${({ selected, isCorrectAnswer, isSubmitClicked }) =>
        ( selected && isSubmitClicked && isCorrectAnswer
        ? "#26D782"
        : selected && isSubmitClicked
        ? "#EE5454"
        : selected ? "#A729F5" : "#F4F6FA"
        )};
    color: ${({ selected, isCorrectAnswer, isSubmitClicked }) =>
        ( selected && isSubmitClicked && isCorrectAnswer
        ? "#ffffff"
        : selected && isSubmitClicked
        ? "#ffffff"
        : selected ? "#ffffff" : "#626C7F"
        )};
    border-radius: 6px;
    padding: 12px 16px;

    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`
// 

export const StyledError = styled.div`
    color: red;
    text-align: center;
    margin-top: 3px;
`

export const ResultCard = styled.section`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 16px;
    background-color: #FFFFFF;
    padding: 12px;
    border-radius: 12px;
    box-shadow: -1px 5px 13px 0px #F4F6FA;
    margin-top: 45px;
    margin-bottom: 3px;

    @media screen and (min-width: 768px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
`

export const CorrectAnswer = styled.section`
    color: #313E51;
    font-size: 88px;
    font-weight: 500;
`
export const TotalQuestion = styled.section`
    color: #626C7F;
    font-size: 18px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }
`

export const Image = styled.img`
    margin-left: auto;

    @media screen and (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const ResultCardImage = styled(Image)`
    margin-left: 0;
    width: 25px;
    height: 25px;

    @media screen and (min-width: 768px) {
        width: 56px;
        height: 56px;
    }
`

export const ErrorWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-top: 8px;

    @media screen and (min-width: 768px) {
        margin-top: 12px;
    }
`
export const ErrorMessage = styled.p`
    color: #EE5454;
    font-size: 18px;
    font-weight: 400;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }
`