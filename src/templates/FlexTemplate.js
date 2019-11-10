import React from "react";
import Header from "../components/Header/Header";
import PropTypes from "prop-types";

function FlexTemplate({ children }) {
  return (
    <div className="container">
      <Header />
      <main className="result-item">{children}</main>
    </div>
  );
}
FlexTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
};

export default FlexTemplate;
