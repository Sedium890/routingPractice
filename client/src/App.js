import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import HomePage from "./components/HomePage";
import NumberPage from "./components/NumberPage";
import WordPage from "./components/WordPage";
import StyledWordPage from "./components/StyledWordPage";
import "./App.css";

const NumberOrWordRoute = () => {
  const { numberOrWord } = useParams();
  if (!isNaN(+numberOrWord)) {
    return <NumberPage />;
  } else {
    return <WordPage />;
  }
};

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/:word/:textColor/:bgColor" element={<StyledWordPage />} />
          <Route path="/:numberOrWord" element={<NumberOrWordRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
