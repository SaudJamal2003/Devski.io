import React, {useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppDevProjectsCss from "../Css/AppDevProject.module.css"
import Devski_Logo from '../Images/Devski_Logo.png';
import play from '../Images/PlayButton.png';
import strategyIcon from '../Images/strategyIcon.png'
import flameIcon from '../Images/flameIcon.png'
import userIcon from '../Images/userIcon.png'
import starsIcon from '../Images/starsIcon.png'
import CardImage from '../Images/CardImage.png'
import WorkTogether from '../Images/WorkTogether.png'
import behance from '../Images/behance.png'
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'
import nomNomPic from '../Images/NomNomPic.png'
// import NomNomVideo from '../Images/NomNom'

function AppDevProjects() {
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${AppDevProjectsCss.hamburger}`);
        const navMenu = document.querySelector(`.${AppDevProjectsCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(AppDevProjectsCss.active);
            navMenu.classList.toggle(AppDevProjectsCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

  
    const cloudinaryRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (cloudinaryRef.current) return; // Ensure it initializes only once
        if (!window.cloudinary) {
            console.error("Cloudinary is not loaded!");
            return;
        }
    
        cloudinaryRef.current = window.cloudinary;
    
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'saudjamal', // Replace with your actual Cloudinary cloud name
            public_id: 'NomNomNerdsVideo', // Replace with your video public_id
            controls: true,
            autoplay: true,
            muted: false,
            height: 400,
            width: 800,
            crop: "fit",
        });
    }, []);

    const navigate = useNavigate()

    const navigateAllProjects = () => {
        navigate('/completeProjects')
    }
    const navigateWebProjects = () => {
        navigate('/projectsPage')
    }
    const navigateUiUXProjects = () => {
        navigate('/UiUXProjects')
    }
  return (
    <>
        <div className={AppDevProjectsCss.main}>

            <div className={AppDevProjectsCss.cover}>

                <header className={AppDevProjectsCss.header}>
                <nav className={AppDevProjectsCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={AppDevProjectsCss.DevskiLogo} alt='logo'/>
                </Link>
                            <ul className={AppDevProjectsCss.navMenu}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                        <li className={AppDevProjectsCss.home}>Home</li>
                        </Link>
                        <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                        <li className={AppDevProjectsCss.services}>Services</li>
                        </Link>
                        <Link to='/projectsPage' style={{textDecoration: 'none'}}>
                            <li className={AppDevProjectsCss.projects}>Projects</li>
                        </Link>
                        <Link to='/aboutus' style={{textDecoration: 'none'}}>
                            <li className={AppDevProjectsCss.about}>About Us</li>
                        </Link>
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <li className={AppDevProjectsCss.contact}>Contact Us</li>
                        </Link>
                    </ul>
                    <div className={AppDevProjectsCss.hamburger}>
                        <span className={AppDevProjectsCss.bar}></span>
                        <span className={AppDevProjectsCss.bar}></span>
                        <span className={AppDevProjectsCss.bar}></span>
                    </div>
                </nav>
                </header>

                <h1>Our <span>Projects</span></h1>

            </div>

            <div className={AppDevProjectsCss.featuredProjects}>
                <div className={AppDevProjectsCss.projectButtons}>
                    <button className={AppDevProjectsCss.allbtn} onClick={navigateAllProjects}>All</button>
                    <button className={AppDevProjectsCss.webbtn} onClick={navigateWebProjects}>Web Dev</button>
                    <button className={AppDevProjectsCss.appbtn}>App Dev</button>
                    <button className={AppDevProjectsCss.uibtn} onClick={navigateUiUXProjects}>UI / UX</button>
                </div>

                {/* <div className={AppDevProjectsCss.video}> */}
                    {/* <h1>Featured Project</h1> */}
                    {/* <video ref={videoRef} data-cld-public-id="videos/NomNomNerdsVideo"/> */}
                        {/* <video  ref={videoRef} data-cld-public-id='NomNomNerdsVideo_fqdc89' className={AppDevProjectsCss.Projectvideo} autoplay loop/> */}
                        {/* <video style={{display:'none'}} ref={videoRef} data-cld-public-id='CafeStreetVideo_oiwvbb' className={AppDevProjectsCss.Projectvideo} autoplay loop/> */}
                {/* </div> */}


                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <video
                    ref={videoRef}
                    data-cld-public-id="NomNomNerdsVideo_fqdc89"
                    className={AppDevProjectsCss.Projectvideo}
                    autoPlay
                    loop
                />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={CardImage} alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={CardImage} alt="Third slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>






























                <div className={AppDevProjectsCss.projectPictures}>
                    <div className={AppDevProjectsCss.appProjectsPic}>
                        <div className={AppDevProjectsCss.appProj1}></div>
                        <h2>Shoplon</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={AppDevProjectsCss.uiProjectsPic}>
                        <div className={AppDevProjectsCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
                    </div>
                 </div>
                  
                <div className={AppDevProjectsCss.projectPictures}>
                    <div className={AppDevProjectsCss.appProjectsPic}>
                        <div className={AppDevProjectsCss.appProj2}></div>
                        <h2>Carreri</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={AppDevProjectsCss.uiProjectsPic}>
                        <div className={AppDevProjectsCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
                    </div>
                 </div>

            </div>
            
            <div className={AppDevProjectsCss.keyFeatures}>
                <div className={AppDevProjectsCss.keyFeaturesWavy}>
                    <h1><span>Key Features</span> of Our Projects</h1>
                {/* </div> */}
                    <div className={AppDevProjectsCss.featureAttributes}>

                        <div className={AppDevProjectsCss.firstRow}>

                            <div className={AppDevProjectsCss.strategicPlan}>
                                <img src={strategyIcon} className={AppDevProjectsCss.strategyIcon} alt='strategyIcon'/>
                                <h2>Strategic Planning</h2>
                                <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                            </div>
                            <hr></hr>

                            <div className={AppDevProjectsCss.strategicPlan}>
                                <img src={flameIcon} className={AppDevProjectsCss.flameIcon} alt='flameIcon'/>
                                <h2>Collaborative Process</h2>
                                <p>We work closely with clients throughout the project to ensure alignment with their vision and objectives.</p>
                            </div>
                            <hr></hr>

                            <div className={AppDevProjectsCss.strategicPlan}>
                                <img src={userIcon} className={AppDevProjectsCss.userIcon} alt='userIcon'/>
                                <h2>User-Centric Approach</h2>
                                <p style={{width:'82%'}}>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</p>
                            </div>

                        </div>
                        
                        {/* <hr/> */}

                        <div className={AppDevProjectsCss.secondRow}>
                            <div className={AppDevProjectsCss.edgeTechnology}>
                                <img src={starsIcon} className={AppDevProjectsCss.strategyIcon} alt='starsIcon'/>
                                <h2>Cutting-Edge Technologies</h2>
                                <p>We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.</p>
                            </div>
                            <hr></hr>

                            <div className={AppDevProjectsCss.TimelyDelivery}>
                                <img src={starsIcon} className={AppDevProjectsCss.flameIcon} alt='starsIcon'/>
                                <h2>Timely Delivery</h2>
                                <p>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={AppDevProjectsCss.MainCard}>
                <div className={AppDevProjectsCss.Card}>
                    <div className={AppDevProjectsCss.CardText}>
                        <h1>Help To Build Your Dream Project</h1>
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <button className={AppDevProjectsCss.CardButton}>
                            Discuss Your Project
                            <span> </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                            </svg>
                        </button>
                    </div>
                    <img src={CardImage} className={AppDevProjectsCss.CardImage} alt="CardImage"/>
                </div>
            </div>

            
            <div className={AppDevProjectsCss.FooterMain}>
                
                <div className={AppDevProjectsCss.EveryFooterDiv}>

                    <div className={AppDevProjectsCss.AllColumn}>
                        <div className={AppDevProjectsCss.RightColumn}>
                            <h1>Contact</h1>
                            <h2>devski@info.io</h2>
                            <h3>d0318-0010470</h3>
                        </div>
                        <div className={AppDevProjectsCss.MiddleColumn}>
                            <h1>Got a project? Want to collaborate? </h1>
                            <button className={AppDevProjectsCss.CardButton}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                                </svg></button>
                            </div>
                        <div className={AppDevProjectsCss.LeftColumn}>
                            <h1>America</h1>
                            <h2>Jln. Bambu No. 375</h2>
                            <h3>Samarinda, Kalimantan Timur</h3>
                            <h4>Hong Kong</h4>
                            <h5>60 Ya Fung Sung</h5>
                            <h6>San Tsuen, 75129</h6>
                        </div>
                    </div>
                <div className={AppDevProjectsCss.ThinLine}>
                        <h1>© Copyright 2024. Aditama Studio. All rights reserved.</h1>
                        <h2>Terms & Conditions</h2>
                        <div className={AppDevProjectsCss.SocialMedia}>
                            <img src = {behance} className={AppDevProjectsCss.behance} alt = "behance"/>
                            <img src = {Insta} className={AppDevProjectsCss.Insta} alt = "Insta"/>
                            <img src = {linkedin} className={AppDevProjectsCss.linkedin} alt = "linkedin"/>
                        </div>
                    </div>
                </div>
                
                <div className={AppDevProjectsCss.FooterHeading}>
                    <img src = {WorkTogether}className={AppDevProjectsCss.WorkTogether} alt = "WorkTogether"/>
                </div>
            </div>

            

        


            

        </div>
    
    </>
)
}

export default AppDevProjects