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
import behance from '../Images/behance.png'
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'
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
        navigate('/completeProjects')
    }
    const navigateAppProjects = () => {
        navigate('/appDevProjects')
    }
    const navigateWebProjects = () => {
        navigate('/projectsPage')
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
                        <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                        <li className={UiUxProjectsCss.services}>Services</li>
                        </Link>
                        <Link to='/projectsPage' style={{textDecoration: 'none'}}>
                            <li className={UiUxProjectsCss.projects}>Projects</li>
                        </Link>
                        <Link to='/aboutus' style={{textDecoration: 'none'}}>
                            <li className={UiUxProjectsCss.about}>About Us</li>
                        </Link>
                        <Link to='/' style={{textDecoration: 'none'}}>
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
                        <div className={UiUxProjectsCss.appProj}></div>
                        <h2>Carreri</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={UiUxProjectsCss.uiProjectsPic}>
                        <div className={UiUxProjectsCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
                    </div>
                 </div>
                  
                <div className={UiUxProjectsCss.projectPictures}>
                    <div className={UiUxProjectsCss.appProjectsPic}>
                        <div className={UiUxProjectsCss.appProj}></div>
                        <h2>Carreri</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={UiUxProjectsCss.uiProjectsPic}>
                        <div className={UiUxProjectsCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
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

            <div className={UiUxProjectsCss.MainCard}>
                <div className={UiUxProjectsCss.Card}>
                    <div className={UiUxProjectsCss.CardText}>
                        <h1>Help To Build Your Dream Project</h1>
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <button className={UiUxProjectsCss.CardButton}>
                            Discuss Your Project
                            <span> </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                            </svg>
                        </button>
                    </div>
                    <img src={CardImage} className={UiUxProjectsCss.CardImage} alt="CardImage"/>
                </div>
            </div>

            
            <div className={UiUxProjectsCss.FooterMain}>
                
                <div className={UiUxProjectsCss.EveryFooterDiv}>

                    <div className={UiUxProjectsCss.AllColumn}>
                        <div className={UiUxProjectsCss.RightColumn}>
                            <h1>Contact</h1>
                            <h2>devski@info.io</h2>
                            <h3>d0318-0010470</h3>
                        </div>
                        <div className={UiUxProjectsCss.MiddleColumn}>
                            <h1>Got a project? Want to collaborate? </h1>
                            <button className={UiUxProjectsCss.CardButton}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                                </svg></button>
                            </div>
                        <div className={UiUxProjectsCss.LeftColumn}>
                            <h1>America</h1>
                            <h2>Jln. Bambu No. 375</h2>
                            <h3>Samarinda, Kalimantan Timur</h3>
                            <h4>Hong Kong</h4>
                            <h5>60 Ya Fung Sung</h5>
                            <h6>San Tsuen, 75129</h6>
                        </div>
                    </div>
                <div className={UiUxProjectsCss.ThinLine}>
                        <h1>© Copyright 2024. Aditama Studio. All rights reserved.</h1>
                        <h2>Terms & Conditions</h2>
                        <div className={UiUxProjectsCss.SocialMedia}>
                            <img src = {behance} className={UiUxProjectsCss.behance} alt = "behance"/>
                            <img src = {Insta} className={UiUxProjectsCss.Insta} alt = "Insta"/>
                            <img src = {linkedin} className={UiUxProjectsCss.linkedin} alt = "linkedin"/>
                        </div>
                    </div>
                </div>
                
                <div className={UiUxProjectsCss.FooterHeading}>
                    <img src = {WorkTogether}className={UiUxProjectsCss.WorkTogether} alt = "WorkTogether"/>
                </div>
            </div>

            

        


            

        </div>
    
    </>
    )
}


export default UiUxProjects