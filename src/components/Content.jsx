import React, { useEffect } from "react";
import redditScreenshot from "../assets/screenshot16958.png";
import stemplerRealtyScreenshot from "../assets/main-darkx1000.png";
import stemplerRealtyLight from "../assets/main-lightx1000.png"

export function Content({content, darkMode}) {

    const animateContent = () => {
        // reset scroll
        document.getElementById('content-container').scrollTop = 0;
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
        <div className="content-container" id="content-container">
            {(content === 'landing' || content === 'portfolio-site') &&
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
                </>
            }
            {content === 'stempler-realty' &&
                <>
                    <h3 className="content-target">Stempler Realty Group</h3>
                    <a href="https://www.beangroup.com/agents/1186124/Lisa+Stempler" target="_blank" rel="noreferrer">
                        <img className="content-image content-target" src={darkMode ? stemplerRealtyScreenshot : stemplerRealtyLight} alt="project screenshot" height="150">
                    </img></a> 
                    <p className="content-target">Design work including brand identity and logo design for a local New England realty team. Worked alongside clients to develop brand from scratch and helped produce assets for use on both digial applications like social media and physical applications like open house signs and business cards.</p>
                </>
            }
            {content === 'contact' && 
                <>
                    <h3 className="content-target">Contact Info</h3>
                    <p className="content-target">Feel free to reach out to discuss potential projects or roles that I may be a good fit for!</p>
                    <p>email: slstempler@gmail.com<br />Skype: sean.stempler</p>
                </>
            }
        </div>
    )
}