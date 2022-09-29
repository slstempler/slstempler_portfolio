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
            <h3>Projects & Works</h3>
            <div id="reddit">
                <p onClick={(e) => {
                    setActiveProject('reddit');
                    navigate("/projects/reddit");
                }}>RE:ddit - a Reddit Client</p>
                <i>React + Redux + CSS</i>
            </div>
            <hr/>
            <div id="commarch">
                <p onClick={(e) => {
                    setActiveProject('commarch');
                    navigate("/projects/commarch");
                }}>commARCH Magazine - Head of Podcasts</p>
                <i>Premiere + After Effects</i>
            </div>
            <hr/>
            <div id="moasis">
                <p onClick={(e) => {
                    setActiveProject('moasis');
                    navigate("/projects/moasis");
                }}>Moasis Global - Creative Specialist</p>
                <i>Photoshop + Illustrator + Celtra</i>
            </div>
            <hr/>
            <div id="stempler-realty">
                <p id="stempler-realty" onClick={(e) => {
                    setActiveProject('stempler-realty');
                    navigate("/projects/stempler-realty");
                }}>Stempler Realty Group</p>
                <i>Brand Identity + Logo Design</i>
            </div>
            <hr/>
            <div id="portfolio-site" onClick={(e) => {
                    setActiveProject('portfolio-site');
                    navigate("/projects/portfolio-site");
                }}><p>This Website</p>
                <i>React + CSS</i>
            </div>
        </div>
    )
}