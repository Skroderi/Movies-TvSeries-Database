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
    tvSeries: []
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

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Result data={this.state} />
        </div>
      </Router>
    );
  }
}
export default App;
