import React from "react";
import './Card.css';

const Card = ({ title, img, alt }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt={alt}></img>
            </div>

            <div className="card-title">
                {title}
            </div>
        </div>
    )
}

export default Card;