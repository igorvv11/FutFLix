import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home"; 
import { Favoritos } from "./pages/Favoritos/";
import { Time } from "./pages/Time";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/time/:id" element={<Time />} />
      </Routes>
    </Router>
  );
}

export default App;
