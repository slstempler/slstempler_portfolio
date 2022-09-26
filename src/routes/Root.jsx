import React from "react";
import { Content } from "../components/Content";
import { BsGithub, BsLinkedin, BsBehance } from 'react-icons/bs';
import { IconContext } from 'react-icons'
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <h1>Sean Stempler</h1>
            <h2>About | Contact</h2>
            <h2>Projects</h2>
            <Content/>
            <div id="testing-routes">
                <Outlet />
            </div>
            <div className="icons-tray">
                <IconContext.Provider value={{size: "1.5em", className: "social-icons"}}>
                    <BsGithub/>
                    <BsLinkedin/>
                    <BsBehance/>
                </IconContext.Provider>
            </div>
        </>
    )
}