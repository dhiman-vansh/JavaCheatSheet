import React from 'react'
import "./Card.css"
const Card = ({ image, heading, details }) => {
    return (<>
        <div className="my-card">
            <img src={image} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <button className="in-but"> learn more</button>
        </div>
    </>

    )

}

export default Card