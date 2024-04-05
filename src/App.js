// Example of App.js
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
