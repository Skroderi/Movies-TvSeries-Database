import React from 'react';
import { NavLink } from "react-router-dom";

const Movie = (props) => {
    // const idMovie = props.id
    // console.log(idMovie);

    return (
        <NavLink exact to={`/movie/${props.id}`} className="movie" onClick={() => props.getId(props.id)}>
            <img src={props.img} alt={props.title} />
            <div className="info">
                <h1>{props.title}</h1>
                <h2>Release:</h2>
                <span>{props.release}</span>

            </div>
        </NavLink >
    );
}

export default Movie;