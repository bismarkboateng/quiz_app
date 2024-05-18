import { StyleCard } from "./Card.styles";

type CardProps = {
    children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
  return (
    <StyleCard>
     {children}
    </StyleCard>
  )
}
