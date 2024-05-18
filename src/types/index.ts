export interface AppContextProviderProps {
    children: React.ReactNode;
}

export type QuizData = {
  icon: string,
  questions: {
    answer: string,
    options: ["string", "string", "string", "string"],
    question: string,
  }[],
  title: string;
}[]
