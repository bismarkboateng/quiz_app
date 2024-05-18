import {
  StyledHome, StyledSubtitle, StyledTitle,
  StyledWelcomeTitle, StyledDesc, StyledCardWrapper,
  StyledQuizTitle,
  HtmlWrapper,
  CssWrapper,
  JsWrappper,
  AcWrapper
} from "./Home.styles";
import Card from "../../components/Card/Card";
import HtmlIcon from "../../assets/images/icon-html.svg"
import CssIcon from "../../assets/images/icon-css.svg"
import JSIcon from "../../assets/images/icon-js.svg"
import AccessibilityIcon from "../../assets/images/icon-accessibility.svg"


export default function Home() {
  return (
    <StyledHome>
      <StyledTitle>
        <StyledWelcomeTitle>Welcome to the</StyledWelcomeTitle>
        <StyledSubtitle>Frontend Quiz!</StyledSubtitle>
      </StyledTitle>
      <StyledDesc>Pick a subject to get started.</StyledDesc>

      <StyledCardWrapper>
        <Card>
         <HtmlWrapper>
          <img
            src={HtmlIcon}
            alt="html icon"
          />
         </HtmlWrapper>
         <StyledQuizTitle>HTML</StyledQuizTitle>
        </Card>
        <Card>
         <CssWrapper>
          <img
            src={CssIcon}
            alt="css icon"
          />
         </CssWrapper>
         <StyledQuizTitle>CSS</StyledQuizTitle>
        </Card>
        <Card>
         <JsWrappper>
          <img
            src={JSIcon}
            alt="js icon"
          />
         </JsWrappper>
         <StyledQuizTitle>JavaScript</StyledQuizTitle>
        </Card>
        <Card>
         <AcWrapper>
          <img
            src={AccessibilityIcon}
            alt="accessibility icon"
          />
         </AcWrapper>
         <StyledQuizTitle>Accessibility</StyledQuizTitle>
        </Card>
      </StyledCardWrapper>
    </StyledHome>
  )
}