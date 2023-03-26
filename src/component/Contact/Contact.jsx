import React from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {useEffect, useState} from 'react';
import { useContext } from "react";
import { themeContext } from "../../Context";

function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8qsmsa4', 'template_3ot5fra', form.current, 'au5i7Yc8Z9ukHgTO9')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className='contact' Id='Contact'>
        <div className="c-left">
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch </span>
            <br/>
            <span>Contact me</span>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} action="">
                <input type="text" name="user_name" className='user' placeholder='Name' />

                <input type="email" name="user_email" className='user' placeholder='Email' />

                <textarea name="message" className="user" placeholder='Message'></textarea>

                <input type="submit" value="Send" className='button' />

                <span style={{ color: darkMode ? "#c320fa" : "" }}>{done && "thanks for contacting me!"}</span>
            </form>
            
        </div>

    </div>
  )
}

export default Contact