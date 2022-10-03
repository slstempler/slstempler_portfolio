import React, { useEffect } from "react";
import redditScreenshot from "../assets/screenshot16958.png";
import stemplerRealtyScreenshot from "../assets/main-darkx1000.png";
import stemplerRealtyLight from "../assets/main-lightx1000.png"
import moasisScreenshot from "../assets/greenland-sample-alpha.png"
import { IconContext } from "react-icons";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { useParams } from "react-router-dom";

export function Content({content, darkMode}) {

    const params = useParams();

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
        <div className="content-container styled-scrollbar" id="content-container">
            {(content === 'landing' || params === 'landing' || content === undefined) &&
                <>
                    <h2 className="content-target">Sean Stempler</h2>
                    <p className="content-target">Hi! I'm Sean, and I work to transform creative visions into creative realities. My varied background reaches everything from video editing to web design and everything in between, so I have the toolkit to tackle the needs of just about any project.</p>
                </>
            }
            {(content === 'reddit' || params === 'reddit') && 
                <>
                    <h3 className="content-target">RE:ddit</h3>
                    <a href="https://re-ddit.netlify.app/" target="_blank" rel="noreferrer"><img className="content-image content-target" src={redditScreenshot} alt="project screenshot"></img></a>
                    <p className="content-target">Built as part of coursework for the Codecademy Front End Development syllabus, RE:ddit is a lightweight Reddit client built to offer an alternative UI. RE:ddit utilizes React as its core framework along with SPA structure built upon React Router, and expands upon this base with Redux to manage state.</p>
                    <IconContext.Provider value={{size: '1.5em', className: 'content-target'}} >
                        <a href="https://github.com/slstempler/reddit_react-redux" target="blank" rel="noreferrer" className="repo-link"><BsGithub /></a>
                    </IconContext.Provider>
                        
                </>
            }
            {(content === 'commarch' || params === 'commarch') &&
                <>
                    <h3 className="content-target">commARCH (Commerical Architecture)</h3>
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/kd-xiELXTj0" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                    className="content-target"></iframe>
                    <p className="content-target">Edited live and virtual podcast footage, wrote scripts and performed voiceover for introduction and outtro segments.
                    Created graphics and animations for podcast bumpers and other video needs.</p>
                    <IconContext.Provider value={{size: '1.5em', className: 'content-target'}} >
                        <a href="https://www.youtube.com/channel/UCsWz2j4v8NV9N_RURRfgsQQ" target="blank" rel="noreferrer" className="repo-link"><BsYoutube /></a>
                    </IconContext.Provider>
                </>
            }
            {(content === 'stempler-realty' || params === 'stempler-realty') &&
                <>
                    <h3 className="content-target">Stempler Realty Group</h3>
                    <a href="https://www.beangroup.com/agents/1186124/Lisa+Stempler" target="_blank" rel="noreferrer">
                        <img className="content-image content-target" src={darkMode ? stemplerRealtyScreenshot : stemplerRealtyLight} alt="project screenshot" height="150">
                    </img></a> 
                    <p className="content-target">Design work including brand identity and logo design for a local New England realty team. Worked alongside clients to develop brand from scratch and helped produce assets for use on both digial applications like social media and physical applications like open house signs and business cards.</p>
                </>
            }
            {(content === 'moasis' || params === 'moasis') &&
                <>
                    <h3 className="content-target">Moasis Global</h3>
                    <a href="https://moasis.com/" target="_blank" rel="noreferrer"><img className="content-image content-target"
                        src={moasisScreenshot} alt="project screenshot">
                    </img></a>
                    <p className="content-target">Design work with a variety of clients working with a mobile advertising geolocation services provider.
                        Built interactive ad creative packages including Rich Media and video for a wide variety of formats targeted at both mobile and tablet. Clients ranged
                        from entertainment industry to state and local governments, political campaigns, industry conferences and more.</p>
                </>
            }
            {(content === 'portfolio-site' || params === 'portfolio-site') &&
                <>
                    <h3 className="content-target">Portfolio Site</h3>
                    <p className="content-target">Originally developed as part of a Codecademy Front End Development course, this site itself was built using React and vanilla CSS utilizing
                    a mobile-first paradigm and was designed and prototyped with Figma.
                    <br /><br />
                    Prior versions can be found below:</p>
                    <hr />                    
                    <IconContext.Provider value={{size: '1.2em', className: 'content-target content-inline'}} >
                        <a href="https://slstempler.github.io/slstempler_portfolio-v1/" target="blank" rel="noreferrer" className="repo-link content-inline content-target">
                            <span className="content-inline content-target">Portfolio Version 1</span> <BsGithub />
                        </a>
                    </IconContext.Provider>
                </>
            }
            {(content === 'contact' || params === 'contact') && 
                <>
                    <h3 className="content-target">Contact Info</h3>
                    <p className="content-target">Feel free to reach out to discuss potential projects or roles that I may be a good fit for!</p>
                    <p className="content-target">email: slstempler@gmail.com<br />Skype: sean.stempler</p>
                </>
            }
        </div>
    )
}