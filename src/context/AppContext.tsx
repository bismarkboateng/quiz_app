import { createContext } from "react";
import { AppContextProviderProps } from "../types";
import QuizData from "../data.json"

export const AppContext = createContext({})

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    return (
        <AppContext.Provider value={QuizData.quizzes}>
         {children}
        </AppContext.Provider>
    )
}