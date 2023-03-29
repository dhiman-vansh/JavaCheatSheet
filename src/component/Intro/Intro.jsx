import React from 'react'
import './Intro.css'
// import About from '../../img/about.gif'
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
// import Aos from 'aos';
// Aos.init({
//     offset: 100,
//     duration: 500,
//     easing: 'ease-in-sine',
//     delay: 50,
// });

const Intro = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro'>
            <div className='i-left'
                data-aos="zoom-out-right"
            >

                <div className='i-name'>
                    <span style={{ color: darkMode ? "#C3073F" : "" }}>Welcome </span>
                    <span> Developers</span>
                    <span> Our website provides comprehensive and up-to-date Java cheat sheets to help Java developers quickly find the information they need. Our cheat sheets cover syntax, data types, operators, loops, arrays, and more, making them easy to read and understand.</span>
                </div>
                <button className=' button i-button'>
                    <Link activeClass="active" to="Contact" spy={true} smooth={true}>Let's Go</Link>
                </button>
            </div>
            <div className='i-right'
                data-aos="slide-left"
                data-aos-duration="1000"
                data-aos-easing="ease-out-sine"
                data-aos-delay="1000">
                {/* <div className='i-image'> */}
                {/* <iframe src='https://my.spline.design/untitled-d1cd5378d5aeb69d18ca8b150e6f6870/' frameborder='0' width='100%' height='100%'></iframe> */}

                <iframe src='https://my.spline.design/untitled-d1cd5378d5aeb69d18ca8b150e6f6870/' style={{ transform: "scale(1.8)" }} frameborder='0' width='100%' height='100%'></iframe>
                {/* <img src="" alt="" /> */}
                {/* </div> */}

            </div>
        </div>
    )
}
export default Intro