// import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from "react";
import Card from "../components/Card";
import data from "../data/photographers.json";
function Accueil() {
  const [photographers] = useState(data.photographers);
  return (
    <main id="main">
      <div className="photographer_section" data-aos="fade-down">
        <Card photographers={photographers} />
      </div>
    </main>
  );
}

Accueil.propTypes = {};

export default Accueil;
