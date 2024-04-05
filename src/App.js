// Example of App.js
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";
import Questions from "./Components/Questions";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Questions />
      <Footer />
    </Router>
  );
}

export default App;
