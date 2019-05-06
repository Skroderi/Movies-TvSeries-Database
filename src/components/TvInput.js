import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;
class TvInput extends Component {
    state = {
        tvs: ''
    }

    search = (e) => {
        if (e.target.value.length > 0) {
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=${ApiKey}&query=${e.target.value}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        tvs: data
                    })
                })
                .catch(error => console.log(error))
        } else {
            this.setState({
                tvs: ''
            })
        }

    }
    resetState = () => {
        this.setState({ tvs: "" });
    }
    render() {
        const results = this.state.tvs.results
        return (
            <div className="search-bar">
                <input type="search" path="/" placeholder="search tv" onChange={this.search} />
                <ul className="search-bar__list">
                    {results && results.slice(0, 6).map(result => {
                        return (
                            <NavLink to={'/tv/' + result.id} key={result.id} onClick={this.resetState} className="search-bar__list__link">
                                <li className="search-bar__list__item">{result.original_name}</li>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
export default TvInput;