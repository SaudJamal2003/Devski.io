import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactusCss from '../Css/Contactus.module.css';
import MultiRangeSlider from './MultiRangeSlider';
import Devski_Logo from '../Images/Devski_Logo.png';
import WorkTogether from '../Images/WorkTogether.png';
import Insta from '../Images/Insta.png';
import linkedin from '../Images/linkedin.png';
import upwork from '../Images/upworkIcon.png';
import mail from '../Images/mail_icon.png';
import telephone from '../Images/telephone.png';
import location from '../Images/location.png';
import fb from '../Images/fb_logo_contact.png';
import twitter from '../Images/twitter_logo_contact.png';
import linkedin_logo from '../Images/ln_logo_contact.png';
import Footer from './Footer';
import emailjs from 'emailjs-com';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        webDesign: false,
        appDesign: false,
        collaboration: false,
        others: false,
        minBudget: 0,
        maxBudget: 1000
    });
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${ContactusCss.hamburger}`);
        const navMenu = document.querySelector(`.${ContactusCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(ContactusCss.active);
            navMenu.classList.toggle(ContactusCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

    const navigate = useNavigate();

    const navigateInsta = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateUpwork = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateLinkedin = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateAboutus = () => {
        navigate('/devski-contactus')
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    const handleRangeChange = ({ min, max }) => {
        setFormData(prevState => ({
            ...prevState,
            minBudget: min,
            maxBudget: max
        }));
    }

    const handleSubmit = () => {
        const { name, email, message } = formData;

        if(name === ""){
            alert('Enter your full name');
        }
        else if(email === ""){
            alert('Enter your Email');
        }
        else if(message === ""){
            alert('Can not send empty message');
        }
        else if (name !== "" && email !== "" && message !== ""){
            sendEmail();
        }
        else{
            alert('Information Empty');
        }
    }

    const sendEmail = () => {
        setLoading(true);
        
        // For debugging - log what we're sending
        console.log("Sending form data:", formData);
        
        // Create a formatted message that includes all form data
        const formattedMessage = `
Message: ${formData.message}

Contact Reason:
- Web Design: ${formData.webDesign ? 'Yes' : 'No'}
- Mobile App Design: ${formData.appDesign ? 'Yes' : 'No'}
- Collaboration: ${formData.collaboration ? 'Yes' : 'No'}
- Others: ${formData.others ? 'Yes' : 'No'}

Budget Range: $${formData.minBudget} - $${formData.maxBudget}
`;

        // Prepare the template parameters for EmailJS
        const templateParams = {
            to_name: 'Devski Team',
            user_name: formData.name,
            user_email: formData.email,
            message: formattedMessage,
            reply_to: formData.email,
            subject: 'New Contact Form Submission',
            // Include individual fields as well
            web_design: formData.webDesign ? 'Yes' : 'No',
            app_design: formData.appDesign ? 'Yes' : 'No',
            collaboration: formData.collaboration ? 'Yes' : 'No',
            others: formData.others ? 'Yes' : 'No',
            budget_range: `$${formData.minBudget} - $${formData.maxBudget}`
        };

        // Your EmailJS credentials
        const serviceId = 'service_gztvq7d';
        const templateId = 'template_ul6ydlj';
        const userId = 'b0SXVmA7WSxbbjGly';

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                console.log('Budget: ', formData.maxBudget)
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    webDesign: false,
                    appDesign: false,
                    collaboration: false,
                    others: false,
                    minBudget: 0,
                    maxBudget: 1000
                });
                
                setLoading(false);
                
                // Only show success alert after everything is done
                alert('Thank you for your response! We will get back to you soon.');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setLoading(false);
                alert('There was an error sending your message. Please try again later.');
            });
    }

  return (
    <>
        <div className={ContactusCss.main}>

            <header className={ContactusCss.header}>
            <nav className={ContactusCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={ContactusCss.DevskiLogo} alt='logo'/>
                </Link>
                <ul className={ContactusCss.navMenu}>
                    <Link to='/' style={{textDecoration: 'none'}}>
                    <li className={ContactusCss.home}>Home</li>
                    </Link>
                    <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.services}>Services</li>
                    </Link>
                    <Link to='/devski-completeProjects' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.projects}>Projects</li>
                    </Link>
                    <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.about}>About Us</li>
                    </Link>
                    <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                        <li className={ContactusCss.contact}>Contact Us</li>
                    </Link>

                </ul>
                <div className={ContactusCss.hamburger}>
                    <span className={ContactusCss.bar}></span>
                    <span className={ContactusCss.bar}></span>
                    <span className={ContactusCss.bar}></span>
                </div>
            </nav>
            </header>

            <div className={ContactusCss.coverDiv}>
                <h1><span>Contact</span> Us</h1>
            </div>


            <div className={ContactusCss.ContactForm}>
                <div className={ContactusCss.contactinfo}>
                    <button><img src={mail} className={ContactusCss.mailImage} alt='mail'/>devski@info.com</button>
                    <button><img src={telephone} className={ContactusCss.telephone_image} alt='mail'/> +92 332 8205514</button>
                    {/* <button><img src={location} className={ContactusCss.location_image} alt='mail'/> Get Location</button> */}
                </div>

                <div className={ContactusCss.formBody}>
                    <div className={ContactusCss.fields}>
                        <div className={ContactusCss.nameField}>
                            <h1>Full Name</h1>
                            <input 
                                type='text' 
                                placeholder='Type here' 
                                id='name' 
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={ContactusCss.emailField}>
                            <h1>Email</h1>
                            <input 
                                type='email' 
                                placeholder='Type here' 
                                id='email' 
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={ContactusCss.checkBoxes}>
                        <h1>Why are you contacting us?</h1>
                        <div className={ContactusCss.checks}>
                            <div className={ContactusCss.firstCheckCol}>
                                <div style={{display:'flex', gap: '10px'}}>
                                    <input 
                                        type="checkbox" 
                                        id={ContactusCss.check1} 
                                        name="webDesign" 
                                        checked={formData.webDesign}
                                        onChange={handleCheckboxChange}
                                    />Web Design
                                </div>
                                <div style={{display:'flex', gap: '10px'}}>
                                     <input 
                                        type="checkbox" 
                                        id={ContactusCss.check2} 
                                        name="appDesign" 
                                        checked={formData.appDesign}
                                        onChange={handleCheckboxChange}
                                    />Mobile App Design
                                </div>
                            </div>
                            <div className={ContactusCss.secondCheckCol}>
                                <div style={{display:'flex', gap: '10px'}}>
                                    <input 
                                        type="checkbox" 
                                        id={ContactusCss.check3} 
                                        name="collaboration" 
                                        checked={formData.collaboration}
                                        onChange={handleCheckboxChange}
                                    />Collaboration
                                </div>
                                <div style={{display:'flex', gap: '10px'}}>
                                    <input 
                                        type="checkbox" 
                                        id={ContactusCss.check4} 
                                        name="others" 
                                        checked={formData.others}
                                        onChange={handleCheckboxChange}
                                    />Others
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ContactusCss.budget}>
                        <h1>Your Budget</h1>
                        <p style={{marginBottom: '30px'}}>Slide to indicate your budget range</p>
                        <MultiRangeSlider
                            min={0}
                            max={1000}
                            onChange={handleRangeChange}
                        />
                    </div>

                    <div className={ContactusCss.message}>
                        <h1>Your Message</h1>
                        <textarea 
                            rows='5' 
                            cols='180' 
                            placeholder='Type here' 
                            id='message'
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button 
                        type='submit' 
                        className={ContactusCss.submitButton} 
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Submit'}
                    </button>

                    <div className={ContactusCss.formTail}>
                        <div className={ContactusCss.operatingDays}>
                            <h2>Operating Days</h2>
                            <h3>Monday to Friday</h3>
                        </div>
                        <div className={ContactusCss.socialsIcons}>
                            <h2>Stay Connected</h2>
                            <img src={fb} className={ContactusCss.fb} alt='fb'/>
                            {/* <img src={twitter} className={ContactusCss.twitter} alt='tweet'/> */}
                            <img src={linkedin_logo} className={ContactusCss.linkedin} alt='ln'/>
                        </div>
                    </div> 

                </div>
            </div>
            <Footer/>
        </div>

    </>
  )
}

export default ContactUs