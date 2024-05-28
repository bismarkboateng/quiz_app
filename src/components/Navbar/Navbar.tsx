import LightMode from "../../assets/images/icon-sun-dark.svg"
import DarkMode from "../../assets/images/icon-moon-dark.svg"

import DarkModeSun from "../../assets/images/icon-sun-light.svg"
import LightModeMoon from "../../assets/images/icon-moon-light.svg"

import HtmlIcon from "../../assets/images/icon-html.svg"
import CssIcon from "../../assets/images/icon-css.svg"
import JSIcon from "../../assets/images/icon-js.svg"
import AccessibilityIcon from "../../assets/images/icon-accessibility.svg"

import { StyledThemeSelect, StyledNavbar, IconTitleWrapper, NavImage } from "./Navbar.styles.ts"
import { useLocation } from "react-router-dom"
import { StyledQuizTitle } from "../../pages/Home/Home.styles.ts"
import Switch from "../Switch/Switch.tsx"
import { AppContext } from "../../context/AppContext.tsx"
import { useContext } from "react"


export default function Navbar() {
  const { pathname } = useLocation()
  const { isSelected } = useContext(AppContext)

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