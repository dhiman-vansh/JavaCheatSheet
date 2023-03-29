// import React from 'react'
import './Footer.css'
// import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
// import Github from '@iconscout/react-unicons/icons/uil-github'
// import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
// import wave from "../../img/wave.png"
import Aos from "aos";
import { useContext } from "react";
import { themeContext } from "../../Context";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
Aos.init({
  offset: 100,
  duration: 500,
  easing: 'ease-in-sine',
  delay: 50,
});
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <>
      <footer class="text-center text-white" style={{ backgroundColor: "transparent" }}
      >
        <div class="container pt-4">
          <section class="mb-4">
            <a data-aos="zoom-out-right"
              className={darkMode ? "btn btn-link btn-floating btn-lg text-light m-1 " : "btn btn-link btn-floating btn-lg text-dark m-1"}
              // class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i class="fab fa-facebook-f"></i
            ></a>

            <a data-aos="zoom-out-right"
              className={darkMode ? "btn btn-link btn-floating btn-lg text-light m-1 " : "btn btn-link btn-floating btn-lg text-dark m-1"}
              // class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i class="fab fa-twitter"></i
            ></a>

            {/* <a data-aos="zoom-out-up"
              className={darkMode ? "btn btn-link btn-floating btn-lg text-light m-1 " : "btn btn-link btn-floating btn-lg text-dark m-1"}
              // class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i class="fab fa-google"></i
            ></a> */}

            <a data-aos="zoom-out-left"
              className={darkMode ? "btn btn-link btn-floating btn-lg text-light m-1 " : "btn btn-link btn-floating btn-lg text-dark m-1"}
              // class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i class="fab fa-instagram"></i
            ></a>

            <a data-aos="zoom-out-left"
              className={darkMode ? "btn btn-link btn-floating btn-lg text-light m-1 " : "btn btn-link btn-floating btn-lg text-dark m-1"}
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i class="fab fa-github"></i
            ></a>
          </section>
        </div>

        <div class="text-center p-3" className={darkMode ? "text-light" : "text-dark"} style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: "8vh", paddingTop: "2.5vh" }}>
          © 2023 Copyright:
          <a class={darkMode ? "text-light" : "text-dark"} className="underline" href="https://mdbootstrap.com/"> Abhay Tomer </a>
          <a class={darkMode ? "text-light" : "text-dark"} >  & </a>
          <a class={darkMode ? "text-light" : "text-dark"} className="underline" href="https://www.linkedin.com/in/vansh-22102001-dhiman/">  Vansh Dhiman </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
{/* // <div className='footer' Id='Footer'>
    //   <img className='wave' src={wave} alt="" style={{ width: '100%' }} />
    //   <div className="f-content">
    //     <a href='' style={{ color: darkMode ? "" : "white" }}><span>abhay.tomer25@gmail.com</span></a>
    //     <div className="f-icon">
    //       <a style={{ color: darkMode ? "black" : "white" }} href='https://www.facebook.com/'><Facebook size='3rem' /></a>
    //       <a style={{ color: darkMode ? "black" : "white" }} href='https://www.github.com/'><Github size='3rem' /></a>
    //       <a style={{ color: darkMode ? "black" : "white" }} href='https://www.linkedin.com/'><Linkedin size='3rem' /> </a>
    //     </div>
    //   </div>
    // </div> */}