import React, {useEffect, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Devski_Logo from '../Images/Devski_Logo.png';
import Clients from '../Images/Clients.png';
import PlayButton from '../Images/PlayButton.png';
import whiteArrow from '../Images/whiteArrow.png';
import blackArrow from '../Images/blackArrow.png';
import roundwhiteArrow from '../Images/roundWhiteArrow.png';
import roundblackArrow from '../Images/roundBlackArrow.png';
import megaphone from '../Images/coverMegaphone.png';
import icon1 from '../Images/icon1.png';
import icon2 from '../Images/thunder.png';
import icon3 from '../Images/webflow.png';
import icon4 from '../Images/responsive.png';
import icon5 from '../Images/contract.png';
import icon6 from '../Images/dollar.png';
import icon7 from '../Images/cog.png';
import icon8 from '../Images/magnify.png';
import icon9 from '../Images/threeStars.png';
import star from '../Images/star.png';
import personPic from '../Images/personPic.png';
import WorkTogether from '../Images/WorkTogether.png';
import upwork from '../Images/upworkIcon.png';
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';
import HomePageCss from '../Css/HomePage.module.css';
import UiUxRender from './UiUxRender';
import WebRender from './WebRender';
import AppRender from './AppProjectsRender';
import FAQ from './FAQ';

function HomePage() {

    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${HomePageCss.hamburger}`);
        const navMenu = document.querySelector(`.${HomePageCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(HomePageCss.active);
            navMenu.classList.toggle(HomePageCss.active); 
          } 
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

    const [renderComponent, setRenderComponent] = useState('UiUX'); // Default state

   const [flag1, setFlag1] = useState(false);
   const [flag2, setFlag2] = useState(false);
   const [flag3, setFlag3] = useState(false);
   const [flag4, setFlag4] = useState(false);

    const navigate = useNavigate()

    const navigateAllProjects = () => {
        navigate('/devski-completeProjects')
    }
    const navigateAppProjects = () => {
        navigate('/devski-appDevProjects')
    }
    const navigateWebProjects = () => {
        navigate('/devski-projectsPage')
    }
    const navigateUiUXProjects = () => {
        navigate('/devski-UiUXProjects')
    }
    const navigateAboutus = () => {
        navigate('/devski-contactus')
    }
    const navigateInsta = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateUpwork = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateLinkedin = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    
    
  return (
    <>
    <div className={HomePageCss.main}>

      <header className={HomePageCss.header}>
        <nav className={HomePageCss.navbar}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <img src={Devski_Logo} className={HomePageCss.DevskiLogo} alt='logo'/>
            </Link>
            <ul className={HomePageCss.navMenu}>
                <li className={HomePageCss.home}>Home</li>
                <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.services}>Services</li>
                </Link>
                <Link to='/devski-completeProjects' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.projects}>Projects</li>
                </Link>
                <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.about}>About Us</li>
                </Link>
                <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.contact}>Contact Us</li>
                </Link>

            </ul>
            <div className={HomePageCss.hamburger}>
                <span className={HomePageCss.bar}></span>
                <span className={HomePageCss.bar}></span>
                <span className={HomePageCss.bar}></span>
            </div>
        </nav>
       </header>


        <div className={HomePageCss.turningVisions}>
            <div className={HomePageCss.coverText}>
                <h1>Turning Visions into <span>Reality</span></h1>
                <p>Unlock your business's potential with our tailored digital solutions. From design to development, we ensure your brand stands out and thrives.</p>
                <button onClick={navigateAboutus}>Book A Meeting</button>
            </div>
            <img src={megaphone} className={HomePageCss.megaphone} alt='megaphone'/>

        </div>
        <div className={HomePageCss.BlackBg}></div>
        <div className={HomePageCss.buildingDesign}>

            <div className={HomePageCss.chooseUsText}>
                <div className={HomePageCss.firstSection}>
                    <p>Why Choose Us</p>
                    <h1>Providing digital solutions for startups and enterprises</h1>
                    <hr></hr>
                </div>
                <div className={HomePageCss.secondSection}>
                    <h1>At Devski, we believe every project detail is crucial to achieving the goal. Our commitment to excellence ensures you’re fully engaged and satisfied throughout the process.</h1>
                </div>
            </div>

            <div className={HomePageCss.video}>

                <div className={HomePageCss.projectsCompleted}>
                    <div>
                        <h1>90<span>+</span></h1>
                        <h2>Projects Completed</h2>
                    </div>
                    <div>
                        <img src={Clients} className={HomePageCss.clients} alt='clients'/>
                        <p>50+ Clients</p>
                    </div>
                    
                </div>

                <div className={HomePageCss.playvideo}>
                    <div className={HomePageCss.weWork}>
                        <h1>
                            How We Work
                        </h1>
                    </div>
                    <div className={HomePageCss.playBtnDiv}>
                        <img src={PlayButton} className={HomePageCss.playButton} alt='play'/>
                    </div>
                </div>
            </div>

        </div>

        <div className={HomePageCss.servicesDiv}>
            <div className={HomePageCss.servicesContent}>
                <h1>Our Services</h1>
                <p>Devski offers a range of design services that are tailored to meet the unique needs of each client</p>
                <Link to= '/devski-devskiUiUx' style={{textDecoration: 'none'}} className={HomePageCss.webLink}>
                    <button id={HomePageCss.buttonHoverUiUx} onMouseEnter={() => { setRenderComponent("UiUX"); setFlag1(true); setFlag2(false); setFlag3(false); setFlag4(false)}} style={{color: flag1 ? "white" : "#444444",}}
                     className={HomePageCss.selectedBtn} ><span id={HomePageCss.number1} style={{color: flag1 ? "#A2FF86" : "#444444",}}>01</span> UI/UX Design <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                </Link>
                <Link to= '/devski-devskiWebdev' style={{textDecoration: 'none'}} className={HomePageCss.webLink}>
                    <button id={HomePageCss.buttonHoverWeb} onMouseEnter={() => { setRenderComponent("Web"); setFlag1(false); setFlag2(true); setFlag3(false); setFlag4(false)}} style={{color: flag2 ? "white" : "#444444",}}
                    classsName={HomePageCss.webDevService}><span id={HomePageCss.number2} style={{color: flag2 ? "#A2FF86" : "#444444",}}>02</span> Web Development <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                </Link>
                <Link to= '/devski-devskiAppDev' style={{textDecoration: 'none'}} className={HomePageCss.webLink}>
                    <button id={HomePageCss.buttonHoverApp}  onMouseEnter={() => { setRenderComponent("App"); setFlag1(false); setFlag2(false); setFlag3(true); setFlag4(false);}} style={{color: flag3 ? "white" : "#444444",}}
                        ><span id={HomePageCss.number3} style={{color: flag3 ? "#A2FF86" : "#444444",}}>03</span> App Development <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                </Link>
                <button id={HomePageCss.buttonHoverGraphicDesign} onMouseEnter={() =>{setFlag1(false); setFlag2(false); setFlag3(false); setFlag4(true);}} style={{color: flag4 ? "white" : "#444444",}}
                    ><span id={HomePageCss.number4} style={{color: flag4 ? "#A2FF86" : "#444444",}}>04</span> Graphic Design <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>

            </div>
             <div className={HomePageCss.dynamicDiv}>
                <div
                    className={`${HomePageCss.component} ${
                    renderComponent === 'UiUX' ? HomePageCss.active : ''
                    }`}
                >
                    <UiUxRender />
                </div>
                <div
                    className={`${HomePageCss.component} ${
                    renderComponent === 'Web' ? HomePageCss.active : ''
                    }`}
                >
                    <WebRender />
                </div>
                <div
                    className={`${HomePageCss.component} ${
                    renderComponent === 'App' ? HomePageCss.active : ''
                    }`}
                >
                    <AppRender />
                </div>
            </div>
        </div>

        <div className={HomePageCss.benefits}>
            <div className={HomePageCss.benefitsText}>
                <div className={HomePageCss.benefitsHeader}>
                    <p>BENEFITS</p>
                    <h1>Range of Unique Offerings that Go Beyond the Ordinary</h1>
                </div>
            </div>

            <div className={HomePageCss.megaGrid}>
                <div className={HomePageCss.grid}>
                    <div className={HomePageCss.boxes}>
                        <img src={icon1}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>1. Software Maintenance Support</p>
                        <p className={HomePageCss.boxText}>Enjoy peace of mind with 12 months of free maintenance services, ensuring your website or application runs smoothly and remains updated.</p>
                    </div>
                    <div className={HomePageCss.boxes}>
                        <img src={icon2}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>2. Zero Investment for Startups</p>
                        <p className={HomePageCss.boxText}>Start without upfront costs through our profit-sharing model, where we take a percentage of your profits, letting you concentrate on growth.</p>
                    </div>
                    <div className={HomePageCss.Lastboxes}>
                        <img src={icon3}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>3. User Training</p>
                        <p className={HomePageCss.boxText}>We provide thorough training sessions to ensure you and your team are well-versed in using your new application to its fullest potential.
                        </p>
                    </div>
                </div>
                <div className={HomePageCss.grid}>
                    <div className={HomePageCss.boxes}>
                        <img src={icon4}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>4. Free Basic Branding Package</p>
                        <p className={HomePageCss.boxText}>Enhance your brand identity with our complimentary branding package, including logo design, color scheme, and typography guidelines.</p>
                    </div>
                    <div className={HomePageCss.boxes}>
                        <img src={icon5}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>5. No Lock in contracts</p>
                        <p className={HomePageCss.boxText}>Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.</p>
                    </div>
                    <div className={HomePageCss.Lastboxes}>
                        <img src={icon6}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>6.Competitive Pricing</p>
                        <p className={HomePageCss.boxText}>We offer competitive pricing less than the market rates, ensuring you get top-notch services without breaking the bank.</p>
                    </div>
                </div>
                <div className={HomePageCss.grid}>
                    <div className={HomePageCss.boxes} style={{borderColor: 'transparent #A2FF864D transparent transparent'}}>
                        <img src={icon7}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>7. Flexible Software Models</p>
                        <p className={HomePageCss.boxText}>Choose the software development model that best suits your project requirements. Whether you prefer Agile, Scrum, or Waterfall, we have the expertise to deliver.</p>
                    </div>
                    <div className={HomePageCss.boxes}  style={{borderColor: 'transparent #A2FF864D transparent transparent'}}>
                        <img src={icon8}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>8. Multi-Language Support</p>
                        <p className={HomePageCss.boxText}>Expand globally with free multi-language support for web and app development, including up to 3 languages in design and branding.</p>
                    </div>
                    <div className={HomePageCss.Lastboxes}  style={{borderColor: 'transparent transparent transparent transparent'}}>
                        <img src={icon9}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>9. Custimized for you</p>
                        <p className={HomePageCss.boxText}>We design and build custom for you. We're never starting from a template unless you want that? You don't, right?</p>
                    </div>
                </div>
            </div>
        </div>

        
        <div className={HomePageCss.ProjectsDiv}>
            <div className={HomePageCss.projectContent}>
                <h1>Our Projects</h1>
                <p>As seasoned creators of modern, user-friendly solutions, we aim to help you build the brand of your dreams.</p>
            </div>

            <div className={HomePageCss.projectButtons}>
                <button className={HomePageCss.allbtn} onClick={navigateAllProjects}>All</button>
                <button className={HomePageCss.webbtn} onClick={navigateWebProjects}>Web Dev</button>
                <button className={HomePageCss.appbtn} onClick={navigateAppProjects}>App Dev</button>
                <button className={HomePageCss.uibtn}  onClick={navigateUiUXProjects}>UI / UX</button>
            </div>

        </div>

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

        <div className={HomePageCss.sliderContainer}>
            <div className={HomePageCss.slider}>
                <div className={HomePageCss.qoutes}>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1>Create</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1>Transform</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1>Empower</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1>Inspire</h1><p></p>
                </div>
                {/* Repeat the same content to create a seamless loop */}
                <div className={HomePageCss.qoutes}>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Create</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Transform</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Empower</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Inspire </h1><p></p>
                </div>
                <div className={HomePageCss.qoutes}>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Create</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Transform</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Empower</h1>
                    <img src={star} className={HomePageCss.star} alt="star" />
                    <h1 className={HomePageCss.qoutesHeader}>Inspire </h1><p></p>
                </div>
            </div>
        </div>

        <div className={HomePageCss.testimonials}>
            <div className={HomePageCss.testimonialContent}>
                <p className={HomePageCss.contentPhrase}> Client Feedback</p>
                <h1>Happy Words From Happy Customers</h1>
                <hr></hr>
                <div className={HomePageCss.testimonialCard}>
                    <div className={HomePageCss.testimonialText}>
                        <p style={{fontWeight:'400'}}>GymStory</p>
                        <h1>Devski is the best digital agency i have ever seen! Highly Recommended!</h1>
                        <p>I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.</p>
                        <div>
                            <p style={{fontWeight:'600'}}>Diana Loreza</p>
                            <p>Director of <span style={{fontWeight:'400', letterSpacing:'.5px', fontSize:'13px'}}>GYMSTORY</span></p>
                        </div>
                    </div>
                    <img src={personPic} alt='person' className={HomePageCss.testifier}/>
                </div>
            </div>
        </div>
        <FAQ/>
        <div className={HomePageCss.FooterMain}> 
            <div className={HomePageCss.EveryFooterDiv}>
                <div className={HomePageCss.AllColumn}>
                    <div className={HomePageCss.RightColumn}>
                        <h1 style={{marginBottom:'2px'}}>Contact</h1>
                        <h2>devski@info.io</h2>
                    </div>
                    <div className={HomePageCss.MiddleColumn}>
                        <h1>Got a project? Want to collaborate? </h1>
                        <button className={HomePageCss.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg></button>
                    </div>
                    <div className={HomePageCss.LeftColumn}>
                        <h1>United States of America</h1>
                        <h2>5570 FM 423 Ste 250 Apt# 1120</h2>
                        <h3>Frisco, TX 75036</h3>
                        <h4 style={{marginTop: '-2px'}}>Texas</h4>
                    </div>
                </div>
                <div className={HomePageCss.ThinLine}>
                    <div className={HomePageCss.SocialMedia}>
                        <img src = {upwork} className={HomePageCss.upwork}  onClick={navigateUpwork} alt = "behance"/>
                        <img src = {Insta} className={HomePageCss.Insta} onClick={navigateInsta} alt = "Insta"/>
                        <img src = {linkedin} className={HomePageCss.linkedin} onClick={navigateLinkedin} alt = "linkedin"/>
                    </div>
                </div>
            </div>
            
            <div className={HomePageCss.FooterHeading}>
                 <img src = {WorkTogether}className={HomePageCss.WorkTogether} alt = "WorkTogether"/>
            </div>
        </div>

    </div>  
    </>
  )
}

export default HomePage