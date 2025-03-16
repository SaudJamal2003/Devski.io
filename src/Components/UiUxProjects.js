import React, {useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import UiUxProjectsCss from "../Css/UiUxProjects.module.css"
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
import Footer from './Footer';

function UiUxProjects() {
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${UiUxProjectsCss.hamburger}`);
        const navMenu = document.querySelector(`.${UiUxProjectsCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(UiUxProjectsCss.active);
            navMenu.classList.toggle(UiUxProjectsCss.active); 
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
    const navigateAppProjects = () => {
        navigate('/devski-appDevProjects')
    }
    const navigateWebProjects = () => {
        navigate('/devski-projectsPage')
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
        <div className={UiUxProjectsCss.main}>

            <div className={UiUxProjectsCss.cover}>

                <header className={UiUxProjectsCss.header}>
                <nav className={UiUxProjectsCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={UiUxProjectsCss.DevskiLogo} alt='logo'/>
                </Link>
                <ul className={UiUxProjectsCss.navMenu}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                        <li className={UiUxProjectsCss.home}>Home</li>
                        </Link>
                        <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                        <li className={UiUxProjectsCss.services}>Services</li>
                        </Link>
                        <Link to='/devski-completeProjects' style={{textDecoration: 'none'}}>
                            <li className={UiUxProjectsCss.projects}>Projects</li>
                        </Link>
                        <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                            <li className={UiUxProjectsCss.about}>About Us</li>
                        </Link>
                        <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                            <li className={UiUxProjectsCss.contact}>Contact Us</li>
                        </Link>
                    </ul>
                    <div className={UiUxProjectsCss.hamburger}>
                        <span className={UiUxProjectsCss.bar}></span>
                        <span className={UiUxProjectsCss.bar}></span>
                        <span className={UiUxProjectsCss.bar}></span>
                    </div>
                </nav>
                </header>

                <h1>Our <span>Projects</span></h1>

            </div>

            <div className={UiUxProjectsCss.featuredProjects}>
                <div className={UiUxProjectsCss.projectButtons}>
                    <button className={UiUxProjectsCss.allbtn} onClick={navigateAllProjects}>All</button>
                    <button className={UiUxProjectsCss.webbtn} onClick={navigateWebProjects}>Web Dev</button>
                    <button className={UiUxProjectsCss.appbtn} onClick={navigateAppProjects}>App Dev</button>
                    <button className={UiUxProjectsCss.uibtn}>UI / UX</button>
                </div>

                <div className={UiUxProjectsCss.video}>
                    <h1>Featured Project</h1>
                    <div className={UiUxProjectsCss.projectBackground}>
                        <button><img src={play} className={UiUxProjectsCss.play} alt='play'/></button>
                    </div>
                </div>

                <div className={UiUxProjectsCss.projectPictures}>
                    <div className={UiUxProjectsCss.appProjectsPic}>
                        <div className={UiUxProjectsCss.appProj1}></div>
                        <h2>Tribe Me</h2>
                        <p>Mobile App Design</p>
                    </div>

                    <div className={UiUxProjectsCss.uiProjectsPic}>
                        <div className={UiUxProjectsCss.uiProj1}></div>
                        <h2>BeyondUx</h2>
                        <p>Web Design</p>
                    </div>
                 </div>
                  
                <div className={UiUxProjectsCss.projectPictures}>
                    <div className={UiUxProjectsCss.appProjectsPic}>
                        <div className={UiUxProjectsCss.appProj2}></div>
                        <h2>Woo Commerce</h2>
                        <p>Web Design</p>
                    </div>

                    <div className={UiUxProjectsCss.uiProjectsPic}>
                        <div className={UiUxProjectsCss.uiProj2}></div>
                        <h2>Crypto Nyte</h2>
                        <p>Mobile App Design</p>
                    </div>
                 </div>

            </div>
            
            <div className={UiUxProjectsCss.keyFeatures}>
                <div className={UiUxProjectsCss.keyFeaturesWavy}>
                    <h1><span>Key Features</span> of Our Projects</h1>
                {/* </div> */}
                    <div className={UiUxProjectsCss.featureAttributes}>

                        <div className={UiUxProjectsCss.firstRow}>

                            <div className={UiUxProjectsCss.strategicPlan}>
                                <img src={strategyIcon} className={UiUxProjectsCss.strategyIcon} alt='strategyIcon'/>
                                <h2>Strategic Planning</h2>
                                <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                            </div>
                            <hr></hr>

                            <div className={UiUxProjectsCss.strategicPlan}>
                                <img src={flameIcon} className={UiUxProjectsCss.flameIcon} alt='flameIcon'/>
                                <h2>Collaborative Process</h2>
                                <p>We work closely with clients throughout the project to ensure alignment with their vision and objectives.</p>
                            </div>
                            <hr></hr>

                            <div className={UiUxProjectsCss.strategicPlan}>
                                <img src={userIcon} className={UiUxProjectsCss.userIcon} alt='userIcon'/>
                                <h2>User-Centric Approach</h2>
                                <p style={{width:'82%'}}>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</p>
                            </div>

                        </div>
                        
                        {/* <hr/> */}

                        <div className={UiUxProjectsCss.secondRow}>
                            <div className={UiUxProjectsCss.edgeTechnology}>
                                <img src={starsIcon} className={UiUxProjectsCss.strategyIcon} alt='starsIcon'/>
                                <h2>Cutting-Edge Technologies</h2>
                                <p>We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.</p>
                            </div>
                            <hr></hr>

                            <div className={UiUxProjectsCss.TimelyDelivery}>
                                <img src={starsIcon} className={UiUxProjectsCss.flameIcon} alt='starsIcon'/>
                                <h2>Timely Delivery</h2>
                                <p>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    
    </>
    )
}


export default UiUxProjects