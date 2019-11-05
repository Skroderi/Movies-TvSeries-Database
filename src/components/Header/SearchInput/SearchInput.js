import React from "react";
import { connect } from "react-redux";
import { searchItem, clearSearchedItems } from "../../../actions/searchItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SearchInput({
  pageType,
  searchItem,
  searchedItems,
  clearSearchedItems
}) {
  const item = pageType.slice(0, -1);

  const searchData = e => {
    const value = e.target.value;
    if (value === "") {
      clearData();
    } else {
      searchItem(item, value);
    }
  };

  const clearData = () => {
    clearSearchedItems();
    document.querySelector(".header__search-bar-input").value = "";
  };
  return (
    <div className="header__search-bar">
      <input
        type="search"
        className="header__search-bar-input"
        placeholder={pageType === "movies" ? "search movie" : "search tv serie"}
        onChange={searchData}
      />
      <ul className="search-bar__list">
        {searchedItems &&
          searchedItems.slice(0, 6).map(item => {
            return (
              <Link
                to={`/${pageType}/${pageType.slice(0, -1)}/${item.id}`}
                key={item.id}
                className="search-bar__link"
                onClick={clearData}
              >
                <li className="search-bar__item">
                  {item.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt="poster"
                      style={{ width: "60px", height: "70px" }}
                    />
                  )}

                  <span className="search-bar__item--title">
                    {item.original_title
                      ? item.original_title
                      : item.original_name}
                  </span>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
SearchInput.propTypes = {
  pageType: PropTypes.string.isRequired,
  searchItem: PropTypes.func.isRequired,
  searchedItems: PropTypes.array.isRequired,
  clearSearchedItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchedItems: state.searchedItems
});
export default connect(
  mapStateToProps,
  { searchItem, clearSearchedItems }
)(SearchInput);
