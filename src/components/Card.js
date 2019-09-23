import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  const { name, species, image } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={name}></img>
      </div>
      <h2 className="card__name">{name}</h2>
      <h3 className="species"> {species}</h3>
    </div>
  );
};
export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};
