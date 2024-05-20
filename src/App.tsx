import { Route, Routes } from "react-router-dom"
import Quiz from "./pages/Quiz/Quiz"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"

import { StyledMain} from "./App.styles"
import { AppContextProvider } from "./context/AppContext"


export default function App() {

  return (
    <AppContextProvider>
     <StyledMain>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:name" element={<Quiz />} />
      </Routes>
     </StyledMain>
    </AppContextProvider>
  )
}
