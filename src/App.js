import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./header/Header";
import Home from "./section/Home";
import About from "./section/About";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
    </React.Fragment>
  );
}

export default App;
