import React from 'react';
import Movie from './Movie'
import TvSerie from './TvSerie';
import { Route, Switch, NavLink } from "react-router-dom";
import MovieDetails from './MovieDetails';
import TvDetails from './TvDetails'
const Result = (props) => {
    const data = props.data
    const movies = data.movies.map((movie, index) => <Movie key={movie.id} img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} title={movie.title} release={movie.release_date} id={movie.id} getId={props.getMovieId} />)

    const popularMovies = data.popularMovies.map((movie, index) => <Movie key={movie.id} img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} title={movie.title} release={movie.release_date} id={movie.id} getId={props.getMovieId} />)

    const topRatedMovies = data.topRatedMovies.map((movie, index) => <Movie key={movie.id} img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} title={movie.title} release={movie.release_date} id={movie.id} getId={props.getMovieId} />)

    const tvSeries = data.tvSeries.map((tv, index) => <TvSerie key={tv.id} img={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} title={tv.name} release={tv.first_air_date} id={tv.id} getId={props.getTvId} />)

    const popularTvs = data.popularTvs.map((tv, index) => <TvSerie key={tv.id} img={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} title={tv.name} release={tv.first_air_date} id={tv.id} getId={props.getTvId} />)

    const topRatedTvs = data.topRatedTvs.map((tv, index) => <TvSerie key={tv.id} img={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} title={tv.name} release={tv.first_air_date} id={tv.id} getId={props.getTvId} />)

    const Movies = () => <div>
        {data.movies.length > 0 ? <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.movies[0].backdrop_path}')` }}></div> : ''}

        <div className="sort">
            <NavLink exact to="/movies">Trending Now</NavLink>
            <NavLink to="/movies/popular">Popular</NavLink>
            <NavLink to="/movies/toprated">Top Rated</NavLink>
        </div>
        <h1>Trending Now</h1>
        <div className="results">
            {movies}
        </div>
    </div >

    const PopularMovies = () => <div>
        {data.popularMovies.length > 0 ? <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.popularMovies[0].backdrop_path}')` }}></div> : ''}
        <div className="sort">
            <NavLink exact to="/movies">Trending Now</NavLink>
            <NavLink to="/movies/popular">Popular</NavLink>
            <NavLink to="/movies/toprated">Top Rated</NavLink>
        </div>
        <h1>Popular</h1>
        <div className="results">
            {popularMovies}
        </div>
    </div>

    const TopRatedMovies = () => <div>
        {data.topRatedMovies.length > 0 ? <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.topRatedMovies[0].backdrop_path}')` }}></div> : ''}
        <div className="sort">
            <NavLink exact to="/movies">Trending Now</NavLink>
            <NavLink to="/movies/popular">Popular</NavLink>
            <NavLink to="/movies/toprated">Top Rated</NavLink>
        </div>
        <h1>Top Rated</h1>
        <div className="results">
            {topRatedMovies}
        </div>
    </div>

    const TvSeries = () => <div>
        {data.tvSeries.length > 0 ? <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.tvSeries[0].backdrop_path}')` }}></div> : ''}
        <div className="sort">
            <NavLink exact to="/tvseries">Trending Now</NavLink>
            <NavLink to="/tvseries/popular">Popular</NavLink>
            <NavLink to="/tvseries/toprated">Top Rated</NavLink>
        </div>
        <h1>Trending Now</h1>
        <div className="results">{tvSeries}</div>
    </div>

    const PopularTv = () => <div>
        {data.popularTvs.length > 0 ? <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.popularTvs[0].backdrop_path}')` }}></div> : ''}
        <div className="sort">
            <NavLink exact to="/tvseries">Trending Now</NavLink>
            <NavLink to="/tvseries/popular">Popular</NavLink>
            <NavLink to="/tvseries/toprated">Top Rated</NavLink>
        </div>
        <h1>Popular</h1>
        <div className="results">
            {popularTvs}
        </div>
    </div>

    const TopRatedTv = () => <div>
        {data.topRatedTvs.length > 0 ? <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.topRatedTvs[0].backdrop_path}')` }}></div> : ''}
        <div className="sort">
            <NavLink exact to="/tvseries">Trending Now</NavLink>
            <NavLink to="/tvseries/popular">Popular</NavLink>
            <NavLink to="/tvseries/toprated">Top Rated</NavLink>
        </div>
        <h1>Top Rated</h1>
        <div className="results">
            {topRatedTvs}
        </div>
    </div>

    return (

        <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/movies" component={Movies} />
            <Route path="/movies/popular" component={PopularMovies} />
            <Route path="/movies/toprated" component={TopRatedMovies} />
            <Route exact path="/tvseries" component={TvSeries} />
            <Route path="/tvseries/popular" component={PopularTv} />
            <Route path="/tvseries/toprated" component={TopRatedTv} />
            <Route path='/movie/:id' component={MovieDetails} />
            <Route path='/tv/:id' component={TvDetails} />
        </Switch>

    );
}

export default Result;