import { StyledButton } from "./Button.styles"
type ButtonProps = {
    children: string;
    onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}
