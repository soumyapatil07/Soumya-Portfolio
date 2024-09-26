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
import './lang.css'; // Assuming styles are in this file

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
          
            <h2>Work History & Key Responsibilities</h2>
            
          
        </div>
        <div className="side--b side">
          {/*<i className="fa fa-spotify"></i>*/}
          <h2>Masterschool</h2>
          <h3>Certifications and Skills</h3>
          <ul>
            <li>Google IT Certification</li>
            <li>Google Cybersecurity Certification</li>
            <li>CompTIA Security+ Certification</li>
            <li>Practical knowledge acquired through TryHackMe rooms and ACI Learning Labs</li>
            <li>Experience with tools such as Nmap, Wireshark, and Splunk</li>
          </ul>
            
            
            
            <h2>Adnymics GmbH, Munich, Germany</h2>
            <h3>QA Engineer</h3>
            <p>Responsibilities:</p>
            <ul>
              <li>Quality Assurance of Adnymics brochures/Inserts.</li>
              <li>Software testing in staging and production environments.</li>
              <li>Interacted and collaborated with the requirements and development teams to test new features and releases.</li>
              <li>Worked on projects related to software engineering and quality assurance.</li>
              <li>Created brochures according to customer requests using HTML, CSS, and Indesign tools.</li>
              <li>Documented and recorded clear steps to reproduce bugs or issues when features were not working according to test cases.</li>
              <li>Performed analysis of logs to understand program flow and conducted specific functional testing.</li>
              <li>Reproduced bugs by sending API calls using Postman tool.</li>
            </ul>
            
            <h2>Celex UG, Munich, Germany</h2>
            <h3>Software Test Engineer</h3>
            <p>Responsibilities:</p>
            <ul>
              <li>Manual testing of the website for the tourism marketplace.</li>
              <li>Writing and executing test cases.</li>
              <li>Opening and submitting bugs with documentation on issue reproducibility.</li>
              <li>Tracking the software quality status across various platforms, including mobile and multiple operating systems.</li>
              <li>Automating user interface testing using Selenium WebDriver with Python.</li>
            </ul>
            
            <h2>Inopus GmbH, Munich, Germany</h2>
            <h3>Software Test Engineer</h3>
            <p>Responsibilities:</p>
            <ul>
              <li>Software testing of the requirement tool, ALM, used to collect and manage customer requirements.</li>
              <li>Validating the User Interface and application layer.</li>
              <li>Writing, executing, and generating reports for test cases.</li>
              <li>Attending daily status update meetings and documenting reports accordingly.</li>
            </ul>

            
        </div>
      </div>
    </div>
  );
};

export default CardFlipper;
