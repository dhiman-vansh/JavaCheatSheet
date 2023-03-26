import React from 'react'
import './Portfolio.css';
import{Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import im1 from "../../img/im (1).jpg";
import im2 from "../../img/im2.jpg";
import im6 from "../../img/im (6).png";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(

         <div className="portfolio" Id='Project'>
           

                <span style={{ color: darkMode ? "white" : "" }}>Portfolio</span>
                <span style={{ color: darkMode ? "#c320fa" : "" }}>Recent projects</span>

                <Swiper spaceBetween={100}
                 slidesPerView={1}
                breakpoints={{
                    // when window width is >= 640px
                    480: {
                      width: 480,
                      slidesPerView: 1,
                      spaceBetween:10,
                    }
                  }}

                grabCursor={true} className='portfolio-slider'> 
                    <SwiperSlide>
                        <img src={im1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im6} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im6} alt="" />
                    </SwiperSlide>

                </Swiper>

         </div>

    )
}

export default Portfolio

