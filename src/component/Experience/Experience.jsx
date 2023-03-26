import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import fade1 from "../../img/fade1.png"
import fade2 from "../../img/fade2.png"

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
        <img src={fade1} alt="" className="blur1"  />
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--darkpurple)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--darkpurple)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--darkpurple)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
      <img src={fade1} alt="" className="blur2"   />
    </div>
  );
};

export default Experience;
