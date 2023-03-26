import React from 'react'
import './Intro.css'
import About from '../../img/about.gif'
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";


const Intro =()=>{


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className='intro'>
            <div className='i-left'>

                <div className='i-name'>
                    <span style={{ color: darkMode ? "#eb2324" : "" }}>Welcome </span>
                    <span> Developers</span>                    
                    <span> Our website provides comprehensive and up-to-date Java cheat sheets to help Java developers quickly find the information they need. Our cheat sheets cover syntax, data types, operators, loops, arrays, and more, making them easy to read and understand.</span> 
                </div>
                <button className=' button i-button'>
                <Link activeClass="active" to="Contact" spy={true} smooth={true}>Let's Go</Link>
                </button>
            </div>
            <div className='i-right'>
                <div className='i-image'>
                    
                    <img src="" alt="" />
                </div>
                
            </div>
        </div>
    )
}
export default Intro