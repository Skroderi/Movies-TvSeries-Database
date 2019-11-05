import React, { useEffect } from "react";
import Landing from "../templates/Landing";
import Card from "../components/Card/Card";
import { fetchSortedTvs } from "../actions/tvseries";
import { connect } from "react-redux";
import Background from "../components/Background/Background";
import withContext from "../hoc/withContext";
import PropTypes from "prop-types";

function FilterTvs({
  fetchSortedTvs,
  tvseries,
  pageContext,
  location: { pathname }
}) {
  useEffect(() => {
    const sortTypes = ["popular", "top_rated"];
    const [currentSort] = sortTypes.filter(page => pathname.includes(page));
    if (tvseries.popular.length < 1 || tvseries.top_rated.length < 1) {
      fetchSortedTvs(currentSort);
    }
  }, [
    fetchSortedTvs,
    pathname,
    tvseries.popular.length,
    tvseries.top_rated.length
  ]);

  return (
    <Landing>
      {pageContext.sortCategory === "popular" ? (
        <>
          <Background
            bgc={
              tvseries.popular.length > 0
                ? tvseries.popular[0].backdrop_path
                : ""
            }
          />
          {tvseries.popular.map(tv => {
            return (
              <Card
                title={tv.original_name}
                release={tv.release_date}
                poster={tv.poster_path}
                rate={tv.vote_average}
                id={tv.id}
                key={tv.id}
              />
            );
          })}
        </>
      ) : (
        <>
          <Background
            bgc={
              tvseries.top_rated.length > 0
                ? tvseries.top_rated[0].backdrop_path
                : ""
            }
          />
          {tvseries.top_rated.map(tv => {
            return (
              <Card
                title={tv.original_name}
                release={tv.release_date}
                poster={tv.poster_path}
                rate={tv.vote_average}
                id={tv.id}
                key={tv.id}
              />
            );
          })}
        </>
      )}
    </Landing>
  );
}

FilterTvs.propTypes = {
  fetchSortedTvs: PropTypes.func.isRequired,
  tvseries: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tvseries: state.tvseries
});
export default connect(
  mapStateToProps,
  { fetchSortedTvs }
)(withContext(FilterTvs));
