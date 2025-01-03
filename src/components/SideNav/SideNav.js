import React from 'react';
import './SideNav.css'; // Ensure this CSS file is correctly imported

const SideNav = ({ 
  toggleHome,
  toggleAbout,
  toggleExperience,
  toggleContact,
  toggleReactJSProjects,
  toggleJavaProjects,
  toggleAIProjects,
  toggleDevopsProjects,
  toggleVueJSProjects,
  toggleCSharpProjects,
  toggleCPlusPlusProjects,
  toggleNodeJSProjects,
  toggleDataScienceProjects }) => {
  return (
    <div className="center">
      <button type="button" className="btn open">
        <span className="material-icons-round"> menu </span>
      </button>
      <div className="nav-bar">
          <div className="head">
            <div className="logo">PORTFOLIO</div>
            <button type="button" className="btn close">
              <span className="material-icons-round"> close </span>
            </button>
          </div>

          <div className="list">
            <div className="list-title">RESUME</div>
            <div className="items">
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleHome(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
                <span className="material-icons-round"> home </span>
                Home
              </a>

              <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleAbout(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
                <span className="material-icons-round"> info </span>
                About
              </a>

              <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleExperience(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
                <span className="material-icons-round"> timeline </span>
                Experience
              </a>

              <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleContact(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
                <span className="material-icons-round"> mail_outline </span>
                Contact
              </a>
            </div>
          </div>

        <div className="list">
          <div className="list-title">CONTEXT</div>
          <div className="items">
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleJavaProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> coffee </span>
              Java Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleCPlusPlusProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> memory </span>
              C++ Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleAIProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> smart_toy </span>
              AI & Python Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDevopsProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> science </span>
              Devops Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleReactJSProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> widgets </span>
              ReactJS Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleVueJSProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> spa </span>
              VueJS Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleCSharpProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> web </span>
              Asp.net MVC / AI Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleNodeJSProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> router </span>
              NodeJS Projects
            </a>
            <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDataScienceProjects(); }} href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
              <span className="material-icons-round"> router </span>
              DataScience Projects
            </a>
          </div>
        </div>
        
        <div className="list">
          <a href="https://main.dvnq4p5zmaq26.amplifyapp.com/" className="item">
          {/* "Logout" Button: 
          This section creates a logout button styled as a list item in the navigation menu.
          It uses an anchor tag (<a>) for the button, which can be linked to the logout functionality.
          The button is visually represented by a material icon and the text 'Logout'.
          Note: The actual logout functionality (like clearing user session, redirecting to login page, etc.)
          should be implemented in the onClick event handler of this anchor tag. 
            <span className="material-icons-round">logout</span>
            Logout
          
          */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
