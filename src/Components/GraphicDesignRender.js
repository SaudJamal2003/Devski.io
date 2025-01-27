import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageCss from '../Css/HomePage.module.css';
import roundwhiteArrow from '../Images/roundWhiteArrow.png';
import roundblackArrow from '../Images/roundBlackArrow.png';

function GraphicDesignRender() {

    const navigate = useNavigate();
    
      const navigateAppProjects = () => {
        navigate('/devski-completeProjects')
      }
      const navigateAboutUs = () => {
        navigate('/devski-aboutus')
      }
  return (
   <>
    <div className={HomePageCss.projectsImages}>
        <div className={HomePageCss.AppProjects}>
            <img src={roundwhiteArrow} onClick={navigateAppProjects} alt='uiuxprojects'/>
        </div>

    <div className={HomePageCss.meetExpert}>
        <div className={HomePageCss.howWork}>
            <p>Ever wondered how exceptional work comes together?</p>
            <div className={HomePageCss.innerWork}>
                <h2>See how we work</h2>
                <img src={roundblackArrow} alt='roundblackArrow'/>
            </div>
        </div>
        <div className={HomePageCss.ourExpert}>
            <p>Looking for design experts who can bring your vision to life?</p>
            <div className={HomePageCss.innerWork}>
                <h2>Meet our expert</h2>
                <img src={roundwhiteArrow} className={HomePageCss.whiteRoundArrow} onClick={navigateAboutUs} alt='roundblackArrow'/>
            </div>
        </div>
    </div>
    </div>    
   </>
  )
}

export default GraphicDesignRender