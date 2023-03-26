import React from 'react'
import './Intro.css'
import About from '../../img/about.png'
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
                    <span style={{ color: darkMode ? "white" : "" }}> Hey I am </span>
                    <span> Tarun Singh</span>                    
                    <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, adipisci. Harum beatae, asperiores at architecto dicta adipisci sit possimus omnis magni expedita sunt odit, exercitationem amet dolore ipsa eligendi. Sunt.</span> 
                </div>
                <button className=' button i-button'>
                <Link activeClass="active" to="Contact" spy={true} smooth={true}>Contact</Link>
                </button>
            </div>
            <div className='i-right'>
                <div className='i-image'>
                    
                    <img src={About} alt="" />
                </div>
                
            </div>
        </div>
    )
}
export default Intro