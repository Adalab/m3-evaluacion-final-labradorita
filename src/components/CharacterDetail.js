import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/characterDetail.scss";
import error from "../images/error.png";

const CharacterDetail = props => {
  const { routerProps, characters } = props;
  const characterId = parseInt(routerProps.match.params.characterId);
  const character = characters.find(item => item.id === characterId);
  let characterStatus = "";
  let speciesStatus = "";

  if (character.status === "Alive") {
    characterStatus = " ❤️";
  } else if (character.status === "Dead") {
    characterStatus = " ☠️";
  } else {
    characterStatus = " ❔";
  }

  if (character.species === "Human") {
    speciesStatus = " 👫";
  } else {
    speciesStatus = " 👽";
  }

  // console.log(characterId);
  // console.log(characters.length);

  if (CharacterDetail) {
    const { image, name, origin, episode } = character;
    return (
      <div className="characterDetail">
        <Link to="/" className="characterDetail__link">
          &lt; VOLVER
        </Link>
        <div className="characterDetail__card">
          <img src={image} alt={name}></img>
          <div className="characterDetail__text">
            <h2 className="characterDetail__text__title"> {name}</h2>
            <p>
              <strong>Status:</strong> {characterStatus}
            </p>
            <p>
              <strong>Species:</strong> {speciesStatus}
            </p>
            <p>
              <strong>Origin:</strong> {origin.name}
            </p>
            <p>
              <strong>Episodes:</strong> {episode.length}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="linkError">
        <h3 className="linkError__text">La página buscada no existe</h3>
        <Link to="/" className="linkError__link">
          &lt; VOLVER
        </Link>
        <img src={error} className="linkError__img" alt="error" />
      </div>
    );
  }
};

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired
};

export default CharacterDetail;
