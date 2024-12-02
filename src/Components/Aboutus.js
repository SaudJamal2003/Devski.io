import React, {useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import AboutUsCss from '../Css/AboutUs.module.css';
import Devski_Logo from '../Images/Devski_Logo.png';
import maryam from '../Images/maryam.png';
import saud from '../Images/saud.jpeg';
import shaheer from '../Images/shaheer.png';
import usaid from '../Images/usaid.png';
import socialButton from '../Images/socialbtn.png';
import expandButton from '../Images/SocialsIcon.png';
import WorkTogether from '../Images/WorkTogether.png'
import behance from '../Images/behance.png'
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'
import facebook from '../Images/facebook.png'

function Aboutus() {
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${AboutUsCss.hamburger}`);
        const navMenu = document.querySelector(`.${AboutUsCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(AboutUsCss.active);
            navMenu.classList.toggle(AboutUsCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

    const saudLinkedin = () => {
        window.open('https://www.linkedin.com/in/saud-jamal/', '_blank');
    }

    const saudInsta = () => {
        window.open('https://www.instagram.com/saudjamal1020/', '_blank');
    }
    const shaheerLinkedin = () => {
        window.open('https://www.linkedin.com/in/sh-badar/', '_blank');
    }

    const shaheerInsta = () => {
        window.open('https://www.instagram.com/shaheerbadar35/', '_blank');
    }
    const usaidLinkedin = () => {
        window.open('https://www.linkedin.com/in/usaid-ahmed-838643222/', '_blank');
    }

    const usaidInsta = () => {
        window.open('https://www.instagram.com/usaid_ahmed31/', '_blank');
    }
    const maryamLinkedin = () => {
        window.open('https://www.linkedin.com/in/maryam-sha-hid/', '_blank');
    }

    const maryamInsta = () => {
        window.open('https://www.instagram.com/maryam.shahid_/', '_blank');
    }



  return (
    <>
        <div className={AboutUsCss.main}>
            <header className={AboutUsCss.header}>
                <nav className={AboutUsCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={AboutUsCss.DevskiLogo} alt='logo'/>
                </Link>        
                 <ul className={AboutUsCss.navMenu}>
                    <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                    <li className={AboutUsCss.home}>Home</li>
                    </Link>
                    <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                    <li className={AboutUsCss.services}>Services</li>
                    </Link>
                    <Link to='/projectsPage' style={{textDecoration: 'none'}}>
                        <li className={AboutUsCss.projects}>Projects</li>
                    </Link>
                    <Link to='/aboutus' style={{textDecoration: 'none'}}>
                        <li className={AboutUsCss.about}>About Us</li>
                    </Link>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li className={AboutUsCss.contact}>Contact Us</li>
                    </Link>
                </ul>
                    <div className={AboutUsCss.hamburger}>
                        <span className={AboutUsCss.bar}></span>
                        <span className={AboutUsCss.bar}></span>
                        <span className={AboutUsCss.bar}></span>
                    </div>
                </nav>
            </header>
            
            <div className={AboutUsCss.teamText}>
                <h2>MEET OUR TEAM MEMBERS</h2>
                <h1>Meet the Team that Powers Your Success</h1>
                <hr/>
            </div>


            <div className={AboutUsCss.pictureRow1}>

                <div className={AboutUsCss.Maryam}>
                    <h1>Maryam Shahid</h1>
                    <h2>Co-Founder</h2>
                    <img src={maryam} className={AboutUsCss.maryamPic} alt='maryam'/>
                    <div className={AboutUsCss.socialAccounts}>
                        <img src={linkedin} className={AboutUsCss.linkedin} alt='linkedin' onClick={maryamLinkedin}/>
                        <img src={Insta} className={AboutUsCss.instagram} alt='instagram' onClick={maryamInsta}/>
                    </div>
                    <button><img src={socialButton} className={AboutUsCss.socialbtn} alt='socials'/></button>
                    <button><img src={expandButton} className={AboutUsCss.expandSocials} alt='socials'/></button>
                </div>

                <div className={AboutUsCss.Maryam}>
                    <h1>Usaid Ahmed</h1>
                    <h2>Co-Founder</h2>
                    <img src={usaid} className={AboutUsCss.maryamPic} alt='usiad'/>
                    <div className={AboutUsCss.socialAccounts}>
                        <img src={linkedin} className={AboutUsCss.linkedin} alt='linkedin' onClick={usaidLinkedin}/>
                        <img src={Insta} className={AboutUsCss.instagram} alt='instagram' onClick={usaidInsta}/>
                    </div>
                    <button><img src={socialButton} className={AboutUsCss.socialbtn} alt='socials'/></button>
                    <button><img src={expandButton} className={AboutUsCss.expandSocials} alt='socials'/></button>
                </div>
            </div>
            <div className={AboutUsCss.pictureRow2}>
                <div className={AboutUsCss.Maryam}>
                    <h1>Shaheer Badar</h1>
                    <h2>Co-Founder</h2>
                    <img src={shaheer} className={AboutUsCss.maryamPic} alt='shaheer'/>
                    <div className={AboutUsCss.socialAccounts}>
                        <img src={linkedin} className={AboutUsCss.linkedin} alt='linkedin' onClick={shaheerLinkedin}/>
                        <img src={Insta} className={AboutUsCss.instagram} alt='instagram' onClick={shaheerInsta} />
                    </div>
                    <button><img src={socialButton} className={AboutUsCss.socialbtn} alt='socials'/></button>
                    <button><img src={expandButton} className={AboutUsCss.expandSocials} alt='socials'/></button>
                </div>

                <div className={AboutUsCss.Maryam}>
                    <h1>Saud Jamal</h1>
                    <h2>Co-Founder</h2>
                    <img src={saud} className={AboutUsCss.saudPic} alt='saud'/>
                    <div className={AboutUsCss.socialAccounts}>
                        <img src={linkedin} className={AboutUsCss.linkedin} alt='linkedin' onClick={saudLinkedin}/>
                        <img src={Insta} className={AboutUsCss.instagram} alt='instagram' onClick={saudInsta}/>
                    </div>
                    <button><img src={socialButton} className={AboutUsCss.socialbtn} alt='socials'/></button>
                    <button><img src={expandButton} className={AboutUsCss.expandSocials} alt='socials'/></button>
                </div>

            </div>


            <div className={AboutUsCss.FooterMain}>
                
                <div className={AboutUsCss.EveryFooterDiv}>

                    <div className={AboutUsCss.AllColumn}>
                        <div className={AboutUsCss.RightColumn}>
                            <h1>Contact</h1>
                            <h2>devski@info.io</h2>
                            <h3>d0318-0010470</h3>
                        </div>
                        <div className={AboutUsCss.MiddleColumn}>
                            <h1>Got a project? Want to collaborate? </h1>
                            <button className={AboutUsCss.CardButton}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                                </svg></button>
                            </div>
                        <div className={AboutUsCss.LeftColumn}>
                            <h1>America</h1>
                            <h2>Jln. Bambu No. 375</h2>
                            <h3>Samarinda, Kalimantan Timur</h3>
                            <h4>Hong Kong</h4>
                            <h5>60 Ya Fung Sung</h5>
                            <h6>San Tsuen, 75129</h6>
                        </div>
                    </div>
                <div className={AboutUsCss.ThinLine}>
                        <h1>© Copyright 2024. Aditama Studio. All rights reserved.</h1>
                        <h2>Terms & Conditions</h2>
                        <div className={AboutUsCss.SocialMedia}>
                            <img src = {behance} className={AboutUsCss.behance} alt = "behance"/>
                            <img src = {Insta} className={AboutUsCss.Insta} alt = "Insta"/>
                            <img src = {linkedin} className={AboutUsCss.linkedin} alt = "linkedin"/>
                        </div>
                    </div>
                </div>
                
                <div className={AboutUsCss.FooterHeading}>
                    <img src = {WorkTogether}className={AboutUsCss.WorkTogether} alt = "WorkTogether"/>
                </div>
            </div>




        </div>

    
    
    
    
    </>
  )
}

export default Aboutus