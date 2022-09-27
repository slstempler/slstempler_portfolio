import React, { useEffect } from "react";
import redditScreenshot from "../assets/screenshot16958.png";

export function Content({content}) {

    const animateContent = () => {
        // toggle animations to relevant elements
        const contentTargets = document.getElementsByClassName('content-target');
        for(let element of contentTargets) {
            element.classList.add('animate');
            setTimeout(function(){
                element.classList.remove('animate');
            }, 500)
        }
    }

    useEffect(animateContent, [content]);

    return (
        <div className="content-container">
            {content === 'landing' &&
                <>
                    <h2 className="content-target">Sean Stempler</h2>
                    <p className="content-target">Hi! I'm Sean, and I work to transform creative visions into creative realities. My varied background reaches everything from video editing to web design and everything in between, so I have the toolkit to tackle the needs of just about any project.</p>
                </>
            }
            {content === 'reddit' && 
            <>
                <h3 className="content-target">RE:ddit</h3>
                <a href="https://re-ddit.netlify.app/" target="_blank" rel="noreferrer"><img className="content-image content-target" src={redditScreenshot} alt="project screenshot"></img></a>
                <p className="content-target">Built as part of coursework for the Codecademy Front End Development syllabus, RE:ddit is a lightweight Reddit client built to offer an alternative UI. RE:ddit utilizes React as its core framework along with SPA structure built upon React Router, and expands upon this base with Redux to manage state.</p>
            </>}
        </div>
    )
}