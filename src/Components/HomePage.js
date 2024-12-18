import React, {useEffect, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Devski_Logo from '../Images/Devski_Logo.png';
import Clients from '../Images/Clients.png';
import PlayButton from '../Images/PlayButton.png';
import whiteArrow from '../Images/whiteArrow.png';
import blackArrow from '../Images/blackArrow.png';
import roundwhiteArrow from '../Images/roundWhiteArrow.png';
import roundblackArrow from '../Images/roundBlackArrow.png';
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
import DownIcon from '../Images/DownIcon.png';
import WorkTogether from '../Images/WorkTogether.png';
import behance from '../Images/behance.png';
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';
import HomePageCss from '../Css/HomePage.module.css';

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

    const expandAnswer1 = () => {
        var open = document.getElementById(`${HomePageCss.expandedBlock1}`)
        var parentDiv = document.getElementById(`${HomePageCss.question1}`)
        var formHeight = document.getElementById(`${HomePageCss.FAQ}`)
        var footer = document.getElementById(`${HomePageCss.FooterMain}`)

        if (open.style.display === "block") {
            open.style.display = "none";
            parentDiv.style.borderRadius = "1rem 1rem 1rem 1rem";
            parentDiv.style.marginBottom = "0px";
        } 
        else {
            open.style.display = "block";
            parentDiv.style.marginBottom = "80px";
            parentDiv.style.borderRadius = "1rem 1rem 0rem 0rem";
        }
        
        if(formHeight.style.height > '600px'){
            footer.style.marginTop = '200px';
        }
    }
    const expandAnswer2 = () => {
        var open = document.getElementById(`${HomePageCss.expandedBlock2}`)
        var parentDiv = document.getElementById(`${HomePageCss.question2}`)
        var formHeight = document.getElementById(`${HomePageCss.FAQ}`)
        var footer = document.getElementById(`${HomePageCss.FooterMain}`)

        if (open.style.display === "block") {
            open.style.display = "none";
            parentDiv.style.borderRadius = "1rem 1rem 1rem 1rem";
            parentDiv.style.marginBottom = "0px";
        } 
        else {
            open.style.display = "block";
            parentDiv.style.marginBottom = "80px";
            parentDiv.style.borderRadius = "1rem 1rem 0rem 0rem";
        } 
        if(formHeight.style.height > '600px'){
            footer.style.marginTop = '200px';
        }   
    }
    const expandAnswer3 = () => {
        var open = document.getElementById(`${HomePageCss.expandedBlock3}`)
        var parentDiv = document.getElementById(`${HomePageCss.question3}`)
        var formHeight = document.getElementById(`${HomePageCss.FAQ}`)
        var footer = document.getElementById(`${HomePageCss.FooterMain}`)

        if (open.style.display === "block") {
            open.style.display = "none";
            parentDiv.style.borderRadius = "1rem 1rem 1rem 1rem";
            parentDiv.style.marginBottom = "0px";
        } 
        else {
            open.style.display = "block";
            parentDiv.style.marginBottom = "80px";
            parentDiv.style.borderRadius = "1rem 1rem 0rem 0rem";
        } 
        if(formHeight.style.height > '600px'){
            footer.style.marginTop = '200px';
        }   
    }
    const expandAnswer4 = () => {
        var open = document.getElementById(`${HomePageCss.expandedBlock4}`)
        var parentDiv = document.getElementById(`${HomePageCss.question4}`)
        var formHeight = document.getElementById(`${HomePageCss.FAQ}`)
        var footer = document.getElementById(`${HomePageCss.FooterMain}`)

        if (open.style.display === "block") {
            open.style.display = "none";
            parentDiv.style.borderRadius = "1rem 1rem 1rem 1rem";
            parentDiv.style.marginBottom = "0px";
        } 
        else {
            open.style.display = "block";
            parentDiv.style.marginBottom = "80px";
            parentDiv.style.borderRadius = "1rem 1rem 0rem 0rem";
        } 
        if(formHeight.style.height > '600px'){
            footer.style.marginTop = '200px';
        }  
    }

    const changeColor = () => {
        const button = document.getElementById(`.${HomePageCss.buttonHover}`);
        const number = document.getElementById(`.${HomePageCss.number2}`);
        if (button && number){
            number.style.color = '#A2FF86';
        }
    }

    const navigate = useNavigate()

    const navigateAllProjects = () => {
        navigate('/completeProjects')
    }
    const navigateAppProjects = () => {
        navigate('/appDevProjects')
    }
    const navigateWebProjects = () => {
        navigate('/projectsPage')
    }
    const navigateUiUXProjects = () => {
        navigate('/UiUXProjects')
    }
    
    const [questions, setQuestions] = useState();

    // const handleChange = (e) => {
    //     const textValue = e.target.value
    //     setQuestions(textValue)
    // }

    // const handleSubmitMail = async (e) => { 
    //     e.preventDefault() 
    //     try {
    //       // Make API call to approve volunteer request using fetch
    //       const response = await fetch('http://localhost:3000/sendMail', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         // You can pass any necessary data here in the body
    //         // For example: JSON.stringify({ volunteerId: 'volunteerIdHere' })
    //         body: JSON.stringify(task) //volEmail instead of this ?
    //       });
    
    //       if (!response.ok) {
    //         throw new Error('Failed to send mail');
    //       }
    
    //       alert('Task email sent successfully.');
    //     } 
    //     catch (error) {
    //       console.error('Error in sending mail:', error);
    //       alert('Error in sending mail to volunteer. Please try again later.');
    //     } 
    //   };
    
    
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
                <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.services}>Services</li>
                </Link>
                <Link to='/completeProjects' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.projects}>Projects</li>
                </Link>
                <Link to='/aboutus' style={{textDecoration: 'none'}}>
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
                <button>Book A Meeting</button>
                
            </div>
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
                    <img src={Clients} className={HomePageCss.clients} alt='clients'/>


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
                <Link to='/devskiUiUx' style={{textDecoration: 'none'}} className={HomePageCss.webLink}>
                    <button id={HomePageCss.buttonHover} className={HomePageCss.selectedBtn} style={{color: 'white'}}><span className={HomePageCss.number1}>01</span> UI/UX Design <img src={whiteArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                </Link>
                <Link to= '/devskiWebdev' style={{textDecoration: 'none'}} className={HomePageCss.webLink}>
                    <button id={HomePageCss.buttonHover} onMouseEnter={changeColor} classsName={HomePageCss.webDevService}><span id={HomePageCss.number2}>02</span> Web Development <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                </Link>
                <Link to= '/devskiAppDev' style={{textDecoration: 'none'}} className={HomePageCss.webLink}>
                    <button id={HomePageCss.buttonHover}><span id={HomePageCss.number3}>03</span> App Development <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                </Link>
                <button id={HomePageCss.buttonHover}><span id={HomePageCss.number4}>04</span> Graphic Design <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>

            </div>

            <div className={HomePageCss.projectsImages}>
                <div className={HomePageCss.UiProjects}>
                    <p>UI/UX Projects</p>
                    <img src={roundwhiteArrow} alt='uiuxprojects'/>
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
                            <img src={roundwhiteArrow} className={HomePageCss.whiteRoundArrow} alt='roundblackArrow'/>
                        </div>
                    </div>
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
                        <p className={HomePageCss.boxText}>PuEnjoy peace of mind with 12 months of free maintenance services, ensuring your website or application runs smoothly and remains updated.</p>
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

        <div className={HomePageCss.qoutes}>
            <h1>Create</h1>
            <img src={star} className={HomePageCss.star} alt='star'/>
            <h1>Transform</h1>
            <img src={star} className={HomePageCss.star} alt='star'/>
            <h1>Empower</h1>
            <img src={star} className={HomePageCss.star} alt='star'/>
            <h1>Inspire</h1>
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

        <div id={HomePageCss.FAQ}>
            <div className={HomePageCss.faqHeader}>
                <h1>FAQs</h1>
                <p>Life is short why spent to design from scratch, Use finalui templates and its dummy text like lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div id={HomePageCss.faqForm}>
                <div className={HomePageCss.dropdowns}>
                    <div id={HomePageCss.question1}>
                         <div id={HomePageCss.buttonText}>
                            <p>Do you have specific princing plans to show?</p>
                            <button onClick={expandAnswer1}><img src={DownIcon} className={HomePageCss.downIcon} alt='downicon'/></button>
                        </div> 
                        <div id={HomePageCss.expandedBlock1}>
                            <p>Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.
                            </p>
                        </div>  
                    </div>
                    <div id={HomePageCss.question2}>
                         <div id={HomePageCss.buttonText}>
                            <p>How many years of experience do you have?</p>
                            <button onClick={expandAnswer2}><img src={DownIcon} className={HomePageCss.downIcon} alt='downicon'/></button>
                        </div> 
                        <div id={HomePageCss.expandedBlock2}>
                            <p>Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.
                            </p>
                        </div>  
                    </div>
                    <div id={HomePageCss.question3}>
                         <div id={HomePageCss.buttonText}>
                            <p>What companies have you worked with?</p>
                            <button onClick={expandAnswer3}><img src={DownIcon} className={HomePageCss.downIcon} alt='downicon'/></button>
                        </div> 
                        <div id={HomePageCss.expandedBlock3}>
                            <p>Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.
                            </p>
                        </div>  
                    </div>
                    <div id={HomePageCss.question4}>
                         <div id={HomePageCss.buttonText}>
                            <p>Am I safe leaving my company in your hands?</p>
                            <button onClick={expandAnswer4}><img src={DownIcon} className={HomePageCss.downIcon} alt='downicon'/></button>
                        </div> 
                        <div id={HomePageCss.expandedBlock4}>
                            <p>Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.
                            </p>
                        </div>  
                    </div>

                </div>
                <div className={HomePageCss.faqTextarea} >
                    <textarea rows='21' cols='45' placeholder='Ask us want you want to know...'/>
                    <div className={HomePageCss.faqButton}>
                        <p>We will answer your questions via email within 48 hours.</p>
                        <button type='submit'>Send</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={HomePageCss.FooterMain}>
            
            <div className={HomePageCss.EveryFooterDiv}>

                <div className={HomePageCss.AllColumn}>
                    <div className={HomePageCss.RightColumn}>
                        <h1>Contact</h1>
                        <h2>devski@info.io</h2>
                        <h3>d0318-0010470</h3>
                    </div>
                    <div className={HomePageCss.MiddleColumn}>
                        <h1>Got a project? Want to collaborate? </h1>
                        <button className={HomePageCss.CardButton}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg></button>
                    </div>
                    <div className={HomePageCss.LeftColumn}>
                        <h1>America</h1>
                        <h2>Jln. Bambu No. 375</h2>
                        <h3>Samarinda, Kalimantan Timur</h3>
                        <h4>Hong Kong</h4>
                        <h5>60 Ya Fung Sung</h5>
                        <h6>San Tsuen, 75129</h6>
                    </div>
                </div>
                <div className={HomePageCss.ThinLine}>
                    <h1>© Copyright 2024. Aditama Studio. All rights reserved.</h1>
                    <h2>Terms & Conditions</h2>
                    <div className={HomePageCss.SocialMedia}>
                        <img src = {behance} className={HomePageCss.behance} alt = "behance"/>
                        <img src = {Insta} className={HomePageCss.Insta} alt = "Insta"/>
                        <img src = {linkedin} className={HomePageCss.linkedin} alt = "linkedin"/>
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