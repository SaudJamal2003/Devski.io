import React, {useState, useEffect} from "react";
import { Link} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
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
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';
import upwork from '../Images/upworkIcon.png';
import DevskiServicesCss from '../Css/DevskiServices.module.css';
import AllProjectsImages from './AllProjectsImages';
import WebProjectsImages from './WebProjectsImages';
import AppProjectsImages from './AppProjectsImages';
import UiUxProjectsImages from './UiUxProjectsImages';
import OurProjects from "./OurProjects";
import Footer from "./Footer";


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

    const [renderProjects, setProjectComp] = useState('All'); // Default state
    
    
       const [Projectflag1, setProjectFlag1] = useState(true);
       const [Projectflag2, setProjectFlag2] = useState(false);
       const [Projectflag3, setProjectFlag3] = useState(false);
       const [Projectflag4, setProjectFlag4] = useState(false);

    
  return(
        <>

        <div className={DevskiServicesCss.main1}>
        <header className={DevskiServicesCss.header}>
        <nav className={DevskiServicesCss.navbar}>
        <Link to='/' style={{textDecoration: 'none'}}>
                <img src={Devski_Logo} className={DevskiServicesCss.DevskiLogo} alt='logo'/>
        </Link>
            <ul className={DevskiServicesCss.navMenu}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <li className={DevskiServicesCss.home}>Home</li>
                </Link>
                <Link to='/devski-devskiServices' style={{textDecoration: 'none', color:'black'}}>
                    <li className={DevskiServicesCss.services}>Services</li>
                </Link>
                <Link to='/devski-completeProjects' style={{textDecoration: 'none'}}>
                    <li className={DevskiServicesCss.projects}>Projects</li>
                </Link>
                <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                    <li className={DevskiServicesCss.about}>About Us</li>
                </Link>
                <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
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
                        <p>Our website development services create dynamic and responsive websites specific to your business needs.</p>
                        {/* <button className={DevskiServicesCss.LearnMore}>Learn More</button> */}
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={MobileDevIcon} className={DevskiServicesCss.MobileDevIcon} alt="MobileDevIcon" />
                        <h1>Mobile Development</h1>
                        <p>Our application solutions ensure seamless performance and a great user experience across all devices.</p>
                        {/* <button className={DevskiServicesCss.LearnMore}>Learn More</button> */}
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={softDevIcon} className={DevskiServicesCss.softDevIcon} alt="softDevIcon" />
                        <h1>UI/Ux </h1>
                        <p>Our UI/UX design services focus on creating intuitive and aesthetically pleasing interfaces.</p>
                        {/* <button className={DevskiServicesCss.LearnMore}>Learn More</button> */}
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={brandingIcon} className={DevskiServicesCss.brandingIcon} alt="brandingIcon" />
                        <h1>Branding</h1>
                        <p>Our branding services craft strategies that capture the essence of your company.</p>
                        {/* <button className={DevskiServicesCss.LearnMore}>Learn More</button> */}
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={DigitalIcon} className={DevskiServicesCss.DigitalIcon} alt="DigitalIcon" />
                        <h1>Graphic Designing</h1>
                        <p>Our graphic design services create visually compelling designs that reflect your brand's identity.</p>
                        {/* <button className={DevskiServicesCss.LearnMore}>Learn More</button> */}
                    </div>
                    <div className={DevskiServicesCss.Container}>
                        <img src={CloudIcon} className={DevskiServicesCss.CloudIcon} alt="CloudIcon" />
                        <h1>AI Services</h1>
                        <p>We offer services from predictive analytics to intelligent automation, we deliver solutions for smarter decision-making and enhanced user experiences.
                        </p>
                        {/* <button className={DevskiServicesCss.LearnMore}>Learn More</button> */}
                    </div>
                </div>
            </div>

            <OurProjects className={DevskiServicesCss.projects} allRoute='/devski-completeProjects' webRoute='/devski-devskiWebdev' appRoute='/devski-devskiAppDev' uiRoute='/devski-devskiUiUx'/>
            <Footer/>

        </div> 

        </div>   

        </>

    )
}

export default DevskiServices