import PropTypes from "prop-types";
import { Link } from "react-router";

function Card({ photographers }) {
  return (
    <>
      {photographers.map((photographer) => (
        <article className="card" key={photographer.id}>
          <Link to={`/photographer/${photographer.id}`}>
            <img
              src={`./assets/photographers/portrait/${photographer.portrait}`}
              className="card-img"
              alt={`photo de profil${photographer.name}`}
            />
            <h2 className="card-title">{photographer.name}</h2>
          </Link>
          <p className="country_photographer">
            {photographer.city},{photographer.country}
          </p>
          <p>{photographer.tagline}</p>
          <p>{photographer.price}€</p>
        </article>
      ))}
    </>
  );
}

Card.propTypes = {
  photographers: PropTypes.array.isRequired,
};

export default Card;
