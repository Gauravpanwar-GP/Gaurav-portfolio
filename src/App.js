import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./header/Header";
import Home from "./section/home/Home";
import About from "./section/about/About";
import Skills from "./section/skills/Skills";
import Projects from "./section/projects/Projects";
import Footer from "./footer/Footer";
import Contact from "./section/contact/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
