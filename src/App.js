import "./App.css";
import { useSelector } from "react-redux";
import axios from "./API/Api";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";
import MoviePage from "./components/MoviePage/MoviePage";
function App() {
  const Config = useSelector((state) => state.Config.value);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Router>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route exact path="/" element={<MoviesGrid search={search} />} />
          <Route exact path="/movie/:id" element={<MoviePage />} />
          <Route path="*" element={<div>Missing</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
