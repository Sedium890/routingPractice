import React from "react";
import { useParams } from "react-router-dom";

const WordPage = () => {
    const { numberOrWord } = useParams();
    return <h1>The word is: {numberOrWord}</h1>;
};

export default WordPage;
