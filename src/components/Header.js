import React from "react";
import logo from "../images/Rick_and_Morty.png";
import "../stylesheets/header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__img" />
    </header>
  );
};
export default Header;
