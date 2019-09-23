import React from "react";
import PropTypes from "prop-types";

const FilterByName = props => {
  const { filterName, getUserFilter } = props;
  return (
    <div className="search__container">
      <label htmlFor="search" className="search__label">
        Busca a tu personaje:
      </label>
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
