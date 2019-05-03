import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Movie = (props) => {

    return (
        <a href="#" className="movie">
            <img src={props.img} alt={props.title} />
            <div className="info">
                <h1>{props.title}</h1>
                <h2>Release:</h2>
                <span>{props.release}</span>
                {props.id}
            </div>
        </a>
    );
}

export default Movie;