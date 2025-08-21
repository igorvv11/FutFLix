import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home"; 
import { Favoritos } from "./pages/Favoritos/";
import { TimePage }  from "../src/pages/Time"
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/time/:id" element={<TimePage />} />
      </Routes>
    </Router>
  );
}

export default App;
