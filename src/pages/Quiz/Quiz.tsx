import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { useLocation } from "react-router-dom"
import {
  CorrectAnswer, ErrorMessage, ErrorWrapper, Image,
  Result, ResultCard, ResultCardImage,
  StyledNumber, StyledOption, StyledOptionIndex,
  StyledOptions, StyledProgress, StyledQuestion,
  StyledQuiz, StyledQuizContent, TotalQuestion
} from "./Quiz.styles"
import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"
import { StyledLink, StyledQuizTitle, StyledSubtitle, StyledTitle, StyledWelcomeTitle } from "../Home/Home.styles"
import { StyledButton } from "../../components/Button/Button.styles"
import { IconTitleWrapper } from "../../components/Navbar/Navbar.styles"
import IconCorrect from "../../assets/images/icon-correct.svg"
import IconError from "../../assets/images/icon-error.svg"
import ProgressBar from "../../components/ProgressBar/ProgressBar"


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
  const [keyboardClick, setKeyBoardClick] = useState<boolean | null>(null)
  const { isSelected } = useContext(AppContext)
  // to check if a user clicked the submit without selecting an option
  const [clicked, setClicked] = useState(false)
  const [result, setResult] = useState({
    correct: 0,
    wrong: 0,
  })

  const { quiz } = useContext(AppContext)

  const { pathname } = useLocation()
  const quizSubject = pathname.substring(1).split("/").pop()
  
  const quizQuestions = quiz[TitleToQuiz[quizSubject as keyof typeof TitleToQuiz]]

  const questions = quizQuestions.questions

  const actualAnswer = questions[activeQuestion]?.answer 

  // handles keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        if (typeof optionClicked !== "number") {
          setOptionClicked(0)
        } else {
          setOptionClicked(prev => {
            if (prev === questions[activeQuestion].options.length - 1) {
              return 0
            } else {
              return prev! + 1
            }
          })
        }
      }

      if (event.key === "Enter") {
        handleKeyBoardOptionClick(questions[activeQuestion].options[optionClicked!], optionClicked!)
      }

      if (event.key === " " && (typeof optionClicked === "number")) {
        handleNext()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [optionClicked, activeQuestion])
  
  // to select an option on click
  const handleOptionClick = (item: string, index: number) => {
    setOptionClicked(index);
    if (item === questions[activeQuestion].answer) {
      setIsCorrectAnswer(prev => prev === true ? prev : true);
    } else {
      setIsCorrectAnswer(prev => prev === false ? prev : false);
    }
  }

  // submits an answer
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

  // select an option with keyboard
  const handleKeyBoardOptionClick = (item: string, index: number) => {
    handleOptionClick(item, index)
    setKeyBoardClick(true)
  }

  useEffect(() => {
    if (keyboardClick) {
      handleSubmit()
    }
    setKeyBoardClick(false)
  }, [keyboardClick])


  // moves to the next question
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
        <StyledNumber isSelected={isSelected}>
          Question {activeQuestion + 1} of {questions.length}
        </StyledNumber>
        <StyledQuestion isSelected={isSelected}>
          {questions[activeQuestion].question}
        </StyledQuestion>
        <StyledProgress>
          <ProgressBar isSelected={isSelected} progress={activeQuestion} total={questions.length} />
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
           tabIndex={0}
           isSelected={isSelected}
           onKeyDown={() => handleKeyBoardOptionClick(item, index)}
          >
            <StyledOptionIndex
              selected={index === optionClicked}
              isCorrectAnswer={isCorrectAnswer}
              isSubmitClicked={isSubmitClicked}
            >
              {Letters[index]}
            </StyledOptionIndex>
            <StyledOption isSelected={isSelected}>
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
        <StyledWelcomeTitle isSelected={isSelected}>Quiz Completed</StyledWelcomeTitle>
        <StyledSubtitle isSelected={isSelected}>You scored...</StyledSubtitle>
       </StyledTitle>

      <Result>
       <ResultCard isSelected={isSelected}>
        <IconTitleWrapper>
          <ResultCardImage
            src={`/src/assets/images/${iconName}`}
            alt={quizSubject}
            width={25}
            height={25}
          />
          <StyledQuizTitle isSelected={isSelected}>{quizQuestions.title}</StyledQuizTitle>
        </IconTitleWrapper>
        <CorrectAnswer isSelected={isSelected}>
          {result.correct}
        </CorrectAnswer>
        <TotalQuestion isSelected={isSelected}>
          out of {questions.length}
        </TotalQuestion>
       </ResultCard>
       <StyledLink to={`/`}>
        <StyledButton>
          Play Again
        </StyledButton>
       </StyledLink>
      </Result>
      </StyledQuiz>
    )}
    </>
  )
}