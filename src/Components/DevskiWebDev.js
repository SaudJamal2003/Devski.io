import React, {useEffect} from "react";
import Devski_Logo from '../Images/Devski_Logo.png'
import ProcessBox1Img from '../Images/ProcessBox1Img.png'
import MoreIcon from '../Images/MoreIcon.png'
import Project1 from '../Images/beyondUxDesign.png';
import Project2 from '../Images/Shoplon_app.png';
import DevskiWebDevCss from '../Css/DevskiWebDev.module.css';
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function DevskiWebDev(){
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${DevskiWebDevCss.hamburger}`);
        const navMenu = document.querySelector(`.${DevskiWebDevCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(DevskiWebDevCss.active);
            navMenu.classList.toggle(DevskiWebDevCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }

    },[]);
    const navigate = useNavigate();
    
    const navigateUiProjects = () => {
        navigate('/devski-UiUXProjects')
    }

    return(
        <>
        <header className={DevskiWebDevCss.header}>
        <nav className={DevskiWebDevCss.navbar}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <img src={Devski_Logo} className={DevskiWebDevCss.DevskiLogo} alt='logo'/>
            </Link>
            <ul className={DevskiWebDevCss.navMenu}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <li className={DevskiWebDevCss.home}>Home</li>
                    <hr></hr>
                </Link>
                <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                    <li className={DevskiWebDevCss.services}>Services</li>
                    <hr></hr>
                </Link>
                <Link to='/devski-completeProjects' style={{textDecoration: 'none'}}>
                    <li className={DevskiWebDevCss.projects}>Projects</li>
                    <hr></hr>
                </Link>
                <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                    <li className={DevskiWebDevCss.about}>About Us</li>
                    <hr></hr>
                </Link>
                <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                    <li className={DevskiWebDevCss.contact}>Contact Us</li>
                    <hr></hr>
                </Link>

            </ul>
            <div className={DevskiWebDevCss.hamburger}>
                <span className={DevskiWebDevCss.bar}></span>
                <span className={DevskiWebDevCss.bar}></span>
                <span className={DevskiWebDevCss.bar}></span>
            </div>
        </nav>
       </header>
   
           <div className={DevskiWebDevCss.Main}>

            
                <div className={DevskiWebDevCss.MainHeading}>
                    <div className={DevskiWebDevCss.ServicesHeading}>
                        <h1>Services</h1>
                    </div>
                    <div className={DevskiWebDevCss.WebDevHeading}>
                        <h1>UI/UX Design</h1>
                    </div>
                </div>

                <div className={DevskiWebDevCss.ServiceDescription}>
                    <div className={DevskiWebDevCss.ServiceDescriptionHeading}>
                        <h1>Service Description</h1>
                    </div>
                    <div className={DevskiWebDevCss.ServiceDescriptionPara}>
                        <p>Our UI/UX team is mastered in combining aesthetic design with functionality, ensuring that every interaction with your product is seamless and enjoyable. By conducting thorough user research and analysis, we gain deep insights into user behavior to enhance user engagement and satisfaction.</p>
                    </div>
                </div>

                <div className={DevskiWebDevCss.HowWorks}>
                    <div className={DevskiWebDevCss.HowWorksHeading}>
                        <h1>How Our<span> UI/UX Design </span> Process Works</h1>
                    </div>
                    <div className={DevskiWebDevCss.HowWorksPara}>
                        <p>Devski follows a collaborative and iterative approach to design, with a focus on understanding and meeting the unique needs of each client.</p>
                    </div>
                </div>

            <div className={DevskiWebDevCss.ProcessMain}>
                <div className={DevskiWebDevCss.ProcessGrid}>
                    <div className={DevskiWebDevCss.ProcessBox1}>
                        <h1>01</h1>
                        <div className={DevskiWebDevCss.ProcessBoxImg}>
                            <img src={ProcessBox1Img} className={DevskiWebDevCss.ProcessBox1Img} alt="ProcessBox1Img" />
                        </div>
                        <div className={DevskiWebDevCss.ProcessBoxHeading}>
                            <h1>Discovery and UX Strategy</h1>
                            <p>• Understand the client’s vision.</p>
                            <p>• Competitive analysis of target users.</p>
                            <p>• Map user journeys.</p>
                        </div>
                    </div>

                    <div className={DevskiWebDevCss.ProcessBox1}>
                        <h1>02</h1>
                        <div className={DevskiWebDevCss.ProcessBoxImg}>
                            <img src={ProcessBox1Img} className={DevskiWebDevCss.ProcessBox1Img} alt="ProcessBox1Img" />
                        </div>
                        <div className={DevskiWebDevCss.ProcessBoxHeading}>
                            <h1>Wireframing & Prototyping</h1>
                            <p>• Create wireframes to outline structure and layout.</p>
                            <p>• Develop interactive prototypes.</p>
                            <p>• Gather feedback.</p>
                        </div>
                    </div>

                    <div className={DevskiWebDevCss.ProcessBox1}>
                        <h1>03</h1>
                        <div className={DevskiWebDevCss.ProcessBoxImg}>
                            <img src={ProcessBox1Img} className={DevskiWebDevCss.ProcessBox1Img} alt="ProcessBox1Img" />
                        </div>
                        <div className={DevskiWebDevCss.ProcessBoxHeading}>
                            <h1>Visual Design</h1>
                            <p>• Design high-fidelity mockups.</p>
                            <p>• Apply consistent UI elements</p>
                            <p>• Responsive design across devices.</p>
                        </div>
                    </div>

                    <div className={DevskiWebDevCss.ProcessBox1}>
                        <h1>04</h1>
                        <div className={DevskiWebDevCss.ProcessBoxImg}>
                            <img src={ProcessBox1Img} className={DevskiWebDevCss.ProcessBox1Img} alt="ProcessBox1Img" />
                        </div>
                        <div className={DevskiWebDevCss.ProcessBoxHeading}>
                            <h1>Handoff & Implementation Support</h1>
                            <p>• Prepare design assets and guidelines for development teams.</p>
                            <p>• Collaborate with developers during implementation.</p>
                            <p>• Ongoing support for any design adjustments.</p>
                        </div>
                    </div>
                </div>
            </div>



        <div className={DevskiWebDevCss.BlackBg}>
            <div className={DevskiWebDevCss.WebDevProjects}>
                    <div className={DevskiWebDevCss.WebDevProjectsHeading}>
                    <h1>Our Best Work from <span>  UI/UX </span> Services</h1>
                    <p>Exceptional design meets functionality in our UI/UX services. We create intuitive, aesthetically pleasing interfaces that provide users with a seamless and engaging experience, ensuring your digital products stand out.</p>
                    </div>
            </div>

            <div className={DevskiWebDevCss.AllProjects}>
                <div className={DevskiWebDevCss.proj1}>
                    <img src = {Project1}className={DevskiWebDevCss.Project1} alt = "Project1"/>
                    <h1>Social App</h1>
                    <p>Mobile App Design</p>
                </div>
                
                <div className={DevskiWebDevCss.proj2}>
                    <img src = {Project2}className={DevskiWebDevCss.Project2} alt = "Project2"/>
                    <h1>Shoplon</h1>
                    <p>Mobile App Design</p>
                </div>
            </div>
            <div className={DevskiWebDevCss.MoreMain}>
                    <button className={DevskiWebDevCss.MoreButton} onClick={navigateUiProjects}> More 
                    <img src={MoreIcon} className={DevskiWebDevCss.MoreIcon} alt="MoreIcon"/>
                    </button>
                </div>
        </div>
        <Footer/>
    
    </div>  
    </>
    
    )
}

export default DevskiWebDev



