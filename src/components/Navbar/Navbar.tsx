import LightMode from "../../assets/images/icon-sun-dark.svg"
import DarkMode from "../../assets/images/icon-moon-dark.svg"

import HtmlIcon from "../../assets/images/icon-html.svg"
import CssIcon from "../../assets/images/icon-css.svg"
import JSIcon from "../../assets/images/icon-js.svg"
import AccessibilityIcon from "../../assets/images/icon-accessibility.svg"

import { StyledThemeSelect, StyledNavbar, IconTitleWrapper, NavImage } from "./Navbar.styles.ts"
import { useLocation } from "react-router-dom"
import { StyledQuizTitle } from "../../pages/Home/Home.styles.ts"


export default function Navbar() {
  const { pathname } = useLocation()

  const subjectToIcon = {
    "HTML": HtmlIcon,
    "CSS": CssIcon,
    "JavaScript": JSIcon,
    "Accessibility": AccessibilityIcon
  }

  const quizSubject = pathname.split("/").pop()

  return (
    <StyledNavbar>
      <div>
        {quizSubject && (
          <IconTitleWrapper>
            <NavImage
             src={subjectToIcon[quizSubject]}
             alt={quizSubject}
             width={25}
             height={25}
            />
            <StyledQuizTitle>{quizSubject}</StyledQuizTitle>
          </IconTitleWrapper>
        )}
      </div>
      <StyledThemeSelect>
        <img
         src={LightMode}
         alt="light mode"
         width={25}
         height={25}
        />
        <div>
         <input type="checkbox" />
        </div>
        <img
         src={DarkMode}
         alt="dark mode"
         width={25}
         height={25}
        />
      </StyledThemeSelect>
    </StyledNavbar>
  )
}
