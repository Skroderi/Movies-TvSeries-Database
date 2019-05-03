import React from 'react';
import Movie from './Movie'
import TvSerie from './TvSerie';
import { Route, Switch } from "react-router-dom";



const Result = (props) => {
    const movies = props.data.movies.map((movie, index) => <Movie key={index} img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} title={movie.title} release={movie.release_date} id={movie.id} />)

    const tvSeries = props.data.tvSeries.map((tv, index) => <TvSerie key={index} img={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} title={tv.name} release={tv.first_air_date} id={tv.id} />)

    const Movies = () => <div className="results">{movies}</div>
    const TvSeries = () => <div className="results">{tvSeries}</div>
    return (

        <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/tvSeries" component={TvSeries} />
        </Switch>

    );
}

export default Result;