import React from 'react';

const TvSerie = (props) => {

    return (
        <a href="#" className="movie">
            <img src={props.img} alt={props.title} />
            <div className="info">
                <h1>{props.title}</h1>
                <h2>Release:</h2>
                <span>{props.release}</span>
            </div>
        </a>
    );
}

export default TvSerie;