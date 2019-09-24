import React from "react";
import PropTypes from "prop-types";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";

const Home = props => {
  const { getUserFilter, value, characters, filterName } = props;
  return (
    <React.Fragment>
      <FilterByName value={filterName} getUserFilter={getUserFilter} />
      <CharacterList characters={characters} filterName={value} />
    </React.Fragment>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string,
  getUserFilter: PropTypes.func,
  filterName: PropTypes.string
};
export default Home;
