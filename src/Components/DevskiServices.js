import React, {useEffect} from "react";
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

    const navigate = useNavigate()

    // const navigateWebServices = () => {
    //     navigate('/devski-devskiUiUx')
    // }
    const navigateWebServices = () => {
        navigate('/devski-devskiUiUx')
    }
    const navigateAppServices = () => {
        navigate('/devski-devskiAppDev')
    }
    const navigateUiUXServices = () => {
        navigate('/devski-devskiWebdev')
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
                <Link to='/devski-projectsPage' style={{textDecoration: 'none'}}>
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


        <div className={DevskiServicesCss.BlackBg}>
            <h1>Our Projects</h1>
            
            <div className={DevskiServicesCss.ProjectButtons}>
            <button className={DevskiServicesCss.AllButton}> All </button>
            <button className={DevskiServicesCss.WebButton} onClick={navigateWebServices}> UI/UX </button>
            <button className={DevskiServicesCss.AppButton} onClick={navigateAppServices}> App </button>
            <button className={DevskiServicesCss.UIUXButton} onClick={navigateUiUXServices}> Web </button>
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
                    <p>We are a software startup dedicated to bringing your ideas to life. We provide end-to-end services tailored to startups and businesses looking to innovate and grow. 
                    </p>
                    <button className={DevskiServicesCss.CardButton} onClick={navigateAboutus}>
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
                    <div className={DevskiServicesCss.MiddleColumn}>
                        <h1>Got a project? Let's build something amazing together! </h1>
                        <p>Have an idea you'd like to bring to life or a project you need help with? Let's collaborate and create something extraordinary together. Click below to start the conversation—your vision is just one step away!</p>
                        <button className={DevskiServicesCss.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg></button>
                    </div>
                    <div className={DevskiServicesCss.LeftColumn}>
                        <h1>United States of America</h1>
                        <h2>5570 FM 423 Ste 250 Apt# 1120</h2>
                        <h3>Frisco, TX 75036</h3>
                        <h4 style={{marginTop: '-2px'}}>Texas</h4>
                        <h1 style={{marginTop:'10px', fontWeight:'bold', fontSize:'16px'}}>Contact</h1>
                        <h2>devski@info.io</h2>
                    </div>
                </div>
                <div className={DevskiServicesCss.ThinLine}>
                    <div className={DevskiServicesCss.SocialMedia}>
                        <img src = {upwork} className={DevskiServicesCss.upwork}  onClick={navigateUpwork} alt = "behance"/>
                        <img src = {Insta} className={DevskiServicesCss.Insta} onClick={navigateInsta} alt = "Insta"/>
                        <img src = {linkedin} className={DevskiServicesCss.linkedin} onClick={navigateLinkedin} alt = "linkedin"/>
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