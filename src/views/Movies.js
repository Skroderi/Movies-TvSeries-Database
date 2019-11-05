import React, { useEffect } from "react";
import Landing from "../templates/Landing";
import Card from "../components/Card/Card";
import { fetchMovies } from "../actions/movies";
import { connect } from "react-redux";
import Background from "../components/Background/Background";
import withContext from "../hoc/withContext";
import PropTypes from "prop-types";

function Movies({ fetchMovies, movies }) {
  useEffect(() => {
    if (movies.trending.length < 1) {
      fetchMovies();
    }
  }, [fetchMovies, movies.trending.length]);

  return (
    <Landing>
      <Background
        bgc={movies.trending.length > 0 ? movies.trending[0].backdrop_path : ""}
      />
      {movies.trending.map(movie => {
        return (
          <Card
            title={movie.original_title}
            release={movie.release_date}
            poster={movie.poster_path}
            rate={movie.vote_average}
            id={movie.id}
            key={movie.id}
          />
        );
      })}
    </Landing>
  );
}

Movies.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});
export default connect(
  mapStateToProps,
  { fetchMovies }
)(withContext(Movies));
