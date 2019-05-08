import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Result from './Result'
import { BrowserRouter as Router } from "react-router-dom";


const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;

const movieApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`
const popularMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`
const topRatedMovieApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`
const popularTvApi = `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}`
const topRatedTvApi = `https://api.themoviedb.org/3/tv/top_rated?api_key=${ApiKey}`
const tvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${ApiKey}`

class App extends Component {
  state = {
    movies: [],
    tvSeries: [],
    popularMovies: [],
    topRatedMovies: [],
    popularTvs: [],
    topRatedTvs: [],
  }
  componentDidMount() {
    fetch(movieApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => this.setState({
        movies: data.results,
      }))
      .catch(error => {
        console.log(error)
      })

    fetch(popularMovieApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => this.setState({
        popularMovies: data.results,
      }))
      .catch(error => {
        console.log(error)
      })

    fetch(topRatedMovieApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => this.setState({
        topRatedMovies: data.results,
      }))
      .catch(error => {
        console.log(error)
      })

    fetch(tvApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => this.setState({
        tvSeries: data.results,
      }))
      .catch(error => {
        console.log(error)
      })

    fetch(popularTvApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => this.setState({
        popularTvs: data.results,
      }))
      .catch(error => {
        console.log(error)
      })

    fetch(topRatedTvApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => this.setState({
        topRatedTvs: data.results,
      }))
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    // console.log(this.state.popularTvs)
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="main">
            <Header />
            <Result data={this.state} bgcM={this.state.bgcM} bgcT={this.state.bgcT} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
