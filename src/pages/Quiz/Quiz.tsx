import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { useLocation } from "react-router-dom"
import { QuizData } from "../../types"
import {
  StyledNumber, StyledOption, StyledOptionIndex,
  StyledOptions, StyledProgress, StyledQuestion,
  StyledQuiz
} from "./Quiz.styles"
import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"

const TitleToQuiz = {
  "HTML": 0,
  "CSS": 1,
  "JavaScript": 2,
  "Accessibility": 3
}

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [isOptionClicked, setIsOptionClicked] = useState<boolean | null>(null)

  const quiz: QuizData = useContext(AppContext)

  const { pathname } = useLocation()
  const quizSubject = pathname.substring(1).split("/").pop()
  
  const quizQuestions = quiz[TitleToQuiz[quizSubject]]

  // actual questions
  const questions = quizQuestions.questions

  console.log(questions[activeQuestion])

  console.log(questions)

  const handleOptionClick = (item: string, index: number) => {
    setIsOptionClicked(true)
  }

  const handleSubmit = () => {
    if(!isOptionClicked) {
      alert("Please select an option")
    }
    console.log("clicked")
  }

  return (
    <StyledQuiz>
      <StyledNumber>
        Question {activeQuestion + 1} of {questions.length}
      </StyledNumber>
      <StyledQuestion>
        {questions[activeQuestion].question}
      </StyledQuestion>
      <StyledProgress>
        progress bar here
      </StyledProgress>

      <StyledOptions>
        {questions[activeQuestion].options.map((item, index) => (
          <Card key={index} onClick={() => handleOptionClick(item, index)}>
            <StyledOptionIndex>
             {index}
            </StyledOptionIndex>
            <StyledOption>
              {item}
            </StyledOption>
          </Card>
        ))}
      </StyledOptions>

      <Button onClick={() => handleSubmit}>
        Submit Answer
      </Button>
    </StyledQuiz>
  )
}
