import React from 'react';
import './About.css';

interface AboutProps {
  active: boolean;
}

const About: React.FC<AboutProps> = ({ active }) => {
  return (
    <div id="about" className={`about-page ${active ? "active" : ""}`}>
      <div className="container">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, perspiciatis, unde at sapiente neque commodi nostrum exercitationem delectus blanditiis dolore saepe eum! Nostrum impedit modi doloribus quidem, quos at quo provident, odit, perspiciatis neque ut laborum.</p>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default About;
