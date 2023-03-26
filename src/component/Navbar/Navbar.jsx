import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'

import { Link } from "react-scroll";

const Navbar = () =>{

    return (

        <div className='n-wrapper' Id='Navbar'>            
            <div className="n-left">
                <div className='n-name'> <span>Java</span> <span>Cheatsheet</span> </div>
                <Toggle/>

            </div>
            <div className="n-right">
                <div className='n-list'>
                    <ul style={{listStyleType:'none'}}>
                        <li> <Link activeClass="active" to="Navbar" spy={true} smooth={true}>Home</Link></li>
                        <li><Link activeClass="active" to="Services" spy={true} smooth={true}>Services</Link></li>
                        <li><Link activeClass="active" to="About" spy={true} smooth={true}>About</Link></li>
                        <li><Link activeClass="active" to="Project" spy={true} smooth={true}>Projects</Link></li>
                    </ul>
                </div>

                <button className='button n-button' >
                <Link activeClass="active" to="Footer" spy={true} smooth={true}>Socials</Link>
                </button>
            </div>



        </div>
    )
}

export default Navbar