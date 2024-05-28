import { createContext, useState } from "react";
import { AppContextProviderProps, AppContextType, QuizDataProps } from "../types";
import QuizData from "../data.json"

export const AppContext = createContext({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const state: AppContextType = {
        isSelected,
        setIsSelected,
        quiz: QuizData.quizzes as QuizDataProps
    }
    
    return (
        <AppContext.Provider value={state}>
         {children}
        </AppContext.Provider>
    )
}