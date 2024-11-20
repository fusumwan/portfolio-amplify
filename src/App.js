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
import DevopsProjects from './components/DevopsProjects/DevopsProjects';
import VueJSProjects from './components/VueJSProjects/VueJSProjects';
import CSharpProjects from './components/CSharpProjects/CSharpProjects';
import CPlusPlusProjects from './components/CPlusPlusProjects/CPlusPlusProjects';
import NodeJSProjects from './components/NodeJSProjects/NodeJSProjects';
import DataScienceProjects from './components/DataScienceProjects/DataScienceProjects';

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [showBgVideo, setShowBgVideo] = useState(false);
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [showReactJSProjects, setShowReactJSProjects] = useState(false);
  const [showJavaProjects, setShowJavaProjects] = useState(false);

  const [showAIProjects, setShowAIProjects] = useState(false);
  const [showDevopsProjects, setShowDevopsProjects] = useState(false);
  const [showVueJSProjects, setShowVueJSProjects] = useState(false);
  const [showCSharpProjects, setShowCSharpProjects] = useState(false);
  const [showCPlusPlusProjects, setShowCPlusPlusProjects] = useState(false);
  const [showNodeJSProjects,setShowNodeJSProjects] = useState(false);
  const [showDataScienceProjects,setShowDataScienceProjects] = useState(false);
  const toggleHome = () => {
    setShowHome(true)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleAbout = () => {
    setShowHome(false)
    setShowAbout(true)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleContact = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(true)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleExperience = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(true)
    setShowContact(false)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleBgVideo = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(true); // Explicitly set to true
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleLoadingAnimation = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(true); // Explicitly set to true
    setShowReactJSProjects(false); // Ensure the other component is hidden
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleReactJSProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(true);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  
  const toggleJavaProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(true);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleAIProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(true);
    setShowDevopsProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleDevopsProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(true);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  };

  const toggleVueJSProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(true);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  }

  const toggleCSharpProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(true);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  }

  const toggleCPlusPlusProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(true);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(false);
  }

  const toggleNodeJSProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(true);
    setShowDataScienceProjects(false);
  }

  const toggleDataScienceProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowDevopsProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
    setShowDataScienceProjects(true);
  }

  const toggleOnload = () => {
    if (window.innerWidth > 700) {
      document.querySelector(".nav-bar").classList.add("open");
    }
  };

  useEffect(() => {
    toggleHome();
    toggleOnload();
    const handleNavBarToggle = (e) => {
      const navBar = document.querySelector(".nav-bar");
      const isOutsideNavBar = !e.target.closest(".nav-bar");
      const isCloseButton = e.target.closest(".btn.close");
      const isToggleButton = e.target.closest(".open");
    
      if (isToggleButton && !navBar.classList.contains("open")) {
        navBar.classList.add("open");
      } else if (isOutsideNavBar || isCloseButton) {
        navBar.classList.remove("open");
      }
    };
    document.addEventListener("click", handleNavBarToggle);
    return () => {
      document.removeEventListener("click", handleNavBarToggle);

    };
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {showHome&&<Home />}
        {showAbout&&<About />}
        {showExperience&&<Experience />}
        {showContact&&<Contact />}
        {showBgVideo && <BgVideo />}
        {showLoadingAnimation && <LoadingAnimation />}
        {showReactJSProjects && <ReactJSProjects 
          onShowBgVideo={toggleBgVideo} 
          onShowLoadingAnimation={toggleLoadingAnimation} 
        />}
        {showJavaProjects && <JavaProjects></JavaProjects>}
        {showAIProjects && <AIProjects></AIProjects>}
        {showDevopsProjects && <DevopsProjects></DevopsProjects>}
        {showVueJSProjects && <VueJSProjects></VueJSProjects>}
        {showCSharpProjects && <CSharpProjects></CSharpProjects>}
        {showCPlusPlusProjects && <CPlusPlusProjects></CPlusPlusProjects>}
        {showNodeJSProjects && <NodeJSProjects></NodeJSProjects>}
        {showDataScienceProjects && <DataScienceProjects></DataScienceProjects>}
        <SideNav
          toggleHome={toggleHome}
          toggleAbout={toggleAbout}
          toggleExperience={toggleExperience}
          toggleContact={toggleContact}
          toggleReactJSProjects={toggleReactJSProjects}
          toggleJavaProjects={toggleJavaProjects}
          toggleAIProjects={toggleAIProjects}
          toggleDevopsProjects={toggleDevopsProjects}
          toggleVueJSProjects={toggleVueJSProjects}
          toggleCSharpProjects={toggleCSharpProjects}
          toggleCPlusPlusProjects={toggleCPlusPlusProjects}
          toggleNodeJSProjects={toggleNodeJSProjects}
          toggleDataScienceProjects={toggleDataScienceProjects}
        />
      </header>
    </div>
  );
}

export default App;
