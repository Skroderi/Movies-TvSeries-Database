import React, { useEffect } from "react";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Card/Card";
import PropTypes from "prop-types";
import { fetchSortedMovies } from "../actions/movies";
import { connect } from "react-redux";
import Background from "../components/Background/Background";
import withContext from "../hoc/withContext";

function FilterMovies({
  fetchSortedMovies,
  movies,
  pageContext,
  location: { pathname }
}) {
  useEffect(() => {
    const sortTypes = ["popular", "top_rated"];
    const [currentSort] = sortTypes.filter(page => pathname.includes(page));
    if (movies.popular.length < 1 || movies.top_rated.length < 1) {
      fetchSortedMovies(currentSort);
    }
  }, [
    fetchSortedMovies,
    pathname,
    movies.popular.length,
    movies.top_rated.length
  ]);

  return (
    <GridTemplate>
      {pageContext.sortCategory === "popular" ? (
        <>
          <Background
            bgc={
              movies.popular.length > 0 ? movies.popular[0].backdrop_path : ""
            }
          />
          {movies.popular.map(movie => {
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
        </>
      ) : (
        <>
          <Background
            bgc={
              movies.top_rated.length ? movies.top_rated[0].backdrop_path : ""
            }
          />
          {movies.top_rated.map(movie => {
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
        </>
      )}
    </GridTemplate>
  );
}

FilterMovies.propTypes = {
  fetchSortedMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});
export default connect(
  mapStateToProps,
  { fetchSortedMovies }
)(withContext(FilterMovies));
