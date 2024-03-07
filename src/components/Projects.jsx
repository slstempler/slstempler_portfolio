import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHandPointUp } from "react-icons/fa";

export function Projects({content = 'landing', setActiveProject}) {
    
    const navigate = useNavigate();
    
    const activeStyles = () => {
        const active = document.getElementsByClassName('active-project');
        active.length && active[0].classList.toggle('active-project');
        if(content !== 'landing' && content !== 'contact') {
            document.getElementById(content).classList.toggle('active-project');
        }
    }

    useEffect(activeStyles, [content])

    return (
        <div id="projects-container">
            <h2 id="projects-header">Projects & Works</h2>
            <hr/>
            <div id="reddit-container">
                <h3>Aki Technologies - Interaction Designer & Developer</h3>
    
                <button id="aki-tyson" className="projects-project" aria-label="Aki-Tyson Project Active Focus"
                    onClick={(e) => {
                        setActiveProject('aki-tyson');
                        navigate("/projects/aki-tyson");
                    }}>
                    <p className="projects-title">NFL Postseason Dynamic: Tyson Foods</p>
                </button>
                <br/>
                <button id="aki-pebbles" className="projects-project" aria-label="Aki-Pebbles Project Active Focus"
                    onClick={(e) => {
                        setActiveProject('aki-pebbles');
                        navigate("/projects/aki-pebbles");
                    }}>
                    <p className="projects-title">Rich Media Gamified: Pebbles Waffles</p>
                </button>
                <hr/>
                <button id="moasis" className="projects-project" aria-label="Moasis Project Active Focus"
                    onClick={(e) => {
                        setActiveProject('moasis');
                        navigate("/projects/moasis");
                    }}>
                    <p className="projects-title">Moasis Global - Creative Specialist</p>
                    <i className="projects-description">Photoshop + Illustrator + Celtra</i>
                </button>
                <hr/>
                <button id="commarch" className="projects-project" aria-label="commARCH Project Active Focus"
                    onClick={(e) => {
                        setActiveProject('commarch');
                        navigate("/projects/commarch");
                    }}>
                    <p className="projects-title">commARCH Magazine - Head of Podcasts</p>
                    <i className="projects-description">Premiere + After Effects</i>
                </button>
                <hr/>
                {/* client projects section here?? */}
                <button id="trilogy-realty" className="projects-project" aria-label="Trilogy Realty Project Active Focus" 
                    onClick={(e) => {
                        setActiveProject('trilogy-realty');
                        navigate("/projects/trilogy-realty");
                    }}>
                    <p className="projects-title">Trilogy Realty Group</p>
                    <i className="projects-description">Brand Identity + Logo Design</i>
                </button>
                <hr/>
                <button id="reddit" className="projects-project" aria-label="RE:ddit Project Active Focus"
                        onClick={(e) => {
                            setActiveProject('reddit');
                            navigate("/projects/reddit");
                        }}>
                        <IconContext.Provider value={{size: "1.5em", className: "tutorial-animation"}}>
                            <FaHandPointUp id="tutorial-animation-pointer"/>
                        </IconContext.Provider>
                        <p className="projects-title">RE:ddit - a Reddit Client</p>
                        <i className="projects-description" >React + Redux + CSS</i>
                    </button>
                </div>
                <hr/>
            
            <button id="portfolio-site" className="projects-project" aria-label="Portfolio Project Active Focus" 
                onClick={(e) => {
                    setActiveProject('portfolio-site');
                    navigate("/projects/portfolio-site");
                }}>
                <p className="projects-title">This Website</p>
                <i className="projects-description">React + CSS</i>
            </button>
        </div>
    )
}