// import React from 'react'
import PropTypes from "prop-types";

function HeaderDetail({ photographer }) {
  return (
    <section className="photograph-header" data-aos="fade-down">
      <div>
        <h1 className="photograph-title">{photographer.name}</h1>
        <h2 className="photograph-country">
          {photographer.country}, {photographer.city}
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
  );
}

HeaderDetail.propTypes = {
  photographer: PropTypes.object,
};

export default HeaderDetail;
