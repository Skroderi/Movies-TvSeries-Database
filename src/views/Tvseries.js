import React, { useEffect } from "react";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { fetchTvs } from "../actions/tvseries";
import { clearSearchedItems } from "../actions/searchItem";
import Background from "../components/Background/Background";
import PropTypes from "prop-types";

function Tvseries({ tvseries, fetchTvs, clearSearchedItems, searchedItems }) {
  useEffect(() => {
    if (tvseries.trending.length < 1) {
      fetchTvs();
    }
    if (searchedItems.length > 0) {
      document.querySelector(".header__search-bar-input").value = "";
      clearSearchedItems();
    }
  }, [fetchTvs, tvseries.trending.length, clearSearchedItems]);

  return (
    <GridTemplate>
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
    </GridTemplate>
  );
}

Tvseries.propTypes = {
  fetchTvs: PropTypes.func.isRequired,
  tvseries: PropTypes.object.isRequired,
  searchedItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tvseries: state.tvseries,
  searchedItems: state.searchedItems
});
export default connect(
  mapStateToProps,
  { fetchTvs, clearSearchedItems }
)(Tvseries);
