import { createContext } from "react";
import { AppContextProviderProps } from "../types";

const AppContext = createContext({})


export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    return (
        <AppContext.Provider value={""}>
         {children}
        </AppContext.Provider>
    )
}