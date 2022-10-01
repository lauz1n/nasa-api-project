import "./App.css"
import NasaPhoto from "./components/NasaPhoto/NasaPhoto"
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasaphoto" element={<NasaPhoto />} />
      </Routes>
    </Router>
  )
}

export default App
