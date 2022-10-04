import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            <button id="reddit" className="projects-project" aria-label="RE:ddit Project Active Focus"
                onClick={(e) => {
                    setActiveProject('reddit');
                    navigate("/projects/reddit");
                }}>
                <p className="projects-title">RE:ddit - a Reddit Client</p>
                <i className="projects-description" >React + Redux + CSS</i>
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
            <button id="moasis" className="projects-project" aria-label="Moasis Project Active Focus"
                onClick={(e) => {
                    setActiveProject('moasis');
                    navigate("/projects/moasis");
                }}>
                <p className="projects-title">Moasis Global - Creative Specialist</p>
                <i className="projects-description">Photoshop + Illustrator + Celtra</i>
            </button>
            <hr/>
            <button id="stempler-realty" className="projects-project" aria-label="Stempler Realty Project Active Focus" 
                onClick={(e) => {
                    setActiveProject('stempler-realty');
                    navigate("/projects/stempler-realty");
                }}>
                <p className="projects-title">Stempler Realty Group</p>
                <i className="projects-description">Brand Identity + Logo Design</i>
            </button>
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