import React from 'react';
import classes from '../Css/footer.module.css';
import { useNavigate } from 'react-router-dom';
import WorkTogether from '../Images/WorkTogether.png';
import upwork from '../Images/upworkIcon.png';
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';

function Footer() {
    const navigate = useNavigate();

    const navigateAboutus = () => {
        navigate('/devski-contactus')
    }
    const navigateInsta = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateUpwork = () => {
        window.open('https://www.upwork.com/agencies/1820538096896221184/', '_blank');
    }
    const navigateLinkedin = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }


  return (
    <>
        <div className={classes.FooterMain}> 
            <div className={classes.EveryFooterDiv}>
                <div className={classes.AllColumn}>
                    <div className={classes.MiddleColumn}>
                        <h1>Got a project? Let's build something amazing together! </h1>
                        <p>Have an idea you'd like to bring to life or a project you need help with? Let's collaborate and create something extraordinary together. Click below to start the conversation—your vision is just one step away!</p>
                        <button className={classes.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg></button>
                    </div>
                    <div className={classes.LeftColumn}>
                        <h1>United States of America</h1>
                        <h2>5570 FM 423 Ste 250 Apt# 1120</h2>
                        <h3>Frisco, TX 75036</h3>
                        <h4 style={{marginTop: '-2px'}}>Texas</h4>
                        <h1 style={{marginTop:'10px', fontWeight:'bold', fontSize:'16px'}}>Contact</h1>
                        <h2>devski@info.io</h2>
                    </div>
                </div>
                <div className={classes.ThinLine}>
                    <div className={classes.SocialMedia}>
                        <img src = {upwork} className={classes.upwork}  onClick={navigateUpwork} alt = "behance"/>
                        <img src = {Insta} className={classes.Insta} onClick={navigateInsta} alt = "Insta"/>
                        <img src = {linkedin} className={classes.linkedin} onClick={navigateLinkedin} alt = "linkedin"/>
                    </div>
                </div>
            </div>
            
            <div className={classes.FooterHeading}>
                 <img src = {WorkTogether}className={classes.WorkTogether} alt = "WorkTogether"/>
            </div>
        </div>
    </>
  )
}

export default Footer
