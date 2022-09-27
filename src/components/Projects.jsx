import React, { useEffect } from "react";

export function Projects({content = 'landing', setActiveProject}) {
    
    const activeStyles = () => {
        const active = document.getElementsByClassName('active-project');
        active.length && active[0].classList.toggle('active-project');
        if(content !== 'landing') {
            document.getElementById(content).classList.toggle('active-project');
        }
    }

    useEffect(activeStyles, [content])

    return (
        <div className="projects-container">
            <h4>Projects & Works</h4>
            <div id="reddit">
                <p onClick={(e) => setActiveProject('reddit')}>RE:ddit - a Reddit Client</p>
                <i>React + Redux + CSS</i>
            </div>
            <div id="stempler-realty">
                <p id="stempler-realty" onClick={(e) => setActiveProject('stempler-realty')}>Stempler Realty Group</p>
                <i>Brand Identity + Logo Design</i>
            </div>
            
            <p>This Website</p>
            <i>React + CSS</i>
        </div>
    )
}