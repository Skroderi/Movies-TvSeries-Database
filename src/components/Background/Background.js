import React from "react";
import PropTypes from "prop-types";

function Background({ bgc }) {
  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${bgc}')`
      }}
      alt=""
      className="container__bg"
    ></div>
  );
}
Background.propTypes = {
  bgc: PropTypes.string.isRequired
};
export default Background;
