import React from "react";
import Header from "../components/Header/Header";
import PropTypes from "prop-types";

function GridTemplate({ children }) {
  return (
    <div className="container">
      <Header />
      <main className="results">{children}</main>
    </div>
  );
}
GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
};

export default GridTemplate;
