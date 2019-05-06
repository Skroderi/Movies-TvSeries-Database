import React, { Component } from 'react';
const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;

class TvDetails extends Component {
    state = {
        tvDetails: [],
        id: this.props.id
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.componentDidMount()
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        const api = `https://api.themoviedb.org/3/tv/${id}?api_key=${ApiKey}&append_to_response=videos`
        fetch(api)
            .then(response => {
                if (response.ok) return response
                throw Error('Błąd')
            })
            .then(response => response.json())

            .then(data => this.setState({
                tvDetails: data
            }))
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const tv = this.state.tvDetails;
        // console.log(this.state.tvDetails);
        return (
            <div className="container">
                <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${tv.backdrop_path}')` }}></div>
                <div className="movieInfo">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} alt="" />
                    </div>
                    <div className="details">
                        <h1>{tv.original_name}</h1>
                        <p className="overview">{tv.overview}</p>

                        <ul>
                            <li><p>Genres:</p>
                                {tv.genres && tv.genres.map(genre => {
                                    return <strong key={genre.id}>{genre.name},</strong>
                                })}
                            </li>
                            <li><p>Premiere:</p><strong>{tv.first_air_date}</strong></li>
                            <li><p>Seasons:</p><strong>{tv.number_of_seasons}</strong></li>
                            <li><p>Episodes:</p><strong>{tv.number_of_episodes}</strong></li>
                            <li><p>Production:</p>
                                <strong>{tv.origin_country}</strong>
                            </li>
                            <li><p>Rating:</p><strong>{tv.vote_average}/10</strong></li>
                        </ul>
                    </div>
                </div>
                <div className="movieVideos">
                    <h1 className="movie-videos__title">Trailers</h1>
                    {tv.videos && tv.videos.results.slice(0, 2).map(video => {
                        return (
                            <iframe className="video" title="Trailer" style={{ border: "none" }}
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

export default TvDetails;