import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./Card";
import error from "../images/error.png";
import "../stylesheets/list.scss";

const List = props => {
  const { characters } = props;

  if (characters.length === 0) {
    return (
      <div className="error">
        <p className="error__text">
          <strong>Personaje no encontrado</strong>
        </p>
        <img src={error} className="error__img" alt="error" />
      </div>
    );
  } else {
    return (
      <ul className="characters">
        {characters.map(character => {
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
  }
};

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired
};

export default List;
