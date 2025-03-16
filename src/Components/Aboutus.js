import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import AboutUsCss from '../Css/AboutUs.module.css';
import Devski_Logo from '../Images/Devski_Logo.png';
import maryam from '../Images/Maryam.jpeg';
import saud from '../Images/saud.jpeg';
import shaheer from '../Images/shaheer.png';
import usaid from '../Images/usaid.png';
import socialButton from '../Images/socialbtn.png';
import expandButton from '../Images/SocialsIcon.png';
import WorkTogether from '../Images/WorkTogether.png'
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'
import upwork from '../Images/upworkIcon.png';

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
    const navigateInsta = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateUpwork = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateLinkedin = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }

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

    const navigate = useNavigate();

    const navigateAboutus = () => {
        navigate('/devski-contactus')
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
                    <Link to='/' style={{textDecoration: 'none'}}>
                    <li className={AboutUsCss.home}>Home</li>
                    </Link>
                    <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                    <li className={AboutUsCss.services}>Services</li>
                    </Link>
                    <Link to='/devski-completeProjects' style={{textDecoration: 'none'}}>
                        <li className={AboutUsCss.projects}>Projects</li>
                    </Link>
                    <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                        <li className={AboutUsCss.about}>About Us</li>
                    </Link>
                    <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
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
                    <img src={usaid} className={AboutUsCss.usaidPic} alt='usiad'/>
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
                    <img src={shaheer} className={AboutUsCss.shaheerPic} alt='shaheer'/>
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
            <Footer/>
        </div>

    </>
  )
}

export default Aboutus