import React from 'react'
import './About.css';
import dp from '../../img/tarun.jpeg'
import { useContext } from "react";
import { themeContext } from "../../Context";
import aimg from "../../img/aboutimg.jpg"
const About = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(

         <div className="about " >
            <img src={aimg} alt="" className="bg" width="100%" />
            <div className="a-left" >

                <span style={{ color: darkMode ? "#c320fa" : "white" }}>About Me</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsum. Quibusdam minima rem est cumque veniam. Sequi, accusamus vero, similique maiores dolor inventore, suscipit eaque deleniti cum recusandae consequatur repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eveniet nisi accusantium sunt deleniti nesciunt iusto quasi. Amet, laudantium vitae sunt, odit ipsam temporibus tempore a sapiente sequi distinctio exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis at et saepe asperiores atque rerum tempore tenetur, inventore vitae ea repudiandae laudantium nemo recusandae sunt assumenda expedita eos, aliquid ducimus. 
                </span>
            </div>

            <div className="a-right" >
            
                <img  Id="About" className="a-image"src={dp} alt="" width={"100%"} />
            </div>

         </div>

    )
}

export default About