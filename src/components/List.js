import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../stylesheets/list.scss";

const List = props => {
  const { characters, filterName } = props;
  return (
    <ul className="characters">
      {characters
        .filter(myFilterName =>
          myFilterName.name.toLowerCase().includes(filterName.toLowerCase())
        )
        .map(character => {
          return (
            <li className="character" key={character.id}>
              <Link to={`/detail/${character.id}`} className="character__link">
                <Card
                  name={character.name}
                  species={character.species}
                  image={character.image}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

List.propTypes = {
  //   characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired
};

export default List;
