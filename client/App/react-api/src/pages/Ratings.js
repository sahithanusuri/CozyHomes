import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Ratings.css"

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function Ratings(){

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div id="cont">
            <h2> Like your stay, show us how much! </h2>
            <div id="star">
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{ marginRight: 10, cursor: "pointer"}} />
                    );
                })}
            </div>
            <textarea
                placeholder="Describe your experience..."
                id="comments"
            />

            <button id="submitbutton">
                Submit
            </button>

        </div>
    );

}

export default Ratings