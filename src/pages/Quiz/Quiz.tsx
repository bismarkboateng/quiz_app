import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { useLocation } from "react-router-dom"
import { QuizData } from "../../types"
import {
  CorrectAnswer,
  ErrorMessage,
  ErrorWrapper,
  Image,
  ResultCard,
  ResultCardImage,
  // StyledError,
  StyledNumber, StyledOption, StyledOptionIndex,
  StyledOptions, StyledProgress, StyledQuestion,
  StyledQuiz,
  StyledQuizContent,
  TotalQuestion
} from "./Quiz.styles"
import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"
import { StyledLink, StyledQuizTitle, StyledSubtitle, StyledTitle, StyledWelcomeTitle } from "../Home/Home.styles"
import { StyledButton } from "../../components/Button/Button.styles"
import { IconTitleWrapper } from "../../components/Navbar/Navbar.styles"
import IconCorrect from "../../assets/images/icon-correct.svg"
import IconError from "../../assets/images/icon-error.svg"

const TitleToQuiz = {
  "HTML": 0,
  "CSS": 1,
  "JavaScript": 2,
  "Accessibility": 3
}

const Letters = ["A", "B", "C", "D"]

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [optionClicked, setOptionClicked] = useState<number | null>(null)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [isActualAnswer, setIsActualAnswer] = useState("")
  // to check if a user clicked the submit without selecting an option
  const [clicked, setClicked] = useState(false)
  const [result, setResult] = useState({
    correct: 0,
    wrong: 0,
  })

  const quiz: QuizData = useContext(AppContext)

  const { pathname } = useLocation()
  const quizSubject = pathname.substring(1).split("/").pop()
  
  const quizQuestions = quiz[TitleToQuiz[quizSubject]]

  const questions = quizQuestions.questions

  const actualAnswer = questions[activeQuestion]?.answer 


  const handleOptionClick = (item: string, index: number) => {
    setOptionClicked(index);
    if (item === questions[activeQuestion].answer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false)
    }
  }

  const handleSubmit = () => {
    setClicked(true)
    if (typeof optionClicked !== "number") return

    setIsSubmitClicked(true)
    setIsActualAnswer(actualAnswer)
    if(isCorrectAnswer) {
      setResult(prevResult => ({...prevResult, correct: prevResult.correct + 1}))
    } else {
      setResult(prevResult => ({...prevResult, wrong: prevResult.wrong + 1}))
    }
  }

  const handleNext = () => {
    if (activeQuestion === questions.length - 1) {
      setShowResult(true)
    } else {
      setShowResult(false)
    }
    setActiveQuestion(prevState => prevState + 1)
    setClicked(false)
    setOptionClicked(null)
    setIsCorrectAnswer(null)
    setIsSubmitClicked(false)
    setIsActualAnswer("")
  }

  const iconName = quizQuestions.icon.split("/").pop()

  return (
    <>
    {!showResult
    ?(<StyledQuiz>
      <StyledQuizContent>
        <StyledNumber>
          Question {activeQuestion + 1} of {questions.length}
        </StyledNumber>
        <StyledQuestion>
          {questions[activeQuestion].question}
        </StyledQuestion>
        <StyledProgress>
          progress bar here
        </StyledProgress>
      </StyledQuizContent>

      <StyledOptions>
        {questions[activeQuestion].options.map((item, index) => (
          <Card
           key={index}
           onClick={() => handleOptionClick(item, index)}
           selected={index === optionClicked}
           isCorrectAnswer={isCorrectAnswer}
           isSubmitClicked={isSubmitClicked}
          >
            <StyledOptionIndex
              selected={index === optionClicked}
              isCorrectAnswer={isCorrectAnswer}
              isSubmitClicked={isSubmitClicked}
            >
              {Letters[index]}
            </StyledOptionIndex>
            <StyledOption>
              {item}
            </StyledOption>
            { index === optionClicked && isSubmitClicked && isCorrectAnswer
            ? <Image src={IconCorrect} alt="correct" width={32} height={32} />
            : index === optionClicked && isSubmitClicked
            ? <Image src={IconError} alt="wrong" width={32} height={32} />
            :  item === isActualAnswer
            &&  <Image src={IconCorrect} alt="correct" width={32} height={32} />
            }
          </Card>
        ))}
     {!isSubmitClicked && (typeof optionClicked === "number")
      ? <Button onClick={handleSubmit}>Submit Answer</Button>
      : isSubmitClicked && (typeof optionClicked === "number")
      ? <Button onClick={handleNext}>Next Question</Button>
      : !isSubmitClicked && (typeof optionClicked !== "number")
      ? <Button onClick={handleSubmit}>Submit Answer</Button>
      : isSubmitClicked && (typeof optionClicked !== "number")
      && <Button onClick={handleSubmit}>Submit Answer</Button>
      }
      {clicked && (typeof optionClicked !== "number")
      && (
        <ErrorWrapper>
          <Image src={IconError} alt="wrong" width={32} height={32} />
          <ErrorMessage>Please select an answer</ErrorMessage>
        </ErrorWrapper>
      )}
      </StyledOptions>


    </StyledQuiz>)
    : (<StyledQuiz>
       <StyledTitle>
        <StyledWelcomeTitle>Quiz Completed</StyledWelcomeTitle>
        <StyledSubtitle>You scored...</StyledSubtitle>
       </StyledTitle>

       <ResultCard>
        <IconTitleWrapper>
          <ResultCardImage
            src={`/src/assets/images/${iconName}`}
            alt={quizSubject}
            width={25}
            height={25}
          />
          <StyledQuizTitle>{quizQuestions.title}</StyledQuizTitle>
        </IconTitleWrapper>
        <CorrectAnswer>
          {result.correct}
        </CorrectAnswer>
        <TotalQuestion>
          out of {questions.length}
        </TotalQuestion>
       </ResultCard>
       <StyledLink to={`/`}>
        <StyledButton>
          Play Again
        </StyledButton>
       </StyledLink>
      </StyledQuiz>
    )}
    </>
  )
}