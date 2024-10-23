import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import Devski_Logo from '../Images/Devski_Logo.png'
import webdevIcon from '../Images/webdevIcon.png';
import MobileDevIcon from '../Images/MobileDevIcon.png';
import DigitalIcon from '../Images/DigitalIcon.png';
import CloudIcon from '../Images/CloudIcon.png';
import softDevIcon from '../Images/softDevIcon.png';
import brandingIcon from '../Images/brandingIcon.png';
import Project1 from '../Images/Project1.png';
import Project2 from '../Images/Project2.png';
import CardImage from '../Images/CardImage.png';
import WorkTogether from '../Images/WorkTogether.png';
import behance from '../Images/behance.png';
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';
import DevskiServicesCss from '../Css/DevskiServices.module.css';


function DevskiServices(){
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${DevskiServicesCss.hamburger}`);
        const navMenu = document.querySelector(`.${DevskiServicesCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(DevskiServicesCss.active);
            navMenu.classList.toggle(DevskiServicesCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }

                const containers = document.querySelectorAll('.Container');
        const mainContainer = document.querySelector('.MainContainer');

        mainContainer.addEventListener('scroll', () => {
            const screenCenter = window.innerWidth / 2;

            containers.forEach((container) => {
                const containerRect = container.getBoundingClientRect();
                const containerCenter = (containerRect.left + containerRect.right) / 2;

                if (Math.abs(containerCenter - screenCenter) < 80) {
                    container.classList.add('active'); // Add class to center container
                } else {
                    container.classList.remove('active'); // Remove class from others
                }
            });
        });

    }, []);
    
    
  return(
        <>

        <div className={DevskiServicesCss.main1}>
        <header className={DevskiServicesCss.header}>
        <nav className={DevskiServicesCss.navbar}>
            <img src={Devski_Logo} className={DevskiServicesCss.DevskiLogo} alt='logo'/>
            <ul className={DevskiServicesCss.navMenu}>
                <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                    <li className={DevskiServicesCss.services}>Services</li>
                </Link>
                <Link to='/projectsPage' style={{textDecoration: 'none'}}>
                    <li className={DevskiServicesCss.projects}>Projects</li>
                </Link>
                <Link to='/aboutus' style={{textDecoration: 'none'}}>
                    <li className={DevskiServicesCss.about}>About Us</li>
                </Link>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <li className={DevskiServicesCss.contact}>Contact Us</li>
                </Link>
            </ul>
            <div className={DevskiServicesCss.hamburger}>
                <span className={DevskiServicesCss.bar}></span>
                <span className={DevskiServicesCss.bar}></span>
                <span className={DevskiServicesCss.bar}></span>
            </div>
        </nav>
       </header>

        <div className={DevskiServicesCss.main}>
        <div className={DevskiServicesCss.Topimage}>
           <h1>Our <span> Services</span></h1>
            </div>
            <div className={DevskiServicesCss.ArrayofServices}>
                <h2>We offer a wide array of services</h2>
                
                
                <div className={DevskiServicesCss.MainContainer}>
                
                    <div className={DevskiServicesCss.Container}>
                        <img src={webdevIcon} className={DevskiServicesCss.webdevIcon} alt="webdevIcon" />
                        <h1>Web Development</h1>
                        <p>Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc aliquam magna lacinia nulla risus.</p>
                        <button className={DevskiServicesCss.LearnMore}>Learn More</button>
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={MobileDevIcon} className={DevskiServicesCss.MobileDevIcon} alt="MobileDevIcon" />
                        <h1>Mobile Development</h1>
                        <p>Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc aliquam magna lacinia nulla risus.</p>
                        <button className={DevskiServicesCss.LearnMore}>Learn More</button>
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={softDevIcon} className={DevskiServicesCss.softDevIcon} alt="softDevIcon" />
                        <h1>Software Development</h1>
                        <p>Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc aliquam magna lacinia nulla risus.</p>
                        <button className={DevskiServicesCss.LearnMore}>Learn More</button>
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={brandingIcon} className={DevskiServicesCss.brandingIcon} alt="brandingIcon" />
                        <h1>Branding</h1>
                        <p>Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc aliquam magna lacinia nulla risus.</p>
                        <button className={DevskiServicesCss.LearnMore}>Learn More</button>
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={DigitalIcon} className={DevskiServicesCss.DigitalIcon} alt="DigitalIcon" />
                        <h1>Digital Marketing</h1>
                        <p>Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc aliquam magna lacinia nulla risus.</p>
                        <button className={DevskiServicesCss.LearnMore}>Learn More</button>
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={CloudIcon} className={DevskiServicesCss.CloudIcon} alt="CloudIcon" />
                        <h1>Cloud Services</h1>
                        <p>Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc aliquam magna lacinia nulla risus.</p>
                        <button className={DevskiServicesCss.LearnMore}>Learn More</button>
                    </div>
                </div>
            </div>


        <div className={DevskiServicesCss.BlackBg}>
            <h1>Our Projects</h1>
            
            <div className={DevskiServicesCss.ProjectButtons}>
            <button className={DevskiServicesCss.AllButton}> All </button>
            <button className={DevskiServicesCss.WebButton}> Web </button>
            <button className={DevskiServicesCss.AppButton}> App </button>
            <button className={DevskiServicesCss.UIUXButton}> UI/UX </button>
            </div>

    
            <div className={DevskiServicesCss.AllProjects}>
                <div className={DevskiServicesCss.proj1}>
                    <img src = {Project1}className={DevskiServicesCss.Project1} alt = "Project1"/>
                    <h1>Helping Hands</h1>
                    <p>Website</p>
                </div>
                
                <div className={DevskiServicesCss.proj2}>
                    <img src = {Project2}className={DevskiServicesCss.Project2} alt = "Project2"/>
                    <h1>Nom Nom Nerds</h1>
                    <p>Web Design</p>
                </div>
            </div>

            <div className={DevskiServicesCss.AllProjects2}>
            <div className={DevskiServicesCss.proj3}>
            <img src = {Project1}className={DevskiServicesCss.Project1} alt = "Project1"/>
            <h1>Cafe 90s</h1>
            <p>Website</p>
            </div>
            <div className={DevskiServicesCss.proj4}>
            <img src = {Project2}className={DevskiServicesCss.Project2} alt = "Project2"/>
            <h1>TechTree</h1>
            <p>Web Design</p>
            </div>
            </div>
        </div>
        
        <div className={DevskiServicesCss.MainCard}>
            <div className={DevskiServicesCss.Card}>
                <div className={DevskiServicesCss.CardText}>
                    <h1>Help To Build Your Dream Project</h1>
                    <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <button className={DevskiServicesCss.CardButton}>
                        Discuss Your Project
                        <span> </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg>
                    </button>
                </div>
                <img src={CardImage} className={DevskiServicesCss.CardImage} alt="CardImage"/>
            </div>
        </div>

        <div className={DevskiServicesCss.FooterMain}>
            
            <div className={DevskiServicesCss.EveryFooterDiv}>

            <div className={DevskiServicesCss.AllColumn}>
            <div className={DevskiServicesCss.RightColumn}>
                <h1>Contact</h1>
                <h2>devski@info.io</h2>
                <h3>d0318-0010470</h3>
            </div>
            <div className={DevskiServicesCss.MiddleColumn}>
            <h1>Got a project? Want to collaborate? </h1>
            <button className={DevskiServicesCss.CardButton}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                </svg></button>
            </div>
            <div className={DevskiServicesCss.LeftColumn}>
                <h1>America</h1>
                <h2>Jln. Bambu No. 375</h2>
                <h3>Samarinda, Kalimantan Timur</h3>
                <h4>Hong Kong</h4>
                <h5>60 Ya Fung Sung</h5>
                <h6>San Tsuen, 75129</h6>
            </div>
            </div>
            <div className={DevskiServicesCss.ThinLine}>
                <h1>© Copyright 2024. Aditama Studio. All rights reserved.</h1>
                <h2>Terms & Conditions</h2>
                <div className={DevskiServicesCss.SocialMedia}>
                    <img src = {behance} className={DevskiServicesCss.behance} alt = "behance"/>
                    <img src = {Insta} className={DevskiServicesCss.Insta} alt = "Insta"/>
                    <img src = {linkedin} className={DevskiServicesCss.linkedin} alt = "linkedin"/>
                </div>
            </div>
            </div>
            
            <div className={DevskiServicesCss.FooterHeading}>
            <img src = {WorkTogether}className={DevskiServicesCss.WorkTogether} alt = "WorkTogether"/>
            </div>
        </div>

        </div> 

        </div>   

        </>

    )
}

export default DevskiServices