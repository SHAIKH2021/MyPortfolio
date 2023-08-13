import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Conatct from "./components/Contact";

function App() {
  return (
    <>
      <Navbar/>
     <main className="main">
     <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Conatct/>
     </main>
    </>
  );
}

export default App;
