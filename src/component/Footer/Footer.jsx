import React from 'react'
import './Footer.css'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import  Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import wave from "../../img/wave.png"
import { useContext } from "react";
import { themeContext } from "../../Context";


const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='footer' Id='Footer'>
      <img className='wave' src={wave} alt="" style={{width: '100%'}}/>
      <div className="f-content">
        <a href='' style={{ color: darkMode ? "" : "white" }}><span>tarunsingh199002@gmail.com</span></a>
        
        <div className="f-icon">
          <a style={{ color: darkMode ? "black" : "white" }} href='https://www.facebook.com/'><Facebook  size='3rem'/></a>
          <a style={{ color: darkMode ? "black" : "white" }} href='https://www.github.com/'><Github  size='3rem'/></a>
          <a style={{ color: darkMode ? "black" : "white" }} href='https://www.linkedin.com/'><Linkedin size='3rem'/> </a>
          
        </div>
      </div>
    </div>
  )
}

export default Footer