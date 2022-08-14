import React from "react";
import { FiSend } from "react-icons/fi";
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2>
        Contact Me<span className="red_text">.</span>
      </h2>
      <div className="contact_container">
        <form action="">
          <div>
            <label htmlFor="u_name">Your Name<span className="red_text">.</span></label>
            <input type="text" id="u_name" name="user_name" placeholder="Enter your name"/>
          </div>
          <div>
            <label htmlFor="u_email">Your Email<span className="red_text">.</span></label>
            <input type="text" id="u_email" name="user_email" placeholder="Enter your email"/>
          </div>
          <div>
            <label htmlFor="u_message">Your Message<span className="red_text">.</span></label>
            <textarea name="message" id="u_message" cols="30" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="submit_btn">Send Me <FiSend/></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
