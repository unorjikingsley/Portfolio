import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sr3wpsf',
        'template_y1jobz7',
        form.current,
        '2pk5I3YftMtjlZxFf',
      )
      .then(() => {
        // Handle the success result as needed, or remove the comment
        // For example, you can set a success message or redirect the user to a thank-you page.
        // Handle success here...

        setDone(true);
        form.reset();
      })
      .catch(() => {
        // Handle errors here, if needed, or remove the comment if you want to ignore errors.
        // For example, you can display an error message to the user.
        // Handle errors here...
      });
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          />
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for Contacting me'}</span>
          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
