import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Detail = props => {
  return (
    <div className="characterItem">
      <div>Soy el detalle de:</div>

      <Link to="/" className="characterDetail__link">
        VOLVER a Home
      </Link>
    </div>
  );
};

Detail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
};

export default Detail;
