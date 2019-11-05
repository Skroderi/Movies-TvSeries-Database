import React from "react";
import { NavLink } from "react-router-dom";

function ToggleButtons() {
  return (
    <>
      <NavLink
        to="/movies"
        className="header__buttons-button"
        activeClassName="header__buttons-button--active"
      >
        Movies
      </NavLink>
      <NavLink
        to="/tvs"
        className="header__buttons-button"
        activeClassName="header__buttons-button--active"
      >
        TvSeries
      </NavLink>
    </>
  );
}

export default ToggleButtons;
