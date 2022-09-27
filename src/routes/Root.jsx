import React, { useState } from "react";
import { Content } from "../components/Content";
import { Projects } from "../components/Projects";
import { BsGithub, BsLinkedin, BsBehance } from 'react-icons/bs';
import { IconContext } from 'react-icons'
import { Outlet } from "react-router-dom";
import '../index.css'

export default function Root() {
    const [activeProject, setActiveProject] = useState('landing');

    return (
        <>
            <nav>
                <h1 onClick={(e) => setActiveProject('landing')}>Sean Stempler</h1>
                <div className="nav-tray">
                    <button className="nav-button" onClick={(e) => setActiveProject('landing')}>About</button>
                    {/* <span>|</span> */}
                    <button className="nav-button">Contact</button>
                </div>
            </nav>
            <Content content={activeProject} />
            <Projects content={activeProject} setActiveProject={setActiveProject} />
            <div id="testing-routes">
                <Outlet />
            </div>
            {/* <div className="icon-spacer"><p>h</p><p>h</p><p>h</p></div> */}
            <div className="icons-tray">
                <IconContext.Provider value={{size: "1.5em", className: "social-icons"}}>
                    <BsGithub/>
                    <BsLinkedin/>
                    <BsBehance/>
                </IconContext.Provider>
            </div>
            <div className="bgr-animated"></div>
            <div className="bgr-animated two"></div>
            <div className="bgr-animated three"></div>
            <div className="bgr-animated four"></div>
        </>
    )
}