
import { NavLink, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import MovieInput from './MovieInput'
import TvInput from './TvInput'
const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;
class Header extends Component {
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
        document.querySelector('.search-bar__input').value = "";
    }

    render() {
        return (
            <div className="header">
                <div className="buttons">
                    <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/tvSeries">Tv Series</NavLink>
                </div>
                <Switch>
                    <Route path="/movies" component={MovieInput} />
                    <Route exact path="/" component={MovieInput} />
                    <Route path="/tvSeries" component={TvInput} />
                    <Route path='/movie/:id' component={MovieInput} />
                    <Route path='/tv/:id' component={TvInput} />
                </Switch>
                <div className="secondary nav buttons">

                </div>
            </div>);
    }
}

export default Header;

