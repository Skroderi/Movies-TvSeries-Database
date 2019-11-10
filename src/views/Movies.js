import React, { useEffect } from "react";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Card/Card";
import { fetchMovies } from "../actions/movies";
import { clearSearchedItems } from "../actions/searchItem";
import { connect } from "react-redux";
import Background from "../components/Background/Background";
import withContext from "../hoc/withContext";
import PropTypes from "prop-types";

function Movies({ fetchMovies, movies, clearSearchedItems, searchedItems }) {
  useEffect(() => {
    if (movies.trending.length < 1) {
      fetchMovies();
    }
    if (searchedItems.length > 0) {
      document.querySelector(".header__search-bar-input").value = "";
      clearSearchedItems();
    }
  }, [fetchMovies, movies.trending.length, clearSearchedItems]);

  return (
    <GridTemplate>
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
    </GridTemplate>
  );
}

Movies.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  searchedItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  searchedItems: state.searchedItems
});
export default connect(
  mapStateToProps,
  { fetchMovies, clearSearchedItems }
)(withContext(Movies));
