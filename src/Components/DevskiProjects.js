import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import DevskiProjectsCss from '../Css/DevskiProjects.module.css';
import Devski_Logo from '../Images/Devski_Logo.png'
import Project1 from '../Images/Project1.png';
import Project2 from '../Images/Project2.png';
import KeyFeatureLines from '../Images/KeyFeatureLines.png';

function DevskiProjects() {
  useEffect(()=>{
    const hamburgerElement = document.querySelector(`.${DevskiProjectsCss.hamburger}`);
    const navMenu = document.querySelector(`.${DevskiProjectsCss.navMenu}`);

    if (hamburgerElement && navMenu) {
      function mobileMenu() {
        hamburgerElement.classList.toggle(DevskiProjectsCss.active);
        navMenu.classList.toggle(DevskiProjectsCss.active); 
      }

      hamburgerElement.addEventListener("click", mobileMenu);

      return () => {
        hamburgerElement.removeEventListener("click", mobileMenu);
      };
    }
  },[]) 
  const navigate = useNavigate();
  
  const navigateAboutus = () => {
      navigate('/devski-contactus')
  }
  
  return (
    <>     
        <header className={DevskiProjectsCss.header}>
        <nav className={DevskiProjectsCss.navbar}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <img src={Devski_Logo} className={DevskiProjectsCss.DevskiLogo} alt='logo'/>
             </Link>
             <ul className={DevskiProjectsCss.navMenu}>
                <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                    <li className={DevskiProjectsCss.services}>Services</li>
                </Link>
                <Link to='/devski-projectsPage' style={{textDecoration: 'none'}}>
                    <li className={DevskiProjectsCss.projects}>Projects</li>
                </Link>
                <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                    <li className={DevskiProjectsCss.about}>About Us</li>
                </Link>
                <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                    <li className={DevskiProjectsCss.contact}>Contact Us</li>
                </Link>
            </ul>
            <div className={DevskiProjectsCss.hamburger}>
                <span className={DevskiProjectsCss.bar}></span>
                <span className={DevskiProjectsCss.bar}></span>
                <span className={DevskiProjectsCss.bar}></span>
            </div>
        </nav>
       </header>    
       <div className={DevskiProjectsCss.main}>
        <div className={DevskiProjectsCss.Topimage}>
            <h1>Our <span>Projects</span></h1>
          </div>   
            <div className={DevskiProjectsCss.WhiteBg}>
              <div className={DevskiProjectsCss.ProjectButtons}>
              <button className={DevskiProjectsCss.AllButton}> All </button>
              <button className={DevskiProjectsCss.WebButton}> Web </button>
              <button className={DevskiProjectsCss.AppButton}> App </button>
              <button className={DevskiProjectsCss.UIUXButton}> UI/UX </button>
              </div>
              <div className={DevskiProjectsCss.AllProjects}>
              <div className={DevskiProjectsCss.proj1}>
              <img src = {Project1}className={DevskiProjectsCss.Project1} alt = "Project1"/>
              <h1>Helping Hands</h1>
              <p>Website</p>
              </div>
              <div className={DevskiProjectsCss.proj2}>
              <img src = {Project2}className={DevskiProjectsCss.Project2} alt = "Project2"/>
              <h1>NomNomNerds</h1>
              <p>Web Design</p>
              </div>
            </div>
              <div className={DevskiProjectsCss.AllProjects2}>
              <div className={DevskiProjectsCss.proj3}>
              <img src = {Project1}className={DevskiProjectsCss.Project1} alt = "Project1"/>
              <h1>Cafe 90s</h1>
              <p>Website</p>
              </div>
              <div className={DevskiProjectsCss.proj4}>
              <img src = {Project2}className={DevskiProjectsCss.Project2} alt = "Project2"/>
              <h1>TechTree</h1>
              <p>Web Design</p>
              </div>
              </div>
          </div>    
          <div className={DevskiProjectsCss.KeyFeatures}>
            <div className={DevskiProjectsCss.BlackBg}>
              <h1><span>Key Features </span> of Our Projects</h1>
              <h2>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</h2>
              <img src = {KeyFeatureLines} className={DevskiProjectsCss.KeyFeatureLines} alt = "KeyFeatureLines"/>
            </div>
          </div>           
        </div> 

    </>
    )
    }

    export default DevskiProjects

