import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/filterByName.scss";

const FilterByName = props => {
  const { filterName, getUserFilter } = props;
  return (
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        value={filterName}
        onChange={getUserFilter}
        name="search"
        id="search"
        placeholder="Escribe el nombre"
      ></input>
    </div>
  );
};

FilterByName.propTypes = {
  filterName: PropTypes.string,
  getUserFilter: PropTypes.func
};

export default FilterByName;
