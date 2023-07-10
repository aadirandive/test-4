// import React from 'react';
// import './Contact.css';

// interface ContactProps {
//   active: boolean;
// }

// const Contact: React.FC<ContactProps> = ({ active }) => {
//   return (
//     <div id="contact" className={`contact-page ${active ? "active" : ""}`}>
//       <div className="container">
//         <h1>Contact</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, harum!</p>
//       </div>
//       <div className="background-image"></div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";

interface ContactProps {
  active: boolean;
}

const Contact: React.FC<ContactProps> = ({ active }) => {
  const [flipCard, setFlipCard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setFlipCard(!flipCard);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/contact", { name, email, message });
      
      console.log("Message sent successfully!");
      
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      
      console.error("Error sending message:", error);
    }
  };

  return (
    <div
      id="contact"
      className={`${styles.contactPage} ${active ? styles.active : ""}`}
    >
      <div className={styles.contactWrapper}>
        <div className={`${styles.envelope} ${flipCard ? styles.active : ""}`}>
          <div className={styles.back + " " + styles.paper}></div>
          <div className={styles.content}>
            <div className={styles.formWrapper}>
              <form onSubmit={handleSubmit}>
                <div className={styles.topWrapper}>
                  <div className={styles.input}>
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={styles.input}>
                    <label>Email</label>
                    <input
                      type="text"
                      name="_replyto"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.bottomWrapper}>
                  <div className={styles.input}>
                    <label>Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className={styles.submit}>
                    <div
                      className={`${styles.submitCard}`}
                      onClick={handleToggle}
                    >
                      <button>Send Mail</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.front + " " + styles.paper}></div>
        </div>
      </div>
      {/* <div className={styles.flipCard} onClick={handleToggle}>
        {flipCard ? "Reset" : "Animate"}
      </div> */}
    </div>
  );
};  

export default Contact;
