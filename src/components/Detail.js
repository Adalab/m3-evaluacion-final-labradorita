import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Detail = props => {
  const { routerProps, characters } = props;
  const characterId = parseInt(routerProps.match.params.characterId);
  const character = characters.filter(item => item.id === characterId);
  // console.log(characterId);
  // console.log(characters.length);

  if (character[0]) {
    const { image, name, status, species, origin, episode } = character[0];

    return (
      <div className="characterDetail">
        <Link to="/" className="characterDetail__link">
          VOLVER a Home
        </Link>
        <img src={image} alt={name}></img>
        <h2> {name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Origin: {origin.name}</p>
        <p>Episodes: {episode.length}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Ese no existe</p>
        <Link to="/" className="characterDetail__link">
          VOLVER a Home
        </Link>
      </div>
    );
  }
};

Detail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired
};

export default Detail;
