import React, { useState, useEffect } from "react";
import { Content } from "../components/Content";
import { Projects } from "../components/Projects";
import { BsGithub, BsLinkedin, BsBehance, BsSun, BsMoon } from 'react-icons/bs';
import { IconContext } from 'react-icons'
import { Outlet } from "react-router-dom";
import '../index.css'
import BGRasset from "../assets/Asset_2x1000.png";

function debounce(fn, ms) {
    let timer;
    return () => { 
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    }
  }

export default function Root() {
    const [activeProject, setActiveProject] = useState('landing');
    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);

        if(darkMode){
            document.getElementById('light-mode-icon').style.display = 'none';
            document.getElementById('dark-mode-icon').style.display = 'initial';
            document.querySelector("body").classList.toggle('light-mode');
        }
        else if(!darkMode){
            document.getElementById('light-mode-icon').style.display = 'initial';
            document.getElementById('dark-mode-icon').style.display = 'none';
            document.querySelector("body").classList.toggle('light-mode');
        }
        else {
            console.log(`wha da hell...`)
        }
    }

    const handleResize = () => {
        document.body.style.height = window.innerHeight + 'px';
        document.querySelector('#root').style.height = window.innerHeight + 'px';
    }

    const resizeWindow = () => {
        const debouncedResize = debounce(handleResize, 1000);
        
        window.addEventListener('resize', debouncedResize);
        return () => window.removeEventListener('resize', debouncedResize);
    }



    useEffect(resizeWindow, []);

    return (
        <>
            <nav>
                <h1 onClick={(e) => setActiveProject('landing')}>Sean Stempler</h1>
                <div className="nav-tray">
                    <button className="nav-button" onClick={(e) => setActiveProject('landing')}>About</button>
                    <button className="nav-button" onClick={(e) => setActiveProject('contact')}>Contact</button>
                </div>
            </nav>
            <div id="main-container">
                <Content content={activeProject} darkMode={darkMode}/>
                <Projects content={activeProject} setActiveProject={setActiveProject} />
            </div>
            <div id="testing-routes">
                <Outlet />
            </div>
            {/* <div className="icon-spacer"><p>h</p><p>h</p><p>h</p></div> */}
            <footer>
                <div id="mode-tray">
                    <IconContext.Provider value={{size: "1.5em"}}>
                        <BsSun id="light-mode-icon" onClick={toggleMode}/>
                        <BsMoon id="dark-mode-icon" onClick={toggleMode}/>
                    </IconContext.Provider>
                    
                </div>
                <div id="icons-tray">
                    <IconContext.Provider value={{size: "1.5em", className: "social-icons"}}>
                        <a href="https://github.com/slstempler" target="_blank" rel="noreferrer"><BsGithub/></a>
                        <a href="https://www.linkedin.com/in/slstempler/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                        <a href="https://www.behance.net/slstempler" target="_blank" rel="noreferrer"><BsBehance/></a>
                    </IconContext.Provider>
                </div>
            </footer>
       
            {/* <div className="bgr-animated"></div>
            <div className="bgr-animated two"></div>
            <div className="bgr-animated three"></div>
            <div className="bgr-animated four"></div> */}
            <img className="bgr-animated" src={BGRasset} alt="tiled background"></img>
            {/* <div className="bgr-animated"></div> */}
        </>
    )
}