import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactusCss from '../Css/Contactus.module.css';
import MultiRangeSlider from './MultiRangeSlider';
import Devski_Logo from '../Images/Devski_Logo.png';
import WorkTogether from '../Images/WorkTogether.png';
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';
import upwork from '../Images/upworkIcon.png';
import mail from '../Images/mail_icon.png';
import telephone from '../Images/telephone.png';
import location from '../Images/location.png';
import fb from '../Images/fb_logo_contact.png';
import twitter from '../Images/twitter_logo_contact.png';
import linkedin_logo from '../Images/ln_logo_contact.png';

function ContactUs() {
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${ContactusCss.hamburger}`);
        const navMenu = document.querySelector(`.${ContactusCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(ContactusCss.active);
            navMenu.classList.toggle(ContactusCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

    const navigate = useNavigate();

    const navigateInsta = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateUpwork = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateLinkedin = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateAboutus = () => {
        navigate('/devski-contactus')
    }

    const handleSubmit = () => {
        const _name = document.getElementById('name');
        const _email = document.getElementById('email');
        const _message = document.getElementById('message');

        if(_name.value === ""){
            alert('Enter your full name');
        }
        else if(_email.value === ""){
            alert('Enter your Email');
        }
        else if(_message.value === ""){
            alert('Can not send empty message');
        }
        else if (_name.value !== "" && _email.value !== "" && _message.value !== ""){
            alert('Thank you for the repsonse');
        }
        else{
            alert('Information Empty');
        }
    }
  return (
    <>
        <div className={ContactusCss.main}>

            <header className={ContactusCss.header}>
            <nav className={ContactusCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={ContactusCss.DevskiLogo} alt='logo'/>
                </Link>
                <ul className={ContactusCss.navMenu}>
                    <Link to='/' style={{textDecoration: 'none'}}>
                    <li className={ContactusCss.home}>Home</li>
                    </Link>
                    <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.services}>Services</li>
                    </Link>
                    <Link to='/devski-completeProjects' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.projects}>Projects</li>
                    </Link>
                    <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.about}>About Us</li>
                    </Link>
                    <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.contact}>Contact Us</li>
                    </Link>

                </ul>
                <div className={ContactusCss.hamburger}>
                    <span className={ContactusCss.bar}></span>
                    <span className={ContactusCss.bar}></span>
                    <span className={ContactusCss.bar}></span>
                </div>
            </nav>
            </header>

            <div className={ContactusCss.coverDiv}>
                <h1><span>Contact</span> Us</h1>
            </div>


            <div className={ContactusCss.ContactForm}>
                <div className={ContactusCss.contactinfo}>
                    <button><img src={mail} className={ContactusCss.mailImage} alt='mail'/> hello@squareup.com</button>
                    <button><img src={telephone} className={ContactusCss.telephone_image} alt='mail'/> +91 91813 23 2309</button>
                    <button><img src={location} className={ContactusCss.location_image} alt='mail'/> Get Location</button>
                </div>

                <div className={ContactusCss.formBody}>
                    <div className={ContactusCss.fields}>
                        <div className={ContactusCss.nameField}>
                            <h1>Full Name</h1>
                            <input type='text' placeholder='Type here' id='name' required/>
                        </div>
                        <div className={ContactusCss.emailField}>
                            <h1>Email</h1>
                            <input type='text' placeholder='Type here' id='email' required/>
                        </div>
                    </div>

                    <div className={ContactusCss.checkBoxes}>
                        <h1>Why are you contacting us?</h1>
                        <div className={ContactusCss.checks}>
                            <div className={ContactusCss.firstCheckCol}>
                                <div style={{display:'flex', gap: '10px'}}>
                                    <input type="checkbox" id={ContactusCss.check1} name="web Design" value="web Design"/>Web Design
                                </div>
                                <div style={{display:'flex', gap: '10px'}}>
                                     <input type="checkbox" id={ContactusCss.check2} name="App Design" value="App Design"/>Mobile App Design
                                </div>
                            </div>
                            <div className={ContactusCss.secondCheckCol}>
                                <div style={{display:'flex', gap: '10px'}}>
                                    <input type="checkbox" id={ContactusCss.check3} name="collaboration" value="collaboration"/>Collaboration
                                </div>
                                <div style={{display:'flex', gap: '10px'}}>
                                    <input type="checkbox" id={ContactusCss.check4} name="others" value="others"/>Others
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ContactusCss.budget}>
                        <h1>Your Budget</h1>
                        <p>Slide to indicate your budget range</p>
                        <MultiRangeSlider
                            min={0}
                            max={1000}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                    </div>

                    <div className={ContactusCss.message}>
                        <h1>Your Message</h1>
                        <textarea rows='5' cols='180' placeholder='Type here' id= 'message'/>
                    </div>

                    <button type='submit' className={ContactusCss.submitButton} onClick={handleSubmit}>Submit</button>

                    <div className={ContactusCss.formTail}>
                        <div className={ContactusCss.operatingDays}>
                            <h2>Operating Days</h2>
                            <h3>Monday to Friday</h3>
                        </div>
                        <div className={ContactusCss.socialsIcons}>
                            <h2>Stay Connected</h2>
                            <img src={fb} className={ContactusCss.fb} alt='fb'/>
                            <img src={twitter} className={ContactusCss.twitter} alt='tweet'/>
                            <img src={linkedin_logo} className={ContactusCss.linkedin} alt='ln'/>
                        </div>
                    </div> 

                </div>
            </div>

            <div className={ContactusCss.FooterMain}> 
            <div className={ContactusCss.EveryFooterDiv}>
                <div className={ContactusCss.AllColumn}>
                    <div className={ContactusCss.RightColumn}>
                        <h1 style={{marginBottom:'2px'}}>Contact</h1>
                        <h2>devski@info.io</h2>
                    </div>
                    <div className={ContactusCss.MiddleColumn}>
                        <h1>Got a project? Want to collaborate? </h1>
                        <button className={ContactusCss.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg></button>
                    </div>
                    <div className={ContactusCss.LeftColumn}>
                        <h1>United States of America</h1>
                        <h2>5570 FM 423 Ste 250 Apt# 1120</h2>
                        <h3>Frisco, TX 75036</h3>
                        <h4 style={{marginTop: '-2px'}}>Texas</h4>
                    </div>
                </div>
                <div className={ContactusCss.ThinLine}>
                    <div className={ContactusCss.SocialMedia}>
                        <img src = {upwork} className={ContactusCss.upwork}  onClick={navigateUpwork} alt = "behance"/>
                        <img src = {Insta} className={ContactusCss.Insta} onClick={navigateInsta} alt = "Insta"/>
                        <img src = {linkedin} className={ContactusCss.linkedin} onClick={navigateLinkedin} alt = "linkedin"/>
                    </div>
                </div>
            </div>
            
            <div className={ContactusCss.FooterHeading}>
                 <img src = {WorkTogether}className={ContactusCss.WorkTogether} alt = "WorkTogether"/>
            </div>
        </div>

        </div>

    </>
  )
}

export default ContactUs