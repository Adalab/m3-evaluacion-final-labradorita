import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/detail.scss";

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
          &lt; VOLVER
        </Link>
        <div className="characterDetail__card">
          <img src={image} alt={name}></img>
          <div className="characterDetail__text">
            <h2 className="characterDetail__text__title"> {name}</h2>
            <p>
              <strong>Status:</strong> {status}
            </p>
            <p>
              <strong>Species:</strong> {species}
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
    // } else if (characterId === ) {
    //   console.log("cargando....");
    //   return <div>Cargando...</div>;
  } else {
    return (
      <div className="linkError">
        <h3 className="linkError__text">La página buscada no existe</h3>
        <Link to="/" className="linkError__text">
          &lt; VOLVER
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
