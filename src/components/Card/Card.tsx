import { StyleCard } from "./Card.styles";

type CardProps = {
    children: React.ReactNode;
    onClick?: () => void;
    selected?: boolean;
    isCorrectAnswer?: boolean | null;
    isSubmitClicked?: boolean | null;
    tabIndex?: number;
    onKeyDown?: () => void;
    isSelected?: boolean;
}

export default function Card({ children, onClick, selected,
  isCorrectAnswer, isSubmitClicked,
  tabIndex, onKeyDown, isSelected }: CardProps) {
  return (
    <StyleCard 
     isCorrectAnswer={isCorrectAnswer}
     selected={selected}
     onClick={onClick}
     isSubmitClicked={isSubmitClicked}
     tabIndex={tabIndex}
     onKeyDown={onKeyDown}
     isSelected={isSelected}
    >
     {children}
    </StyleCard>
  )
}
