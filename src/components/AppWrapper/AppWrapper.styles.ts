import styled from "styled-components"
import backgroundImageMobileLight from "../../assets/images/pattern-background-mobile-light.svg"
import backgroundImageMobileDark from "../../assets/images/pattern-background-mobile-dark.svg"

type StyledWrapperProps = {
    isSelected?: boolean;
}
export const StyledWrapper =  styled.div<StyledWrapperProps>`
    width: 100%;
    height: 100vh;
    background-image: url(${({ isSelected }) => (isSelected ? backgroundImageMobileDark : backgroundImageMobileLight)});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${({ isSelected }) => (isSelected ? " #3B4D66;" : "#F4F6FA" )}
`

// ./assets/images/pattern-background-mobile-light.svg
// backgroundImageMobileLight