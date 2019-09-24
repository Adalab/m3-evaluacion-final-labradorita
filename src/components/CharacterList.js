import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import error from "../images/error.png";
import "../stylesheets/characterList.scss";

const CharacterList = props => {
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
                <CharacterCard
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

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired
};

export default CharacterList;
