import React from "react";
import { useParams } from "react-router-dom";

const NumberPage = () => {
    const { numberOrWord } = useParams();
    return <h1>The number is: {numberOrWord}</h1>;
};

export default NumberPage;
