import React from 'react';
import HomePageCss from '../Css/HomePage.module.css';

function AllProjectsImages() {
  return (
    <>
        <div className={HomePageCss.ProjectBackground}>
            <div className={HomePageCss.appProjectsPic}>
                <div className={HomePageCss.appProj}></div>
                <p>Tribe Me</p>
                <p>Mobile App</p>
            </div>

            <div className={HomePageCss.uiProjectsPic}>
                <div className={HomePageCss.uiProj}></div>
                <p>Spend It</p>
                <p>Mobile App </p>
            </div>
        </div> 
    </>
  )
}

export default AllProjectsImages