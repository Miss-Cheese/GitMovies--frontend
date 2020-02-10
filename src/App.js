import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
