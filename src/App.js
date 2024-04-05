// Example of App.js
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Other components */}
    </Router>
  );
}

export default App;
