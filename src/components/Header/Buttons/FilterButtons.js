import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
function FilterButtons({ pageType }) {
  return (
    <>
      <NavLink
        exact
        to={`/${pageType}`}
        className="header__filterBtns-button"
        activeClassName="header__filterBtns-button--active"
      >
        Trending
      </NavLink>
      <NavLink
        exact
        to={`/${pageType}/popular`}
        className="header__filterBtns-button"
        activeClassName="header__filterBtns-button--active"
      >
        Popular
      </NavLink>
      <NavLink
        exact
        to={`/${pageType}/top_rated`}
        className="header__filterBtns-button"
        activeClassName="header__filterBtns-button--active"
      >
        Top Rated
      </NavLink>
    </>
  );
}
FilterButtons.propTypes = {
  pageType: PropTypes.string.isRequired
};
export default FilterButtons;
