import React, {useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppDevProjectsCss from "../Css/AppDevProject.module.css"
import ReactPlayer from 'react-player';
import Devski_Logo from '../Images/Devski_Logo.png';
import play from '../Images/PlayButton.png';
import strategyIcon from '../Images/strategyIcon.png'
import flameIcon from '../Images/flameIcon.png'
import userIcon from '../Images/userIcon.png'
import starsIcon from '../Images/starsIcon.png'
import CardImage from '../Images/CardImage.png'
import WorkTogether from '../Images/WorkTogether.png'
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'
import upwork from '../Images/upworkIcon.png';
import nomNomNerdsVid from '../Images/NomNomNerdsVideo.mp4'

function AppDevProjects() {
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${AppDevProjectsCss.hamburger}`);
        const navMenu = document.querySelector(`.${AppDevProjectsCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(AppDevProjectsCss.active);
            navMenu.classList.toggle(AppDevProjectsCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

    const navigate = useNavigate()

    const navigateAllProjects = () => {
        navigate('/devski-completeProjects')
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
    const navigateInsta = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateUpwork = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateLinkedin = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
  return (
    <>
        <div className={AppDevProjectsCss.main}>

            <div className={AppDevProjectsCss.cover}>

                <header className={AppDevProjectsCss.header}>
                <nav className={AppDevProjectsCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={AppDevProjectsCss.DevskiLogo} alt='logo'/>
                </Link>
                            <ul className={AppDevProjectsCss.navMenu}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                        <li className={AppDevProjectsCss.home}>Home</li>
                        </Link>
                        <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                        <li className={AppDevProjectsCss.services}>Services</li>
                        </Link>
                        <Link to='/devski-projectsPage' style={{textDecoration: 'none'}}>
                            <li className={AppDevProjectsCss.projects}>Projects</li>
                        </Link>
                        <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                            <li className={AppDevProjectsCss.about}>About Us</li>
                        </Link>
                        <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                            <li className={AppDevProjectsCss.contact}>Contact Us</li>
                        </Link>
                    </ul>
                    <div className={AppDevProjectsCss.hamburger}>
                        <span className={AppDevProjectsCss.bar}></span>
                        <span className={AppDevProjectsCss.bar}></span>
                        <span className={AppDevProjectsCss.bar}></span>
                    </div>
                </nav>
                </header>

                <h1>Our <span>Projects</span></h1>

            </div>

            <div className={AppDevProjectsCss.featuredProjects}>
                <div className={AppDevProjectsCss.projectButtons}>
                    <button className={AppDevProjectsCss.allbtn} onClick={navigateAllProjects}>All</button>
                    <button className={AppDevProjectsCss.webbtn} onClick={navigateWebProjects}>Web Dev</button>
                    <button className={AppDevProjectsCss.appbtn}>App Dev</button>
                    <button className={AppDevProjectsCss.uibtn} onClick={navigateUiUXProjects}>UI / UX</button>
                </div>

          

                <div className={AppDevProjectsCss.videoDiv}>
                    <video autoPlay
                        muted
                        controls
                        loop className={AppDevProjectsCss.videos}>
                        <source src={nomNomNerdsVid} type="video/mp4"  autoplay loop/>
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className={AppDevProjectsCss.projectPictures}>
                    <div className={AppDevProjectsCss.appProjectsPic}>
                        <div className={AppDevProjectsCss.appProj1}></div>
                        <h2>Shoplon</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={AppDevProjectsCss.uiProjectsPic}>
                        <div className={AppDevProjectsCss.uiProj1}></div>
                        <h2>Tribe Me</h2>
                        <p>Mobile App</p>
                    </div>
                 </div>
                  
                <div className={AppDevProjectsCss.projectPictures}>
                    <div className={AppDevProjectsCss.appProjectsPic}>
                        <div className={AppDevProjectsCss.appProj2}></div>
                        <h2>Nom Nom Nerds</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={AppDevProjectsCss.uiProjectsPic}>
                        <div className={AppDevProjectsCss.uiProj2}></div>
                        <h2>SpendIt</h2>
                        <p>Mobile App</p>
                    </div>
                 </div>

            </div>
            
            <div className={AppDevProjectsCss.keyFeatures}>
                <div className={AppDevProjectsCss.keyFeaturesWavy}>
                    <h1><span>Key Features</span> of Our Projects</h1>
                {/* </div> */}
                    <div className={AppDevProjectsCss.featureAttributes}>

                        <div className={AppDevProjectsCss.firstRow}>

                            <div className={AppDevProjectsCss.strategicPlan}>
                                <img src={strategyIcon} className={AppDevProjectsCss.strategyIcon} alt='strategyIcon'/>
                                <h2>Strategic Planning</h2>
                                <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                            </div>
                            <hr></hr>

                            <div className={AppDevProjectsCss.strategicPlan}>
                                <img src={flameIcon} className={AppDevProjectsCss.flameIcon} alt='flameIcon'/>
                                <h2>Collaborative Process</h2>
                                <p>We work closely with clients throughout the project to ensure alignment with their vision and objectives.</p>
                            </div>
                            <hr></hr>

                            <div className={AppDevProjectsCss.strategicPlan}>
                                <img src={userIcon} className={AppDevProjectsCss.userIcon} alt='userIcon'/>
                                <h2>User-Centric Approach</h2>
                                <p style={{width:'82%'}}>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</p>
                            </div>

                        </div>
                        
                        {/* <hr/> */}

                        <div className={AppDevProjectsCss.secondRow}>
                            <div className={AppDevProjectsCss.edgeTechnology}>
                                <img src={starsIcon} className={AppDevProjectsCss.strategyIcon} alt='starsIcon'/>
                                <h2>Cutting-Edge Technologies</h2>
                                <p>We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.</p>
                            </div>
                            <hr></hr>

                            <div className={AppDevProjectsCss.TimelyDelivery}>
                                <img src={starsIcon} className={AppDevProjectsCss.flameIcon} alt='starsIcon'/>
                                <h2>Timely Delivery</h2>
                                <p>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={AppDevProjectsCss.MainCard}>
                <div className={AppDevProjectsCss.Card}>
                    <div className={AppDevProjectsCss.CardText}>
                        <h1>Help To Build Your Dream Project</h1>
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <button className={AppDevProjectsCss.CardButton} onClick={navigateAboutus}>
                            Discuss Your Project
                            <span> </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                            </svg>
                        </button>
                    </div>
                    <img src={CardImage} className={AppDevProjectsCss.CardImage} alt="CardImage"/>
                </div>
            </div>

            
            <div className={AppDevProjectsCss.FooterMain}> 
                <div className={AppDevProjectsCss.EveryFooterDiv}>
                    <div className={AppDevProjectsCss.AllColumn}>
                        <div className={AppDevProjectsCss.RightColumn}>
                            <h1 style={{marginBottom:'2px'}}>Contact</h1>
                            <h2>devski@info.io</h2>
                        </div>
                        <div className={AppDevProjectsCss.MiddleColumn}>
                            <h1>Got a project? Want to collaborate? </h1>
                            <button className={AppDevProjectsCss.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                            </svg></button>
                        </div>
                        <div className={AppDevProjectsCss.LeftColumn}>
                            <h1>United States of America</h1>
                            <h2>5570 FM 423 Ste 250 Apt# 1120</h2>
                            <h3>Frisco, TX 75036</h3>
                            <h4 style={{marginTop: '-2px'}}>Texas</h4>
                        </div>
                    </div>
                    <div className={AppDevProjectsCss.ThinLine}>
                        <div className={AppDevProjectsCss.SocialMedia}>
                            <img src = {upwork} className={AppDevProjectsCss.upwork}  onClick={navigateUpwork} alt = "behance"/>
                            <img src = {Insta} className={AppDevProjectsCss.Insta} onClick={navigateInsta} alt = "Insta"/>
                            <img src = {linkedin} className={AppDevProjectsCss.linkedin} onClick={navigateLinkedin} alt = "linkedin"/>
                        </div>
                    </div>
                </div>
                
                <div className={AppDevProjectsCss.FooterHeading}>
                    <img src = {WorkTogether}className={AppDevProjectsCss.WorkTogether} alt = "WorkTogether"/>
                </div>
            </div>

        </div>
    </>
)
}

export default AppDevProjects