import React from 'react';
import { NavLink } from "react-router-dom";

const TvSerie = (props) => {

    return (
        <NavLink exact to={`/tv/${props.id}`} className="movie">
            <img src={props.img} alt={props.title} />
            <div className="info">
                <h1>{props.title}</h1>
                <h2>Release:</h2>
                <span>{props.release}</span>
            </div>
        </NavLink>
    );
}

export default TvSerie;