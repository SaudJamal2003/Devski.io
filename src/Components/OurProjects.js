import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../Css/ourProjects.module.css';
import AllProjectsImages from './AllProjectsImages';
import WebProjectsImages from './WebProjectsImages';
import AppProjectsImages from './AppProjectsImages';
import UiUxProjectsImages from './UiUxProjectsImages';


function OurProjects({allRoute, webRoute, appRoute, uiRoute}) {
    const [renderProjects, setProjectComp] = useState('All'); // Default state
    
    const [Projectflag1, setProjectFlag1] = useState(true);
    const [Projectflag2, setProjectFlag2] = useState(false);
    const [Projectflag3, setProjectFlag3] = useState(false);
    const [Projectflag4, setProjectFlag4] = useState(false);

    const navigate = useNavigate();

    const navigateAllProjects = () => {
        navigate(allRoute)
    }
    const navigateUiProjects = () => {
        navigate(uiRoute)
    }
    const navigateAppProjects = () => {
        navigate(appRoute)
    }
    const navigateWebProjects = () => {
        navigate(webRoute)
    }

  return (
    <>
        <div className={classes.ProjectsDiv}>
            <div className={classes.projectContent}>
                <h1>Our Projects</h1>
                <p>As seasoned creators of modern, user-friendly solutions, we aim to help you build the brand of your dreams.</p>
            </div>

            <div className={classes.projectButtons}>
                <button className={classes.allbtn} onMouseEnter={() => { setProjectComp("All"); setProjectFlag1(true); setProjectFlag2(false); setProjectFlag3(false); setProjectFlag4(false);}} style={{backgroundColor: Projectflag1 ? "#A2FF86" : "transparent",color: Projectflag1 ? "black" : "white",}}
                onClick={navigateAllProjects}>All</button>

                <button className={classes.webbtn} onMouseEnter={() => { setProjectComp("Web"); setProjectFlag1(false); setProjectFlag2(true); setProjectFlag3(false); setProjectFlag4(false);}} style={{backgroundColor: Projectflag2 ? "#A2FF86" : "transparent",color: Projectflag2 ? "black" : "white",}}
                onClick={navigateWebProjects}>Web Dev</button>

                <button className={classes.appbtn} onMouseEnter={() => { setProjectComp("App"); setProjectFlag1(false); setProjectFlag2(false); setProjectFlag3(true); setProjectFlag4(false);}} style={{backgroundColor: Projectflag3 ? "#A2FF86" : "transparent",color: Projectflag3 ? "black" : "white",}}
                onClick={navigateAppProjects}>App Dev</button>

                <button className={classes.uibtn}  onMouseEnter={() => { setProjectComp("UiUx"); setProjectFlag1(false); setProjectFlag2(false); setProjectFlag3(false); setProjectFlag4(true);}} style={{backgroundColor: Projectflag4 ? "#A2FF86" : "transparent", color: Projectflag4 ? "black" : "white",}}
                onClick={navigateUiProjects}>UI / UX</button>
            </div>

        </div>  
         <div className={classes.dynamicDiv2}>
            <div className={classes.ProjectBackground}>
                <div
                    className={`${classes.component2} ${
                        renderProjects === 'All' ? classes.active : ''
                    }`}
                >
                    <AllProjectsImages />
                    
                </div>
                <div
                    className={`${classes.component2} ${
                        renderProjects === 'Web' ? classes.active : ''
                    }`}
                >
                    <WebProjectsImages />
                </div>
                <div
                    className={`${classes.component2} ${
                        renderProjects === 'App' ? classes.active : ''
                    }`}
                >
                    <AppProjectsImages />
                </div>
                <div
                    className={`${classes.component2} ${
                        renderProjects === 'UiUx' ? classes.active : ''
                    }`}
                >
                    <UiUxProjectsImages />
                </div>
            </div>
        </div>
    </>
  )
}

export default OurProjects
