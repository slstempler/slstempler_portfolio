import React, { useState, useEffect } from "react";
import { Content } from "../components/Content";
import { Projects } from "../components/Projects";
import { BsGithub, BsLinkedin, BsBehance, BsSun, BsMoon } from 'react-icons/bs';
import { IconContext } from 'react-icons'
import { useNavigate, useParams } from "react-router-dom";
import '../index.css'

export function debounce(fn, ms) {
    let timer;
    return () => { 
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    }
  }

export default function Root({routeContent = 'landing'}) {
    const [activeProject, setActiveProject] = useState('landing');
    const [darkMode, setDarkMode] = useState(true);

    const navigate = useNavigate();
    const params = useParams();

    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);

        if(darkMode){
            document.getElementById('dark-mode-icon').style.display = 'none';
            document.getElementById('light-mode-icon').style.display = 'initial';
            document.querySelector("body").classList.toggle('light-mode');
        }
        else if(!darkMode){
            document.getElementById('dark-mode-icon').style.display = 'initial';
            document.getElementById('light-mode-icon').style.display = 'none';
            document.querySelector("body").classList.toggle('light-mode');
        }
        else {
            console.log(`wha da hell...`)
        }
    }

    // helper function for resizeWindow()
    const handleResize = () => {
        document.body.style.height = window.innerHeight + 'px';
        document.querySelector('#root').style.height = window.innerHeight + 'px';
    }

    // ensures window fits within viewport even considering nonstandard mobile browser layouts
    const resizeWindow = () => {
        const debouncedResize = debounce(handleResize, 1000);
        
        window.addEventListener('resize', debouncedResize);
        return () => window.removeEventListener('resize', debouncedResize);
    }

    // Pulls content for Contact page if navigated to via URl
    useEffect(() => {
            routeContent !== 'landing' && setActiveProject(routeContent);
        }, [routeContent]);

    useEffect(resizeWindow, []);

    // Pulls content from URL params if those exist
    useEffect(() => {
            params.content && setActiveProject(params.content);
        }, [params]);

    return (
        <>
            <nav>
                <button id="nav-logo" aria-label="Home" onClick={(e) => {
                    setActiveProject("landing");
                    navigate("/");
                 }}>Sean Stempler</button>
                <div className="nav-tray">
                    {/* <button className="nav-button" onClick={(e) => setActiveProject('landing')}>About</button>
                    <button className="nav-button" onClick={(e) => setActiveProject('contact')}>Contact</button> */}
                    <button className="nav-button" onClick={(e) => {
                            setActiveProject('landing');
                            navigate("/");
                    }}>About</button>
                    <button className="nav-button" 
                        onClick={(e) => {
                            setActiveProject('contact');
                            navigate("/contact");
                    }}>Contact</button>
                </div>
            </nav>
            <div id="main-container">
                <Content content={activeProject || routeContent} darkMode={darkMode}/>
                <Projects content={activeProject} setActiveProject={setActiveProject} />
            </div>
            {/* <div id="testing-routes">
                <Outlet />
            </div> */}
            {/* <div className="icon-spacer"><p>h</p><p>h</p><p>h</p></div> */}
            <footer>
                <div id="mode-tray">
                    <IconContext.Provider value={{size: "1.5em"}}>
                        <BsSun id="light-mode-icon" title="Toggle Dark Mode" onClick={toggleMode}/>
                        <BsMoon id="dark-mode-icon" title="Toggle Dark Mode" onClick={toggleMode}/>
                    </IconContext.Provider>
                    
                </div>
                <div id="icons-tray">
                    <IconContext.Provider value={{size: "1.5em", className: "social-icons"}}>
                        <a href="https://github.com/slstempler" target="_blank" rel="noreferrer" aria-label="GitHub Profile"><BsGithub/></a>
                        <a href="https://www.linkedin.com/in/slstempler/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile"><BsLinkedin/></a>
                        <a href="https://www.behance.net/slstempler" target="_blank" rel="noreferrer" aria-label="Behance Profile"><BsBehance/></a>
                    </IconContext.Provider>
                </div>
            </footer>
        </>
    )
}