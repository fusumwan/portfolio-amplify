import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

import BgVideo from './components/BgVideo/BgVideo';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import SideNav from './components/SideNav/SideNav';
import ReactJSProjects from './components/ReactJSProjects/ReactJSProjects';
import JavaProjects from './components/JavaProjects/JavaProjects';
import AIProjects from './components/AIProjects/AIProjects';
import PythonProjects from './components/PythonProjects/PythonProjects';
import VueJSProjects from './components/VueJSProjects/VueJSProjects';
import CSharpProjects from './components/CSharpProjects/CSharpProjects';
import CPlusPlusProjects from './components/CPlusPlusProjects/CPlusPlusProjects';
import NodeJSProjects from './components/NodeJSProjects/NodeJSProjects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
