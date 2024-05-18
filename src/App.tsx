import { Route, Routes } from "react-router-dom"
import Quiz from "./pages/Quiz"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"

import { StyledMain} from "./App.styles"


export default function App() {

  return (
    <StyledMain>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:name" element={<Quiz />} />
      </Routes>
    </StyledMain>
  )
}
