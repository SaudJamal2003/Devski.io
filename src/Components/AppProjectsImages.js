import React from 'react';
import HomePageCss from '../Css/HomePage.module.css';

function AppProjectsImages() {
  return (
    <>
        <div className={HomePageCss.ProjectBackground}>
            <div className={HomePageCss.appProjectsPic}>
                <div className={HomePageCss.appProj}></div>
                <p>Tribe Me</p>
                <p>Mobile App</p>
            </div>

            <div className={HomePageCss.uiProjectsPic}>
                <div className={HomePageCss.appProj2}></div>
                <p>NomNom Nerds</p>
                <p>Mobile App </p>
            </div>
        </div> 
    </>
  )
}

export default AppProjectsImages