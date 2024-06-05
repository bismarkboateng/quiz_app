import LightMode from "../../assets/images/icon-sun-dark.svg"
import DarkMode from "../../assets/images/icon-moon-dark.svg"

import DarkModeSun from "../../assets/images/icon-sun-light.svg"
import LightModeMoon from "../../assets/images/icon-moon-light.svg"


import { StyledThemeSelect, StyledNavbar, IconTitleWrapper } from "./Navbar.styles.ts"
import { useLocation } from "react-router-dom"
import { StyledQuizTitle } from "../../pages/Home/Home.styles.ts"
import Switch from "../Switch/Switch.tsx"
import { AppContext } from "../../context/AppContext.tsx"
import { useContext } from "react"
import { HtmlWrapper, CssWrapper, JsWrappper, AcWrapper } from "../../pages/Home/Home.styles.ts"
import { subjectToIcon } from "../../lib/constant.ts"

export default function Navbar() {
  const { pathname } = useLocation()
  const { isSelected } = useContext(AppContext)

  const quizSubject = pathname.split("/").pop()

  return (
    <StyledNavbar>
      <div>
        {quizSubject && (
          <IconTitleWrapper>
            {quizSubject === "HTML" && (
              <HtmlWrapper>
                <img
                 src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
                 alt={quizSubject}
                 width={25}
                 height={25}
                />
              </HtmlWrapper>
            )}
            {quizSubject === "CSS" && (
              <CssWrapper>
                <img
                 src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
                 alt={quizSubject}
                 width={25}
                 height={25}
                />
              </CssWrapper>
            )}
            {quizSubject === "JavaScript" && (
              <JsWrappper>
                <img
                 src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
                 alt={quizSubject}
                 width={25}
                 height={25}
                />
              </JsWrappper>
            )}
            {quizSubject === "Accessibility" && (
              <AcWrapper>
                <img
                 src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
                 alt={quizSubject}
                 width={25}
                 height={25}
                />
              </AcWrapper>
            )}
            <StyledQuizTitle isSelected={isSelected}>{quizSubject}</StyledQuizTitle>
          </IconTitleWrapper>
        )}
      </div>
      <StyledThemeSelect>
        <img
         src={ isSelected ? DarkModeSun : LightMode}
         alt="light mode"
         width={25}
         height={25}
        />
        <div>
         <Switch />
        </div>
        <img
         src={ isSelected ? LightModeMoon : DarkMode}
         alt="dark mode"
         width={25}
         height={25}
        />
      </StyledThemeSelect>
    </StyledNavbar>
  )
}