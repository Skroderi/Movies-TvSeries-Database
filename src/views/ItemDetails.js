import React, { useEffect } from "react";
import Landing from "../templates/Landing";
import withContext from "../hoc/withContext";
import { getItemDetails, getItemCast } from "../actions/itemDetails";
import { connect } from "react-redux";
import Background from "../components/Background/Background";
import PropTypes from "prop-types";

function ItemDetails({
  getItemDetails,
  pageContext,
  match,
  itemDetails,
  location: { pathname }
}) {
  useEffect(() => {
    const pageTypes = ["movies", "tvs"];
    const [currentPage] = pageTypes.filter(page => pathname.includes(page));
    const item = currentPage.slice(0, -1);
    getItemDetails(item, match.params.id);
    window.scrollTo(0, 0);
  }, [pathname, getItemDetails, match.params.id]);

  return (
    <Landing>
      <Background
        bgc={itemDetails.backdrop_path ? itemDetails.backdrop_path : ""}
      />
      <div className="movieDetails">
        <div className="movieDetails__poster">
          <img
            src={`https://image.tmdb.org/t/p/w300/${itemDetails.poster_path}`}
            alt=""
            className="movieDetails__img"
          />
        </div>
        <div className="movieDesc">
          <h1 className="movieDesc__header">
            {itemDetails.original_name
              ? itemDetails.original_name
              : itemDetails.original_title}
          </h1>
          <p className="movieDesc__overview paragraph">
            {itemDetails.overview}
          </p>
          <ul className="movieDesc__list-items">
            <li className="list_item">
              <p className="list__item-paragraph paragraph">Genres:</p>
              {itemDetails.genres &&
                itemDetails.genres.map(genre => {
                  return <strong key={genre.id}>{genre.name},</strong>;
                })}
            </li>
            <li className="list_item">
              <p className="list__item-paragraph">Premiere:</p>
              <strong>
                {itemDetails.first_air_date
                  ? itemDetails.first_air_date
                  : itemDetails.release_date}
              </strong>
            </li>
            {pageContext.pageType === "tvs" ? (
              <>
                <li className="list_item">
                  <p className="list__item-paragraph">Seasons:</p>
                  <strong>{itemDetails.number_of_seasons}</strong>
                </li>
                <li className="list_item">
                  <p className="list__item-paragraph">Episodes:</p>
                  <strong>{itemDetails.number_of_episodes}</strong>
                </li>
              </>
            ) : null}

            <li className="list_item">
              <p className="list__item-paragraph">Production:</p>
              <strong>
                {itemDetails.origin_country ? (
                  itemDetails.origin_country
                ) : (
                  <>
                    {itemDetails.production_countries &&
                      itemDetails.production_countries.map(country => {
                        return (
                          <strong key={Math.random() * 10}>
                            {country.iso_3166_1},
                          </strong>
                        );
                      })}
                  </>
                )}
              </strong>
            </li>
            <li className="list_item">
              <p className="list__item-paragraph">Rating:</p>
              <strong>{itemDetails.vote_average}/10</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="movie-videos">
        <h1 className="movie-videos__title">Trailers</h1>
        {itemDetails.videos &&
          itemDetails.videos.results.slice(0, 2).map(video => {
            return (
              <iframe
                className="movie-videos__video"
                title="Trailer"
                style={{ border: "none" }}
                src={"https://www.youtube.com/embed/" + video.key}
                key={video.id}
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                frameBorder="0"
              ></iframe>
            );
          })}
      </div>
      <div className="movie-cast">
        <h1 className="movie-cast__title">Cast</h1>
        {itemDetails.cast &&
          itemDetails.cast.slice(0, 6).map(cast => {
            return (
              <div className="movie-cast__item" key={cast.id}>
                <img
                  className="movie-cast__img"
                  src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                  alt={cast.name}
                />
                <div className="movie-cast__info">
                  <p className="movie-cast__info-name">
                    <strong>{cast.name}</strong>
                  </p>
                  <p className="movie-cast__info-character">
                    <span>as:</span> {cast.character}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </Landing>
  );
}

ItemDetails.propTypes = {
  getItemDetails: PropTypes.func.isRequired,
  itemDetails: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itemDetails: state.itemDetails
});
export default connect(
  mapStateToProps,
  { getItemDetails, getItemCast }
)(withContext(ItemDetails));
