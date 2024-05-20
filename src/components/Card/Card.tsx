import { StyleCard } from "./Card.styles";

type CardProps = {
    children: React.ReactNode;
    onClick?: () => void;
    selected?: boolean;
    isCorrectAnswer?: boolean | null;
    isSubmitClicked?: boolean | null;
}

export default function Card({ children, onClick, selected, isCorrectAnswer, isSubmitClicked}: CardProps) {
  return (
    <StyleCard 
     isCorrectAnswer={isCorrectAnswer}
     selected={selected}
     onClick={onClick}
     isSubmitClicked={isSubmitClicked}
    >
     {children}
    </StyleCard>
  )
}
