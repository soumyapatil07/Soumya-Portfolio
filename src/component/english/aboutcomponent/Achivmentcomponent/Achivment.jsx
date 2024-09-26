/*import Cardcomponent from "./cardcomponent/card";
import "./skills.css";


const experience=[ {"Software Testing":"Accumulated over 3 years of professional experience in software application and website testing, ensuring high-quality deliverables."}]
function Skillscomponent() {
    return (
        <div className="skills">
          <h1>Professional Experience</h1>
          <div>{experience.map((x,y)=> (<Cardcomponent cardtitles={x} cardtext={y} /> ))}
            <h2>Software Testing</h2>
            <p>Accumulated over 3 years of professional experience in software application and website testing, ensuring high-quality deliverables.</p>
        
            <h2>Brochure Creation</h2>
            <p>Proficient in creating brochures tailored to customer requirements using HTML, CSS, and InDesign, guaranteeing visually appealing and effective marketing materials.</p>
        
            <h2>Manual Testing</h2>
            <p>Conducted thorough manual testing processes to validate the quality and functionality of brochures, ensuring they meet or exceed client expectations.</p>
        
            <h2>Python Coding</h2>
            <p>Possess coding skills in Python, maintaining and adjusting automated test scripts and other applications to streamline testing processes.</p>
        
            <h2>Bug Tracking Tools</h2>
            <p>Experienced in utilizing bug tracking tools such as Jira, HubSpot, and Monday.com to effectively manage and prioritize reported issues throughout the software development lifecycle.</p>
        
            <h2>Collaboration</h2>
            <p>Collaborated closely with product managers and stakeholders to ensure alignment on software quality goals and timely project deliverables.</p>
        
            <h2>API Testing</h2>
            <p>Knowledge in analyzing logs, understanding program flow, and reproducing bugs using the Postman tool.</p>
        
            <h2>SDLC Knowledge</h2>
            <p>Understanding of the software development life cycle process, facilitating effective communication and collaboration with cross-functional teams.</p>
        
            <h2>Test Case Development</h2>
            <p>Expertly set up test cases and testing environments to execute comprehensive testing processes, ensuring thorough coverage of software functionalities.</p>
        
            <h2>Bug Reporting</h2>
            <p>Meticulously reproduced and reported bugs to the respective development team by raising tickets, contributing to the continuous improvement of product quality.</p>
        
            <h2>Stakeholder Engagement</h2>
            <p>Developed and maintained strong relationships with stakeholders and colleagues, fostering a collaborative and supportive work environment.</p>
        
            <h2>Continuous Learning</h2>
            <p>Displayed a willingness to learn and adapt, with a keen interest in acquiring automated testing skill sets to enhance testing efficiency and effectiveness.</p>
          </div> 
        </div>
      );
}

export default Skillscomponent;*/

import React, { useState } from 'react';
import './achivment.css'; // Assuming styles are in this file

const CardFlipper = () => {
  const [flipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card--container ${flipped ? 'flip' : ''}`} onClick={handleCardFlip}>
      <div className="card--flipper">
        <div className="side--a side">
          {/*<i className="fa fa-twitter"></i>*/}
          
            <h2>Accomplishments</h2>
            
          
        </div>
        <div className="side--b side">
          {/*<i className="fa fa-spotify"></i>*/}
            <h3>Comptia Security +</h3>
            <img src="../../../assets/img/comptia.png" alt="Description" />

            <h3>Google IT Support</h3>
            <img src="../../../assets/img/Google_IT_Cert.png" alt="Description" />

            <h3>Google Cybersecurity</h3>
            <img src="../../../assets/img/Google_cybersecurity" alt="Description" />
        
            

        </div>
      </div>
    </div>
  );
};

export default CardFlipper;
