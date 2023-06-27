import React from 'react';
import './Contact.css';

interface ContactProps {
  active: boolean;
}

const Contact: React.FC<ContactProps> = ({ active }) => {
  return (
    <div id="contact" className={`contact-page ${active ? "active" : ""}`}>
      <div className="container">
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, harum!</p>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default Contact;
