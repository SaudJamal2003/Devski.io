import React from 'react';
import HomePageCss from '../Css/HomePage.module.css';

function UiUxProjectsImages() {
  return (
    <>
        <div className={HomePageCss.ProjectBackground}>
            <div className={HomePageCss.appProjectsPic}>
                <div className={HomePageCss.uiProj3}></div>
                <p>Shoplon</p>
                <p>Mobile App Design</p>
            </div>

            <div className={HomePageCss.uiProjectsPic}>
                <div className={HomePageCss.uiProj2}></div>
                <p>BeyondUx</p>
                <p>Web App Design </p>
            </div>
        </div> 
    </>
  )
}

export default UiUxProjectsImages