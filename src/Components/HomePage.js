import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Devski_Logo from '../Images/Devski_Logo.png';
import Clients from '../Images/Clients.png';
import PlayButton from '../Images/PlayButton.png';
import o1 from '../Images/01.png';
import o2 from '../Images/02.png';
import o3 from '../Images/03.png';
import o4 from '../Images/04.png';
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
import Project1 from '../Images/proj1.png';
import Project2 from '../Images/proj2.png';
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
            // open.style.marginBottom = '200px';
        } 
        if(formHeight.style.height > '600px'){
            footer.style.marginTop = '200px';
        }  
    }

   // Get the button element
   useEffect(() => {
    const button = document.getElementById(`.${HomePageCss.buttonHover}`);
    const number = document.getElementById(`.${HomePageCss.number2}`);

    if (button && number) {
      // Add a mouseover event listener
      button.addEventListener('mouseover', () => {
        number.style.backgroundColor = '#A2FF86';
      });

      // Add a mouseout event listener
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#444444';
      });

      // Clean up the event listeners on component unmount
      return () => {
        button.addEventListener('mouseover', () => {
          number.style.backgroundColor = '#A2FF86';
        });
        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = '#444444';
        });
      };
    } else {
      console.error('Button or number element not found!');
    }
  }, []); // Empty dependency array to run this once when the component mounts

       
    
    
  return (
    <>
    <div className={HomePageCss.main}>

      <header className={HomePageCss.header}>
        <nav className={HomePageCss.navbar}>
            <img src={Devski_Logo} className={HomePageCss.DevskiLogo} alt='logo'/>
            <ul className={HomePageCss.navMenu}>
                <li className={HomePageCss.home}>Home</li>
                <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.services}>Services</li>
                </Link>
                <Link to='/projectsPage' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.projects}>Projects</li>
                </Link>
                <Link to='/aboutus' style={{textDecoration: 'none'}}>
                    <li className={HomePageCss.about}>About Us</li>
                </Link>
                <Link to='/' style={{textDecoration: 'none'}}>
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
                <p>We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.</p>
                <button>Book A Meeting</button>
                
            </div>
        </div>
        <div className={HomePageCss.BlackBg}></div>
        <div className={HomePageCss.buildingDesign}>

            <div className={HomePageCss.chooseUsText}>
                <div className={HomePageCss.firstSection}>
                    <p>Why Choose Us</p>
                    <h1>Building a design easy for business</h1>
                    <hr></hr>
                </div>
                <div className={HomePageCss.secondSection}>
                    <h1>We never underestimate any parts of each project as they're all essential to meeting the ultimate goal, you'll be engaged in with our positive and enthusiatic attitude</h1>
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
                <button id={HomePageCss.buttonHover} className={HomePageCss.selectedBtn} style={{color: 'white'}}><span className={HomePageCss.number1}>01</span> UI/UX Design <img src={whiteArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                <button id={HomePageCss.buttonHover}><span id={HomePageCss.number2}>02</span> Web Development <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                <button id={HomePageCss.buttonHover}><span id={HomePageCss.number3}>03</span> App Development <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>
                <button id={HomePageCss.buttonHover}><span id={HomePageCss.number4}>04</span> Graphic Design <img src={blackArrow} className={HomePageCss.arrow} alt='arrow'/></button>

            </div>

            <div className={HomePageCss.projectsImages}>
                <div className={HomePageCss.UiProjects}>
                    <p>UI/UX Projects</p>
                    <img src={roundwhiteArrow} alt='uiuxprojects'/>
                </div>

                <div className={HomePageCss.meetExpert}>
                    <div className={HomePageCss.howWork}>
                        <p>Ever wondered how design magic happens?</p>
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
                    <h1>The design subscription that connects you to your dream team</h1>
                </div>
                <p className={HomePageCss.benefitsPara}>A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.</p>
            </div>

            <div className={HomePageCss.megaGrid}>
                <div className={HomePageCss.grid}>
                    <div className={HomePageCss.boxes}>
                        <img src={icon1}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>1. On-demand requests</p>
                        <p className={HomePageCss.boxText}>Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.</p>
                    </div>
                    <div className={HomePageCss.boxes}>
                        <img src={icon2}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>2. Top-notch quality</p>
                        <p className={HomePageCss.boxText}>High-end work from a dedicated team of senior designers that's always available when you need it.</p>
                    </div>
                    <div className={HomePageCss.Lastboxes}>
                        <img src={icon3}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>3. Powered by - Webflow</p>
                        <p className={HomePageCss.boxText}>We build every site on Webflow, making them dynamic, accessible, and easily scalable. It’s easy for you like Squarespace but better.
                        </p>
                    </div>
                </div>
                <div className={HomePageCss.grid}>
                    <div className={HomePageCss.boxes}>
                        <img src={icon4}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>4. Fast. Responsive. Reliable.</p>
                        <p className={HomePageCss.boxText}>PGet regular updates on your projects and can expect to receive your designs within 2-3 days.</p>
                    </div>
                    <div className={HomePageCss.boxes}>
                        <img src={icon5}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>5. No Lock in contracts</p>
                        <p className={HomePageCss.boxText}>Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.</p>
                    </div>
                    <div className={HomePageCss.Lastboxes}>
                        <img src={icon6}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>6.Great value for moneys</p>
                        <p className={HomePageCss.boxText}>Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr).</p>
                    </div>
                </div>
                <div className={HomePageCss.grid}>
                    <div className={HomePageCss.boxes} style={{borderColor: 'transparent #A2FF864D transparent transparent'}}>
                        <img src={icon7}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>7. Customized for you</p>
                        <p className={HomePageCss.boxText}>PWe design and build custom for you. We’re never starting from a template unless you want that? You don't, right?.</p>
                    </div>
                    <div className={HomePageCss.boxes}  style={{borderColor: 'transparent #A2FF864D transparent transparent'}}>
                        <img src={icon8}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>8. Creative paying</p>
                        <p className={HomePageCss.boxText}>We’re here when you need us and not on payroll when you don’t.</p>
                    </div>
                    <div className={HomePageCss.Lastboxes}  style={{borderColor: 'transparent transparent transparent transparent'}}>
                        <img src={icon9}  className={HomePageCss.boxIcon} alt='icon'/>
                        <p className={HomePageCss.boxHeader}>9. Expert turnoverss</p>
                        <p className={HomePageCss.boxText}>You’re getting 10+ years of design experience with every request. No hand-holding required.</p>
                    </div>
                </div>
            </div>
        </div>

        
        <div className={HomePageCss.ProjectsDiv}>
            <div className={HomePageCss.projectContent}>
                <h1>Our Projects</h1>
                <p>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
            </div>

            <div className={HomePageCss.projectButtons}>
                <button className={HomePageCss.allbtn}>All</button>
                <button className={HomePageCss.webbtn}>Web Dev</button>
                <button className={HomePageCss.appbtn}>App Dev</button>
                <button className={HomePageCss.uibtn}>UI / UX</button>
            </div>

        </div>

        <div className={HomePageCss.ProjectBackground}>
            <div className={HomePageCss.appProjectsPic}>
                <div className={HomePageCss.appProj}></div>
                <p>Carreri</p>
                <p>Mobile App</p>
            </div>

            <div className={HomePageCss.uiProjectsPic}>
                <div className={HomePageCss.uiProj}></div>
                <p>Tansto</p>
                <p>Web Design</p>
            </div>
        </div>

        <div className={HomePageCss.qoutes}>
            <h1>Innovate</h1>
            <img src={star} className={HomePageCss.star} alt='star'/>
            <h1>Inspire</h1>
            <img src={star} className={HomePageCss.star} alt='star'/>
            <h1>Create</h1>
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
                <div className={HomePageCss.faqTextarea}>
                    <textarea rows='21' cols='45' placeholder='Ask us want you want to know...'/>
                    <div className={HomePageCss.faqButton}>
                        <p>We will answer your questions via email within 48 hours.</p>
                        <button>Send</button>
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