import React, { useState } from 'react';
import HomePageCss from '../Css/HomePage.module.css'; // Adjust the path based on your setup
import DownIcon from '../Images/DownIcon.png';

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (questionNumber) => {
      setActiveQuestion(activeQuestion === questionNumber ? null : questionNumber);
    };

     const handleSubmit = () => {
    
            const _message = document.getElementById('message');
    
            if(_message.value === ""){
                alert('Can not send empty query');
            }
            else{
                alert('Sent Successfully');
            }
        }
  return (
    <>
        <div id={HomePageCss.FAQ}>
            <div className={HomePageCss.faqHeader}>
                <h1>FAQs</h1>
                <p>
                Your time is valuable, so we’ve made finding answers easy. Explore our FAQs or reach out
                with your questions—we’ll respond promptly.
                </p>
            </div>
            <div id={HomePageCss.faqForm}>
                <div className={HomePageCss.dropdowns}>
                {[
                    { id: 1, question: 'What are your pricing options?', answer: 'Our pricing is customized based on the scope and requirements of your project. Contact us for a consultation, and we’ll provide a detailed quote.' },
                    { id: 2, question: "How many years' experience?", answer: 'We have 2+ years of industrial experience and have worked with both national and international clients.' },
                    { id: 3, question: 'How long does it take to see results?', answer: 'Timelines depend on the project\'s scope, but we work in sprints to ensure steady progress and deliver value at each stage.' },
                    { id: 4, question: 'What industries do you work with?', answer: 'We create apps, websites, and designs for all industries, integrating AI and LLM technologies for innovative, tailored solutions.' },
                ].map(({ id, question, answer }) => (
                    <div
                    key={id}
                    id={HomePageCss[`question${id}`]}
                    className={`${HomePageCss.question} ${activeQuestion === id ? HomePageCss.active : ''}`}
                    >
                    <div className={HomePageCss.buttonText}>
                        <p>{question}</p>
                        <button onClick={() => toggleAnswer(id)}>
                        <img src={DownIcon} className={HomePageCss.downIcon} alt="downicon" />
                        </button>
                    </div>
                    {activeQuestion === id && (
                        <div className={HomePageCss.expandedBlock}>
                        <p>{answer}</p>
                        </div>
                    )}
                    </div>
                ))}
                </div>
                <div className={HomePageCss.faqTextarea} id="textarea">
                    <textarea rows="12" cols="45" placeholder="Ask us want you want to know..." id="message" />
                    <div className={HomePageCss.submitButton}>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default FAQ