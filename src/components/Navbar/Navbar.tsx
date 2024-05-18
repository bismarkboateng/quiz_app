import LightMode from "../../assets/images/icon-sun-dark.svg"
import DarkMode from "../../assets/images/icon-moon-dark.svg"

import { StyledThemeSelect, StyledNavbar } from "./Navbar.styles.ts"
export default function Navbar() {

  return (
    <StyledNavbar>
      <div>

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
