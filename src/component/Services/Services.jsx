import React from 'react'
import Card from '../Card/Card'
import './Services.css';
import vector1 from "../../img/Vector1.png";

import { useContext } from "react";
import { themeContext } from "../../Context";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (

        <div className="services" >
            <div className="s-right"
                data-aos="zoom-out-right">
                <span style={{ color: darkMode ? "white" : "" }}> Services </span>
                <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Incidunt minima quia ex eos mollitia porro quam ab adipisci quae su.<br />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <a href={""} download> <button className="button s-button"> Resume </button></a>

            </div>
            <div className="cards">
                <div style={{ top: '-4rem', left: "12rem" }}
                    data-aos="zoom-out-left">
                    <Card
                        image={vector1}
                        heading={'Data Science'}
                        details={"lorem ipsum dolor sit amet"}
                    />
                </div>

                <div style={{ top: "11rem", left: "-9rem" }}
                    data-aos="zoom-out-right">
                    <Card
                        image={vector1}
                        heading={'Data Science'}
                        details={"lorem ipsum dolor sit amet"}
                    />
                </div>

                <div style={{ top: "16rem", left: "-24rem" }}
                    data-aos="zoom-out-right">
                    <Card
                        image={vector1}
                        heading={'Data Science'}
                        details={"lorem ipsum dolor sit amet"}
                    />
                </div>

                <div style={{ top: "14rem", left: "25rem" }}
                    data-aos="zoom-out-left">
                    <Card
                        image={vector1}
                        heading={'Data Science'}
                        details={"lorem ipsum dolor sit amet"}
                    />
                </div>

                <div Id='Services' style={{ top: "-7rem", left: "28rem" }}
                    data-aos="zoom-out-left">
                    <Card
                        image={vector1}
                        heading={'Data Science'}
                        details={"lorem ipsum dolor sit amet"}
                    />
                </div>

                <div style={{ top: '15rem', left: '6rem' }}
                    data-aos="zoom-out-left">
                    <Card
                        image={vector1}
                        heading={'Data Science'}
                        details={"lorem ipsum dolor sit amet"}
                    />
                </div>

            </div>
        </div>


    )
}

export default Services