import React, { useEffect } from "react";
import Landing from "../templates/Landing";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { fetchTvs } from "../actions/tvseries";
import Background from "../components/Background/Background";
import PropTypes from "prop-types";

function Tvseries({ tvseries, fetchTvs }) {
  useEffect(() => {
    if (tvseries.trending.length < 1) {
      fetchTvs();
    }
  }, [fetchTvs, tvseries.trending.length]);

  return (
    <Landing>
      <Background
        bgc={
          tvseries.trending.length > 0 ? tvseries.trending[0].backdrop_path : ""
        }
      />
      {tvseries.trending.map(tvserie => {
        return (
          <Card
            title={tvserie.original_name}
            release={tvserie.first_air_date}
            poster={tvserie.poster_path}
            rate={tvserie.vote_average}
            id={tvserie.id}
            key={tvserie.id}
          />
        );
      })}
    </Landing>
  );
}

Tvseries.propTypes = {
  fetchTvs: PropTypes.func.isRequired,
  tvseries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tvseries: state.tvseries
});
export default connect(
  mapStateToProps,
  { fetchTvs }
)(Tvseries);