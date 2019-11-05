import React from "react";
import ToggleButtons from "./Buttons/ToggleButtons";
import FilterButtons from "./Buttons/FilterButtons";
import SearchInput from "./SearchInput/SearchInput";
import withContext from "../../hoc/withContext";
import PropTypes from "prop-types";

function Header({ pageContext }) {
  return (
    <header className="header">
      <div className="header__buttons">
        <ToggleButtons />
      </div>
      <SearchInput pageType={pageContext.pageType} />
      <div className="header__filterBtns">
        <FilterButtons pageType={pageContext.pageType} />
      </div>
    </header>
  );
}
Header.propTypes = {
  pageContext: PropTypes.object.isRequired
};
export default withContext(Header);
