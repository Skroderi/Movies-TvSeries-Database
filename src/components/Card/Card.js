import React from "react";
import { NavLink } from "react-router-dom";
import withContext from "../../hoc/withContext";
import PropTypes from "prop-types";

function Card({ title, poster, rate, release, id, pageContext }) {
  const item = pageContext.pageType.slice(0, -1);
  return (
    <figure className="movie results__movie">
      <NavLink
        exact
        to={`/${pageContext.pageType}/${item}/${id}`}
        className="movie__link"
      >
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster}`}
          alt={title}
          className="movie__poster"
        />

        <div className="movie__info">
          <span className="movie__info-header">{title}</span>
          <p className="movie__info-release">Release:</p>
          <p className="movie__info-date">{release}</p>
          <div className="movie__info-rate">
            <p className="info-rate__parapgraph">Rate:</p>
            <p className="minfo-rate__votes">{rate}</p>
          </div>
        </div>
      </NavLink>
    </figure>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  rate: PropTypes.number,
  release: PropTypes.string,
  id: PropTypes.number.isRequired,
  pageContext: PropTypes.object.isRequired
};
export default withContext(Card);
