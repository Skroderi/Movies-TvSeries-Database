import React, { Component } from 'react';
const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;
class MovieDetals extends Component {
    state = {
        movieDetails: [],
        id: this.props.id
    }
    // componentDidUpdate(props) {
    //     if (this.props.match.params.id !== prevProps.match.params.id) {
    //         this.componentDidMount()
    //     }
    // }
    componentDidMount() {
        const api = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${ApiKey}&append_to_response=videos`
        fetch(api)
            .then(response => {
                if (response.ok) return response
                throw Error('Błąd')
            })
            .then(response => response.json())
            // .then(data => console.log(data)
            // )
            .then(data => this.setState({
                movieDetails: data
            }))
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        console.log(this.state.movieDetails);

        const movieDetails = this.state.movieDetails;
        return (
            <div className="container">
                <div className="movieInfo">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} alt="" />
                    </div>
                    <div className="details">
                        <h1>{movieDetails.original_title}</h1>
                        <p class="overview">{movieDetails.overview}</p>

                        <ul>
                            <li><p>Genres:</p>
                                {movieDetails.genres && movieDetails.genres.map(genre => {
                                    return <strong key={genre.id}>{genre.name},</strong>
                                })}
                            </li>
                            <li><p>Premiere:</p><strong>{movieDetails.release_date}</strong></li>
                            <li><p>Production:</p>
                                {movieDetails.production_countries && movieDetails.production_countries.map(country => {
                                    return <strong key={Math.random() * 10}>{country.iso_3166_1},</strong>
                                })}
                            </li>
                            <li><p>Rating:</p><strong>{movieDetails.vote_average}/10</strong></li>
                            {/* <li><strong>Budget:&nbsp;</strong><p>${movie.budget}</p></li> */}
                        </ul>
                    </div>
                </div>
                <div className="movieVideos">
                    <h1 className="movie-videos__title">Trailers</h1>
                    {movieDetails.videos && movieDetails.videos.results.slice(0, 2).map(video => {
                        return (
                            <iframe className="video" style={{ border: "none" }}
                                src={'https://www.youtube.com/embed/' + video.key} key={video.id}
                                allowFullScreen="allowfullscreen"
                                mozallowfullscreen="mozallowfullscreen"
                                msallowfullscreen="msallowfullscreen"
                                oallowfullscreen="oallowfullscreen"
                                webkitallowfullscreen="webkitallowfullscreen"
                                sandbox="allow-scripts allow-same-origin allow-presentation"
                                frameBorder="0">
                            </iframe>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default MovieDetals; 