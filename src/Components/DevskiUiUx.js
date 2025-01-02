import React from 'react'
import Devski_Logo from '../Images/Devski_Logo.png'
import ProcessBox1Img from '../Images/ProcessBox1Img.png'
import MoreIcon from '../Images/MoreIcon.png'
import Project1 from '../Images/Project1.png';
import Project2 from '../Images/Project2.png';
import WorkTogether from '../Images/WorkTogether.png';
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';
import upwork from '../Images/upworkIcon.png';
import CardImage from '../Images/CardImage.png';
import DevskiWebDevCss from '../Css/DevskiWebDev.module.css';
import { Link } from "react-router-dom";
import { useEffect, useNavigate } from 'react';

function DevskiUiUx() {
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
                <Link to='/devski-projectsPage' style={{textDecoration: 'none'}}>
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
                        <h1>Web Development</h1>
                    </div>
                </div>

                <div className={DevskiWebDevCss.ServiceDescription}>
                    <div className={DevskiWebDevCss.ServiceDescriptionHeading}>
                        <h1>Service Description</h1>
                    </div>
                    <div className={DevskiWebDevCss.ServiceDescriptionPara}>
                        <p>Our team delivers exceptional websites, designed to achieve your business goals. From responsive design and seamless user experiences to robust back-end solutions and integrations, we ensure your online presence stands out. Whether you're launching a new site or revamping an existing one, we provide high-performing web solutions.
                        </p>
                    </div>
                </div>

                <div className={DevskiWebDevCss.HowWorks}>
                    <div className={DevskiWebDevCss.HowWorksHeading}>
                        <h1>How Our<span> Web Development </span> Process Works</h1>
                    </div>
                    <div className={DevskiWebDevCss.HowWorksPara}>
                        <p>Devski follows a collaborative and iterative approach, to achieve optimal results for every project.</p>
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
                    <h1>Our Best Work from <span> Web Development </span> Services</h1>
                    <p>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
                    </div>
            </div>

            <div className={DevskiWebDevCss.AllProjects}>
                <div className={DevskiWebDevCss.proj1}>
                    <img src = {Project1}className={DevskiWebDevCss.Project1} alt = "Project1"/>
                    <h1>Helping Hands</h1>
                    <p>Website</p>
                </div>
                
                <div className={DevskiWebDevCss.proj2}>
                    <img src = {Project2}className={DevskiWebDevCss.Project2} alt = "Project2"/>
                    <h1>Nom Nom Nerds</h1>
                    <p>Web Design</p>
                </div>

                
            </div>
            <div className={DevskiWebDevCss.MoreMain}>
                    <button className={DevskiWebDevCss.MoreButton}> More 
                    <img src={MoreIcon} className={DevskiWebDevCss.MoreIcon} alt="MoreIcon"/>
                    </button>
                </div>
        </div>



        <div className={DevskiWebDevCss.MainCard}>
            <div className={DevskiWebDevCss.Card}>
                <div className={DevskiWebDevCss.CardText}>
                    <h1>Help To Build Your Dream Project</h1>
                    <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <button className={DevskiWebDevCss.CardButton} onClick={navigateAboutus}>
                        Discuss Your Project
                        <span> </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg>
                    </button>
                </div>
                <img src={CardImage} className={DevskiWebDevCss.CardImage} alt="CardImage"/>
            </div>
        </div>



        <div className={DevskiWebDevCss.FooterMain}> 
            <div className={DevskiWebDevCss.EveryFooterDiv}>
                <div className={DevskiWebDevCss.AllColumn}>
                    <div className={DevskiWebDevCss.RightColumn}>
                        <h1 style={{marginBottom:'2px'}}>Contact</h1>
                        <h2>devski@info.io</h2>
                    </div>
                    <div className={DevskiWebDevCss.MiddleColumn}>
                        <h1>Got a project? Want to collaborate? </h1>
                        <button className={DevskiWebDevCss.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg></button>
                    </div>
                    <div className={DevskiWebDevCss.LeftColumn}>
                        <h1>United States of America</h1>
                        <h2>5570 FM 423 Ste 250 Apt# 1120</h2>
                        <h3>Frisco, TX 75036</h3>
                        <h4 style={{marginTop: '-2px'}}>Texas</h4>
                    </div>
                </div>
                <div className={DevskiWebDevCss.ThinLine}>
                    <div className={DevskiWebDevCss.SocialMedia}>
                        <img src = {upwork} className={DevskiWebDevCss.upwork}  onClick={navigateUpwork} alt = "behance"/>
                        <img src = {Insta} className={DevskiWebDevCss.Insta} onClick={navigateInsta} alt = "Insta"/>
                        <img src = {linkedin} className={DevskiWebDevCss.linkedin} onClick={navigateLinkedin} alt = "linkedin"/>
                    </div>
                </div>
            </div>
            
            <div className={DevskiWebDevCss.FooterHeading}>
                 <img src = {WorkTogether}className={DevskiWebDevCss.WorkTogether} alt = "WorkTogether"/>
            </div>
        </div>

    </div>

    
    </>
  )
}

export default DevskiUiUx