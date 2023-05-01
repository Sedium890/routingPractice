import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const StyledWordPage = () => {
    const { word, textColor, bgColor } = useParams();
    const isNumber = !isNaN(+word);
    const text = isNumber ? `Your number is ${word}` : `The word is ${word}`;

    return (
        <h1
            className="styled-word"
            style={{
                color: textColor,
                backgroundColor: bgColor,
            }}
        >
            {text}
        </h1>
    );
};

export default StyledWordPage;
