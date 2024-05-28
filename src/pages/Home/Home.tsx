import {
  StyledHome, StyledSubtitle, StyledTitle,
  StyledWelcomeTitle, StyledDesc, StyledCardWrapper,
  StyledQuizTitle, HtmlWrapper, CssWrapper,
  JsWrappper, AcWrapper, StyledLink,
  StyledHomeContent
} from "./Home.styles";
import Card from "../../components/Card/Card";
import HtmlIcon from "../../assets/images/icon-html.svg"
import CssIcon from "../../assets/images/icon-css.svg"
import JSIcon from "../../assets/images/icon-js.svg"
import AccessibilityIcon from "../../assets/images/icon-accessibility.svg"

import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function Home() {
  const { isSelected } = useContext(AppContext)

  return (
    <StyledHome>
      <StyledHomeContent>
        <StyledTitle>
          <StyledWelcomeTitle isSelected={isSelected}>Welcome to the</StyledWelcomeTitle>
          <StyledSubtitle isSelected={isSelected}>Frontend Quiz!</StyledSubtitle>
        </StyledTitle>
        <StyledDesc isSelected={isSelected}>Pick a subject to get started.</StyledDesc>
      </StyledHomeContent>

      <StyledCardWrapper>
        {/* html quiz */}
        <StyledLink to={`/quiz/HTML`}>
          <Card isSelected={isSelected}>
           <HtmlWrapper>
            <img
              src={HtmlIcon}
              alt="html icon"
            />
           </HtmlWrapper>
           <StyledQuizTitle isSelected={isSelected}>HTML</StyledQuizTitle>
          </Card>
        </StyledLink>

        {/* css quiz */}
        <StyledLink to={`/quiz/CSS`}>
          <Card isSelected={isSelected}>
           <CssWrapper>
            <img
              src={CssIcon}
              alt="css icon"
            />
           </CssWrapper>
           <StyledQuizTitle isSelected={isSelected}>CSS</StyledQuizTitle>
          </Card>
        </StyledLink>

        {/* js quiz */}
        <StyledLink to={`/quiz/JavaScript`}>
        <Card isSelected={isSelected}>
         <JsWrappper>
          <img
            src={JSIcon}
            alt="js icon"
          />
         </JsWrappper>
         <StyledQuizTitle isSelected={isSelected}>JavaScript</StyledQuizTitle>
        </Card>
        </StyledLink>
        
        {/* accessibility quiz*/}
        <StyledLink to={`/quiz/Accessibility`}>
         <Card isSelected={isSelected}>
          <AcWrapper>
           <img
            src={AccessibilityIcon}
            alt="accessibility icon"
           />
          </AcWrapper>
          <StyledQuizTitle isSelected={isSelected}>Accessibility</StyledQuizTitle>
         </Card>
        </StyledLink>
      </StyledCardWrapper>
    </StyledHome>
  )
}
