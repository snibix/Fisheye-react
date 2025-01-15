// import React from 'react'
// import PropTypes from 'prop-types'

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../data/photographers.json";

function DetailsPhotograph() {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    const foundPhotographer = data.photographers.find(
      (photographer) => photographer.id.toString() === id
    );
    setPhotographer(foundPhotographer);
  }, [id]);

  if (!photographer) {
    return <div>Chargement...</div>;
  }
  return (
    <main>
      <section className="photograph-header">
        <div>
          <h1 className="photograph-title">{photographer.name}</h1>
          <h2 className="photograph-country">
            {photographer.city}, {photographer.country}
          </h2>
          <p className="photograph-tagline">{photographer.tagline}</p>
        </div>
        <button className="contact_button">Contactez-moi</button>
        <img
          src={`/assets/photographers/portrait/${photographer.portrait}`}
          alt="photo de profil"
          className="photograph-img"
        />
      </section>
      <section className="photograph-filter">
        <label htmlFor="sort">Trier par</label>
        <select id="sort">
          <option value="likes">Popularité</option>
          <option value="dates">Date</option>
          <option value="titles">Titre</option>
        </select>
      </section>
      <section className="photograph-medias"></section>
    </main>
  );
}

DetailsPhotograph.propTypes = {};

export default DetailsPhotograph;
