import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;
class MovieInput extends Component {
    state = {
        searchData: ''
    }
    
    search = (e) => {
        if (e.target.value.length > 0) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${e.target.value}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        searchData: data
                    })
                })
                .catch(error => console.log(error))
        } else {
            this.setState({
                searchData: ''
            })
        }

    }
    resetState = () => {
        this.setState({ searchData: "" });
    }

    render() {
        const results = this.state.searchData.results
        return (
            <div className="search-bar">
                <input type="search" path="/" placeholder="search movie" onChange={this.search} />
                <ul className="search-bar__list">
                    {results && results.slice(0, 6).map(result => {
                        return (
                            <NavLink to={'/movie/' + result.id} key={result.id} onClick={this.resetState} className="search-bar__list__link">
                                <li className="search-bar__list__item">{result.original_title}</li>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
export default MovieInput;