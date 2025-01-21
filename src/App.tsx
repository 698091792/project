import React from "react";

import Mission from "./components/Mission";
import './App.css'
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 app ">
      <Home />
      <Mission />
      <About />

      <Team />
      <Gallery />
    </div>
  );
}

export default App;
