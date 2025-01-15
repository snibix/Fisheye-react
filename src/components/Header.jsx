// import React from "react";

import { Link } from "react-router";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="assets/images/logo.png" className="logo" alt="fisheye logo" />
      </Link>
      <h1>Nos photographes</h1>
    </header>
  );
}

Header.propTypes = {};

export default Header;
