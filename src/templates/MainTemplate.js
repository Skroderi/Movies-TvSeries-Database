import React, { Component } from "react";
import PropTypes from "prop-types";
import PageContext from "../context";
import { withRouter } from "react-router";

class MainTemplate extends Component {
  state = {
    pageType: "",
    sortCategory: ""
  };

  componentDidMount() {
    this.setCurrentPage();
    this.setCurrentSortCategory();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
    this.setCurrentSortCategory(prevState);
  }

  setCurrentPage = (prevState = "") => {
    const pageTypes = ["movies", "tvs"];
    const {
      location: { pathname }
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  setCurrentSortCategory = (prevState = "") => {
    const categoryTypes = ["popular", "top_rated"];
    const {
      location: { pathname }
    } = this.props;

    const [currentCategory] = categoryTypes.filter(category =>
      pathname.includes(category)
    );

    if (prevState.sortCategory !== currentCategory) {
      this.setState({ sortCategory: currentCategory });
    }
  };

  render() {
    const { children } = this.props;

    return (
      <PageContext.Provider value={this.state}>{children}</PageContext.Provider>
    );
  }
}

MainTemplate.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(MainTemplate);
