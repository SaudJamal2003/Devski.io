import React, {useEffect, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import CompleteProjectsCss from "../Css/Complete.module.css"
import Devski_Logo from '../Images/Devski_Logo.png';
import play from '../Images/PlayButton.png';
import strategyIcon from '../Images/strategyIcon.png'
import flameIcon from '../Images/flameIcon.png'
import userIcon from '../Images/userIcon.png'
import starsIcon from '../Images/starsIcon.png'
import CardImage from '../Images/CardImage.png'
import WorkTogether from '../Images/WorkTogether.png'
import behance from '../Images/behance.png'
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'
import CafeStreetVideo from '../Images/CafeStreetVideo.mp4'
import nomNomNerdsVid from '../Images/NomNomNerdsVideo.mp4'


function CompleteProjects() {
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${CompleteProjectsCss.hamburger}`);
        const navMenu = document.querySelector(`.${CompleteProjectsCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(CompleteProjectsCss.active);
            navMenu.classList.toggle(CompleteProjectsCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

    const navigate = useNavigate()

    const navigateAppProjects = () => {
        navigate('/devski-appDevProjects')
    }
    const navigateWebProjects = () => {
        navigate('/devski-projectsPage')
    }
    const navigateUiUXProjects = () => {
        navigate('/devski-UiUXProjects')
    }
    const navigateAboutus = () => {
        navigate('/devski-contactus')
    }

    const handleRightVideo = () => {
        var video1 = document.getElementById('firstVideo');
        var video2 = document.getElementById('secondVideo');
        var div = document.getElementById('videoDiv');
        if(video1 && video2) {
            video1.style.transform = 'translateX(-150%)';
            // if(window.width > 768){      
            video2.style.transform = 'translateX(-117%)';
            if(window.width < 768){
                    div.style.paddingLeft = '0px'
            }
            
        }
    }

    const handleLeftVideo = () => {
        var video1 = document.getElementById('firstVideo');
        var video2 = document.getElementById('secondVideo');
        if(video1 && video2) {
            video1.style.transform = 'translateX(0)';        
            video2.style.transform = 'translateX(75%)';        
        }
    }


  return (
    <>
        <div className={CompleteProjectsCss.main}>

            <div className={CompleteProjectsCss.cover}>

                <header className={CompleteProjectsCss.header}>
                <nav className={CompleteProjectsCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={CompleteProjectsCss.DevskiLogo} alt='logo'/>
                </Link>
                    <ul className={CompleteProjectsCss.navMenu}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                        <li className={CompleteProjectsCss.home}>Home</li>
                        </Link>
                        <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                        <li className={CompleteProjectsCss.services}>Services</li>
                        </Link>
                        <Link to='/devski-projectsPage' style={{textDecoration: 'none'}}>
                            <li className={CompleteProjectsCss.projects}>Projects</li>
                        </Link>
                        <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                            <li className={CompleteProjectsCss.about}>About Us</li>
                        </Link>
                        <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                            <li className={CompleteProjectsCss.contact}>Contact Us</li>
                        </Link>
                    </ul>
                    <div className={CompleteProjectsCss.hamburger}>
                        <span className={CompleteProjectsCss.bar}></span>
                        <span className={CompleteProjectsCss.bar}></span>
                        <span className={CompleteProjectsCss.bar}></span>
                    </div>
                </nav>
                </header>

                <h1>Our <span>Projects</span></h1>

            </div>

            <div className={CompleteProjectsCss.featuredProjects}>
                <div className={CompleteProjectsCss.projectButtons}>
                    <button className={CompleteProjectsCss.allbtn}>All</button>
                    <button className={CompleteProjectsCss.webbtn} onClick={navigateWebProjects}>Web Dev</button>
                    <button className={CompleteProjectsCss.appbtn} onClick={navigateAppProjects}>App Dev</button>
                    <button className={CompleteProjectsCss.uibtn}  onClick={navigateUiUXProjects}>UI / UX</button>
                </div>

                <div className={CompleteProjectsCss.videoDiv} id = 'videoDiv' >
                    <button onClick={handleLeftVideo} className={CompleteProjectsCss.videoButtons}>&larr;</button>
                    <video autoPlay
                        muted
                        controls
                        loop className={CompleteProjectsCss.videos} style={{transition: '0.4s', width:'fit-content'}} id = "firstVideo">
                        <source src={CafeStreetVideo} type="video/mp4"  autoPlay loop/>
                        Your browser does not support the video tag.
                    </video>
                    <button onClick={handleRightVideo} className={CompleteProjectsCss.videoButtons}>&rarr;</button>
                    <video autoPlay
                        muted
                        controls
                        loop className={CompleteProjectsCss.videos} style={{transform:'translateX(75%)', transition: '0.4s'}} id = "secondVideo">
                        <source src={nomNomNerdsVid} type="video/mp4"  autoPlay loop/>
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className={CompleteProjectsCss.projectPictures}>
                    <div className={CompleteProjectsCss.appProjectsPic}>
                        <div className={CompleteProjectsCss.appProj}></div>
                        <h2>Carreri</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={CompleteProjectsCss.uiProjectsPic}>
                        <div className={CompleteProjectsCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
                    </div>
                 </div>
                  
                <div className={CompleteProjectsCss.projectPictures}>
                    <div className={CompleteProjectsCss.appProjectsPic}>
                        <div className={CompleteProjectsCss.appProj}></div>
                        <h2>Carreri</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={CompleteProjectsCss.uiProjectsPic}>
                        <div className={CompleteProjectsCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
                    </div>
                 </div>

            </div>
            
            <div className={CompleteProjectsCss.keyFeatures}>
                <div className={CompleteProjectsCss.keyFeaturesWavy}>
                    <h1><span>Key Features</span> of Our Projects</h1>
                {/* </div> */}
                    <div className={CompleteProjectsCss.featureAttributes}>

                        <div className={CompleteProjectsCss.firstRow}>

                            <div className={CompleteProjectsCss.strategicPlan}>
                                <img src={strategyIcon} className={CompleteProjectsCss.strategyIcon} alt='strategyIcon'/>
                                <h2>Strategic Planning</h2>
                                <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                            </div>
                            <hr></hr>

                            <div className={CompleteProjectsCss.strategicPlan}>
                                <img src={flameIcon} className={CompleteProjectsCss.flameIcon} alt='flameIcon'/>
                                <h2>Collaborative Process</h2>
                                <p>We work closely with clients throughout the project to ensure alignment with their vision and objectives.</p>
                            </div>
                            <hr></hr>

                            <div className={CompleteProjectsCss.strategicPlan}>
                                <img src={userIcon} className={CompleteProjectsCss.userIcon} alt='userIcon'/>
                                <h2>User-Centric Approach</h2>
                                <p style={{width:'82%'}}>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</p>
                            </div>

                        </div>
                        
                        {/* <hr/> */}

                        <div className={CompleteProjectsCss.secondRow}>
                            <div className={CompleteProjectsCss.edgeTechnology}>
                                <img src={starsIcon} className={CompleteProjectsCss.strategyIcon} alt='starsIcon'/>
                                <h2>Cutting-Edge Technologies</h2>
                                <p>We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.</p>
                            </div>
                            <hr></hr>

                            <div className={CompleteProjectsCss.TimelyDelivery}>
                                <img src={starsIcon} className={CompleteProjectsCss.flameIcon} alt='starsIcon'/>
                                <h2>Timely Delivery</h2>
                                <p>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={CompleteProjectsCss.MainCard}>
                <div className={CompleteProjectsCss.Card}>
                    <div className={CompleteProjectsCss.CardText}>
                        <h1>Help To Build Your Dream Project</h1>
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <button className={CompleteProjectsCss.CardButton} onClick={navigateAboutus}>
                            Discuss Your Project
                            <span> </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                            </svg>
                        </button>
                    </div>
                    <img src={CardImage} className={CompleteProjectsCss.CardImage} alt="CardImage"/>
                </div>
            </div>

            
            <div className={CompleteProjectsCss.FooterMain}>
                
                <div className={CompleteProjectsCss.EveryFooterDiv}>

                    <div className={CompleteProjectsCss.AllColumn}>
                        <div className={CompleteProjectsCss.RightColumn}>
                            <h1>Contact</h1>
                            <h2>devski@info.io</h2>
                            <h3>d0318-0010470</h3>
                        </div>
                        <div className={CompleteProjectsCss.MiddleColumn}>
                            <h1>Got a project? Want to collaborate? </h1>
                            <button className={CompleteProjectsCss.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                                </svg></button>
                            </div>
                        <div className={CompleteProjectsCss.LeftColumn}>
                            <h1>America</h1>
                            <h2>Jln. Bambu No. 375</h2>
                            <h3>Samarinda, Kalimantan Timur</h3>
                            <h4>Hong Kong</h4>
                            <h5>60 Ya Fung Sung</h5>
                            <h6>San Tsuen, 75129</h6>
                        </div>
                    </div>
                <div className={CompleteProjectsCss.ThinLine}>
                        <h1>© Copyright 2024. Aditama Studio. All rights reserved.</h1>
                        <h2>Terms & Conditions</h2>
                        <div className={CompleteProjectsCss.SocialMedia}>
                            <img src = {behance} className={CompleteProjectsCss.behance} alt = "behance"/>
                            <img src = {Insta} className={CompleteProjectsCss.Insta} alt = "Insta"/>
                            <img src = {linkedin} className={CompleteProjectsCss.linkedin} alt = "linkedin"/>
                        </div>
                    </div>
                </div>
                
                <div className={CompleteProjectsCss.FooterHeading}>
                    <img src = {WorkTogether}className={CompleteProjectsCss.WorkTogether} alt = "WorkTogether"/>
                </div>
            </div>
        </div>
    
    </>
    )
}

export default CompleteProjects