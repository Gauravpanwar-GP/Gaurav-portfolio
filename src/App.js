import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header/Header';
import Home from './section/Home';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
