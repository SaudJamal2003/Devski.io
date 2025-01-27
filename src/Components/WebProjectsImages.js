import React from 'react';
import HomePageCss from '../Css/HomePage.module.css';

function WebProjectsImages() {
  return (
    <>
        <div className={HomePageCss.ProjectBackground}>
            <div className={HomePageCss.appProjectsPic}>
                <div className={HomePageCss.webProj1}></div>
                <p>Helping Hands</p>
                <p>Website</p>
            </div>

            <div className={HomePageCss.uiProjectsPic}>
                <div className={HomePageCss.webProj2}></div>
                <p>Cafe Street</p>
                <p>Website </p>
            </div>
        </div> 
    </>
  )
}

export default WebProjectsImages