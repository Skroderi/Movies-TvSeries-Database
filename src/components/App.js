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
    movieId: ''
  }

  componentDidMount() {
    fetch(movieApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => this.setState({
        movies: data.results
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
        tvSeries: data.results
      }))
      .catch(error => {
        console.log(error)
      })
  }

  getId = (id) => {
    this.setState({
      movieId: id
    })
  }
  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Result data={this.state} click={this.getId} movieId={this.state.movieId} />
        </div>
      </Router>
    );
  }
}
export default App;
