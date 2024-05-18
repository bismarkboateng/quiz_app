import { StyleCard } from "./Card.styles";

type CardProps = {
    children: React.ReactNode;
    onClick?: () => void;
}
export default function Card({ children, onClick }: CardProps) {
  return (
    <StyleCard onClick={onClick}>
     {children}
    </StyleCard>
  )
}
