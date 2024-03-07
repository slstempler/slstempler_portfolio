import React, { useEffect, useState } from "react";
// import redditScreenshot from "../assets/screenshot16958.png";
// import stemplerRealtyScreenshot from "../assets/main-darkx1000.png";
// import stemplerRealtyLight from "../assets/main-lightx1000.png"
// import moasisScreenshot from "../assets/greenland-sample-alpha.png"
import { IconContext } from "react-icons";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { FaChevronCircleDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { debounce } from "../routes/Root.jsx";


const redditScreenshot = 'https://res.cloudinary.com/ddq3vhxki/image/upload/f_auto/v1664901406/portfolio-2022/screenshot16958_nyq4tx.png';
const trilogyRealtyLight = 'https://res.cloudinary.com/ddq3vhxki/image/upload/v1709849242/portfolio-2022/black-bg-1000_v2gozd.png';
const trilogyRealtyScreenshot = 'https://res.cloudinary.com/ddq3vhxki/image/upload/v1709849243/portfolio-2022/white-bg-1000_pev5ee.png';
const moasisScreenshot = 'https://res.cloudinary.com/ddq3vhxki/image/upload/f_auto/v1664901405/portfolio-2022/greenland-sample-alpha_rlzlxd.png';
const tysonScreenshot = `https://res.cloudinary.com/ddq3vhxki/image/upload/v1709847258/portfolio-2022/tyson-screens_zcimy4.png`
const pebblesScreenshot = `https://res.cloudinary.com/ddq3vhxki/image/upload/v1709848692/portfolio-2022/pebbles-screens_jjhjq5.png`

export function Content({content, darkMode}) {

    const params = useParams();
    const [isScrollable, setIsScrollable] = useState(false);

    const animateContent = () => {
        const contentWrapper = document.getElementById('content-wrapper');

        // reset scroll
        contentWrapper.scrollTop = 0;

        // toggle animations to relevant elements
        const contentTargets = document.getElementsByClassName('content-target');
        for(let element of contentTargets) {
            element.classList.add('animate');
            setTimeout(function(){
                element.classList.remove('animate');
            }, 500)
        }
    }

    const checkScroll = () => {
        const contentContainer = document.getElementById('content-wrapper')

        if(!contentContainer) return -1;
        if (contentContainer.scrollHeight > contentContainer.clientHeight) {
            // console.log(`well... whaddya know... it can scroll...`);
            setIsScrollable(true);
        }
        else {
            setIsScrollable(false);
        }
    }

    const scrollIndicator = () => {
        const contentWrapper = document.getElementById('content-wrapper');
        
        // Event handler for scroll
        const handleScroll = debounce(() => {
            const scrollIndicator = document.getElementById('scroll-indicator');
            // console.log('we\'re scrolling??')
            if(contentWrapper.scrollTop !== 0) {
                    scrollIndicator && scrollIndicator.classList.add('fadeout');

                    setTimeout(() => {
                        if(scrollIndicator) scrollIndicator.style.display = 'none'
                    }, 3000);
                }
        }, 100);


        contentWrapper.addEventListener('scroll', handleScroll);
        return () => {contentWrapper.removeEventListener('scroll', handleScroll)}
    }

    useEffect(checkScroll, [content, params]);
    useEffect(scrollIndicator, [content, params]);
    useEffect(animateContent, [content]);

    return (
        <div className="content-container styled-scrollbar" id="content-container">
            <div id="content-wrapper">
                {(content === 'landing' || params === 'landing' || content === undefined) &&
                    <>
                        <h2 className="content-target content-title">Sean Stempler</h2>
                        <p className="content-target">Hi! I'm Sean, and I work to transform creative visions into creative realities. My varied background reaches everything from video editing to web design and everything in between, so I have the toolkit to tackle the needs of just about any project.</p>
                    </>
                }
                {(content === 'aki-tyson' || params === 'aki-tyson') &&
                    <>
                        <h2 className="content-target content-title">Aki Technologies - Tyson Foods</h2>
                        <a href="https://creative.akitechnologies.net/preview/a8ae4fd1#overrides.deviceInfo.deviceType=Phone&ruleBasedFeedRadio%5Be07be279%5D=actual&placementWidth=390&placementHeight=auto" target="_blank" rel="noreferrer" className="hero-anchor">
                            <img className="content-image content-target" src={tysonScreenshot} alt="project screenshot">
                        </img></a>
                        <p className="content-target" id="aki-tyson-description">A premier retailer specializing in denim engaged my team to build a dynamic rich media unit capable of offering live NFL scores alongside a carousel of product shots and an expandable store locator. With data from sports-focused API, I developed a JavaScript-based core for the unit which delivered live game information to any user. This JS script assisted in state management and animation, and enabled the unit to be handled fully dynamically even across a constantly variable schedule for the NFL season, and across both English and Spanish variants; even while a game is offline, the next game’s time is displayed. Along with this functionality, the unit was designed to accommodate the other rich media needs mentioned above alongside the scoreboard, showcasing the denim products and tying their brand identity to the NFL. With their interest now primed, users can - without leaving the unit - open the animated store locator to navigate towards the retail location nearest them.</p>
                    </>
                }
                {(content === 'aki-pebbles' || params === 'aki-pebbles') &&
                    <>
                        <h2 className="content-target content-title">Aki Technologies - Pebbles Waffles</h2>
                        <a href="https://creative.akitechnologies.net/preview/47cb3ee0#overrides.deviceInfo.deviceType=Phone&placementWidth=390&placementHeight=auto" target="_blank" rel="noreferrer" className="hero-anchor">
                            <img className="content-image content-target" src={pebblesScreenshot} alt="project screenshot">
                        </img></a>
                        <p className="content-target">A major CPG brand with a line of cartoon-licensed waffles sought a fresh and exciting ad creative to highlight their two major lines of offerings. To emphasize their playful and family-oriented brand identity and highlight the core selling point of their waffles, I developed a catch-falling-items game. This game not only aids user engagement but offers a brand-building twist: users must select which of the two core product lines they wish to use in the game. This allows a bit of personal expression for users, adds to replayability - the visuals change depending on the product line chosen - and helps to reinforce the value proposition of the waffles by placing focus on the density of tasty cereal flakes packed into each pastry.</p>
                    </>
                }
                {(content === 'reddit' || params === 'reddit') && 
                    <>
                        <h2 className="content-target content-title">RE:ddit</h2>
                        <a href="https://re-ddit.netlify.app/" target="_blank" rel="noreferrer" className="hero-anchor">
                            <img className="content-image content-target" src={redditScreenshot} alt="project screenshot"></img></a>
                        <p className="content-target">Built as part of coursework for the Codecademy Front End Development syllabus, RE:ddit is a lightweight Reddit client built to offer an alternative UI. RE:ddit utilizes React as its core framework along with SPA structure built upon React Router, and expands upon this base with Redux to manage state.</p>
                        <IconContext.Provider value={{size: '1.5em', className: 'content-target'}} >
                            <a href="https://github.com/slstempler/reddit_react-redux" target="blank" rel="noreferrer" className="repo-link" aria-label="RE:ddit Github Repo"><BsGithub /></a>
                        </IconContext.Provider>
                            
                    </>
                }
                {(content === 'commarch' || params === 'commarch') &&
                    <>
                        <h2 className="content-target content-title">commARCH</h2>
                        <div className="yt-container content-target">
                            <LiteYouTubeEmbed 
                                id="kd-xiELXTj0"
                                title="YouTube Video Player - commARCH"
                            />
                        </div>
                        
                        {/* <iframe width="320" height="180" src="https://www.youtube.com/embed/kd-xiELXTj0" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                        className="content-target"></iframe> */}
                        <p className="content-target">Edited live and virtual podcast footage, wrote scripts and performed voiceover for introduction and outtro segments.
                        Created graphics and animations for podcast bumpers and other video needs.</p>
                        <IconContext.Provider value={{size: '1.5em', className: 'content-target'}} >
                            <a href="https://www.youtube.com/channel/UCsWz2j4v8NV9N_RURRfgsQQ" target="blank" rel="noreferrer" className="repo-link" aria-label="commARCH YouTube Channel"><BsYoutube /></a>
                        </IconContext.Provider>
                    </>
                }
                {(content === 'trilogy-realty' || params === 'trilogy-realty') &&
                    <>
                        <h2 className="content-target content-title">Trilogy Realty Group</h2>
                        <a href="https://www.beangroup.com/agents/1186124/Lisa+Stempler" target="_blank" rel="noreferrer" className="hero-anchor">
                            <img className="content-image content-target" src={darkMode ? trilogyRealtyScreenshot : trilogyRealtyLight} alt="project screenshot" height="150">
                        </img></a> 
                        <p className="content-target">Design work including brand identity and logo design for a local New England realty team. Worked alongside clients to develop brand from scratch and helped produce assets for use on both digital applications like social media and physical applications like open house signs and business cards.</p>
                    </>
                }
                {(content === 'moasis' || params === 'moasis') &&
                    <>
                        <h2 className="content-target content-title">Moasis Global</h2>
                        <a href="https://moasis.com/" target="_blank" rel="noreferrer" className="hero-anchor">
                            <img className="content-image content-target" src={moasisScreenshot} alt="project screenshot">
                        </img></a>
                        <p className="content-target">Design work with a variety of clients working with a mobile advertising geolocation services provider.
                            Built interactive ad creative packages including Rich Media and video for a wide variety of formats targeted at both mobile and tablet. Clients ranged
                            from entertainment industry to state and local governments, political campaigns, industry conferences and more.</p>
                    </>
                }
                {(content === 'portfolio-site' || params === 'portfolio-site') &&
                    <>
                        <h2 className="content-target content-title">Portfolio Site</h2>
                        <p className="content-target">Originally developed as part of a Codecademy Front End Development course, this site itself was built using React and vanilla CSS utilizing
                        a mobile-first paradigm and was designed and prototyped with Figma.
                        <br /><br />
                        Prior versions can be found below:</p>
                        <hr />                    
                        <IconContext.Provider value={{size: '1.2em', className: 'content-target content-inline'}} >
                            <a href="https://slstempler.github.io/slstempler_portfolio-v1/" target="blank" rel="noreferrer" className="repo-link content-inline content-target" aria-label="Portfolio Version 1 Repo">
                                <span className="content-inline content-target">Portfolio Version 1</span> <BsGithub />
                            </a>
                        </IconContext.Provider>
                    </>
                }
                {(content === 'contact' || params === 'contact') && 
                    <>
                        <h2 className="content-target content-title">Contact Info</h2>
                        <p className="content-target">Feel free to reach out to discuss potential projects or roles that I may be a good fit for!</p><br />
                        <a href="mailto:slstempler@gmail.com" className="content-target">email: slstempler@gmail.com</a>
                        <span className="content-target">Skype:  sean.stempler</span>
                        <a href="https://linkedin.com/in/slstempler" className="content-target">LinkedIn Profile</a>
                    </>
                }
            </div>
            {isScrollable &&
                <>
                    <IconContext.Provider value={{size: '1.2em', className: 'content-inline scroll-indicator'}}>
                        <FaChevronCircleDown id="scroll-indicator" />
                    </IconContext.Provider>
                </>
            }
    </div>
    )
}