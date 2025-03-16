import React from 'react'
import Devski_Logo from '../Images/Devski_Logo.png'
import ProcessBox1Img from '../Images/ProcessBox1Img.png'
import MoreIcon from '../Images/MoreIcon.png'
import Project1 from '../Images/AppDevtribeMe.png';
import Project2 from '../Images/NomNomPic.png';
import DevskiWebDevCss from '../Css/DevskiWebDev.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Footer from './Footer';

function DevskiAppDev() {
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
    
    const navigateAppProjects = () => {
        navigate('/devski-appDevProjects')
    }

  return (
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
                         <h1>App Development</h1>
                     </div>
                 </div>

                 <div className={DevskiWebDevCss.ServiceDescription}>
                     <div className={DevskiWebDevCss.ServiceDescriptionHeading}>
                         <h1>Service Description</h1>
                     </div>
                     <div className={DevskiWebDevCss.ServiceDescriptionPara}>
                         <p>With an expert team in both native and cross-platform development, we build apps that are user-centric, scalable, and optimized for performance. Whether you're looking to streamline business operations or introduce a new service, our custom app solutions empower your business to succeed in the mobile landscape.</p>
                     </div>
                 </div>

                 <div className={DevskiWebDevCss.HowWorks}>
                     <div className={DevskiWebDevCss.HowWorksHeading}>
                         <h1>How Our<span> App Development </span> Process Works</h1>
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
                            <h1>Discovery</h1>
                            <p>• Understand client's business goals.</p>
                            <p>• Identify target audience.</p>
                            <p>• Conduct market analysis.</p>
                        </div>
                    </div>

                    <div className={DevskiWebDevCss.ProcessBox1}>
                        <h1>02</h1>
                        <div className={DevskiWebDevCss.ProcessBoxImg}>
                            <img src={ProcessBox1Img} className={DevskiWebDevCss.ProcessBox1Img} alt="ProcessBox1Img" />
                        </div>
                        <div className={DevskiWebDevCss.ProcessBoxHeading}>
                            <h1>Planning</h1>
                            <p>• Define project scope.</p>
                            <p>• Create project roadmap.</p>
                            <p>• Establish timelines and milestones.</p>
                        </div>
                    </div>

                    <div className={DevskiWebDevCss.ProcessBox1}>
                        <h1>03</h1>
                        <div className={DevskiWebDevCss.ProcessBoxImg}>
                            <img src={ProcessBox1Img} className={DevskiWebDevCss.ProcessBox1Img} alt="ProcessBox1Img" />
                        </div>
                        <div className={DevskiWebDevCss.ProcessBoxHeading}>
                            <h1>Design</h1>
                            <p>• Create wireframes and prototypes.</p>
                            <p>• Conduct user research and analysis.</p>
                            <p>• Develop design concepts.</p>
                        </div>
                    </div>

                    <div className={DevskiWebDevCss.ProcessBox1}>
                        <h1>04</h1>
                        <div className={DevskiWebDevCss.ProcessBoxImg}>
                            <img src={ProcessBox1Img} className={DevskiWebDevCss.ProcessBox1Img} alt="ProcessBox1Img" />
                        </div>
                        <div className={DevskiWebDevCss.ProcessBoxHeading}>
                            <h1>Development</h1>
                            <p>• Front-end and back-end development.</p>
                            <p>• Integrate necessary tools and technologies.</p>
                            <p>• Perform iterative testing and debugging.</p>
                        </div>
                    </div>
                </div>
            </div>


         <div className={DevskiWebDevCss.BlackBg}>
             <div className={DevskiWebDevCss.WebDevProjects}>
                     <div className={DevskiWebDevCss.WebDevProjectsHeading}>
                     <h1>Our Best Work from <span>  App Development </span> Services</h1>
                     <p>From concept to deployment, we build feature-rich mobile applications designed for optimal performance. Our apps are user-focused, ensuring smooth navigation and functionality across all devices.</p>
                     </div>
             </div>

             <div className={DevskiWebDevCss.AllProjects}>
                 <div className={DevskiWebDevCss.proj1}>
                     <img src = {Project1}className={DevskiWebDevCss.Project1} alt = "Project1"/>
                     <h1>Tribe Me</h1>
                     <p>Mobile Application</p>
                 </div>
                
                 <div className={DevskiWebDevCss.proj2}>
                     <img src = {Project2}className={DevskiWebDevCss.Project2} alt = "Project2"/>
                     <h1>Nom Nom Nerds</h1>
                     <p>Mobile Application</p>
                 </div>

                
             </div>
             <div className={DevskiWebDevCss.MoreMain}>
                     <button className={DevskiWebDevCss.MoreButton} onClick={navigateAppProjects}> 
                        More 
                        <img src={MoreIcon} className={DevskiWebDevCss.MoreIcon} alt="MoreIcon"/>
                     </button>
                 </div>
         </div>
        <Footer/>

     </div>
        

    </>
  )
}

export default DevskiAppDev

