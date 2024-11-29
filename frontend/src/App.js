import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CataloguePage from "./pages/CataloguePage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
return (
    <Router>
        <Routes></Routes>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CataloguePage />} />
      </Routes>
    </Router>
  );
}

export default App;
