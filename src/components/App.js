import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Result from './Result'
import { BrowserRouter as Router } from "react-router-dom";


const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;

const movieApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`
const tvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${ApiKey}`

class App extends Component {
  state = {
    movies: [],
    tvSeries: [],
    movieId: '',
    tvSeriesId: '',
    bgcM: '',
    bgcT: ''
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
        bgcM: data.results[0].backdrop_path
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
        bgcT: data.results[0].backdrop_path
      }))
      .catch(error => {
        console.log(error)
      })
  }
  handleGetMovieId = (id) => {
    this.setState({
      movieId: id,
    })
  }
  handleGetTvId = (id) => {
    this.setState({
      tvSeriesId: id,
    })
  }

  render() {
    console.log(this.state.movies);

    return (
      <Router>
        <div className="App">
          <div className="main">
            <Header />
            <Result data={this.state} getMovieId={this.handleGetMovieId} movieId={this.state.movieId} getTvId={this.handleGetTvId} tvSeriesId={this.state.tvSeriesId} bgcM={this.state.bgcM} bgcT={this.state.bgcT} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
