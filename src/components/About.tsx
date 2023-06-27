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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, harum!</p>
      </div>
      <div className="background-image1"></div>
    </div>
  );
};

export default About;
