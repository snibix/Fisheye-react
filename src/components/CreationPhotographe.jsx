import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router";

function CreationPhotographe({ media, id }) {
  // Créer un tableau d'états pour les likes des médias
  const [likedMedia, setLikedMedia] = useState(
    media.reduce((acc, cur) => {
      acc[cur.id] = false; // initialiser tous les médias comme non aimés
      return acc;
    }, {})
  );

  // Fonction pour basculer l'état de like pour un média donné
  const toggleLike = (mediaId) => {
    setLikedMedia((prevState) => ({
      ...prevState,
      [mediaId]: !prevState[mediaId], // inverse l'état du like
    }));
  };

  return (
    <section className="photograph-medias">
      {media.map((mediaItem) => (
        <article className="card" key={mediaItem.id} data-aos="fade-up">
          <Link>
            <img
              src={`/assets/photographers/medias/${id}/${mediaItem.image}`}
              className="card-img"
              alt={`photo de profil ${mediaItem.name}`}
            />
          </Link>
          <div className="card-body">
            <h3 className="card-title">{mediaItem.title}</h3>
            <div className="card-likes">
              <span className="number-likes">{mediaItem.likes}</span>
              <button
                className="btn-likes"
                onClick={() => toggleLike(mediaItem.id)}
              >
                <FontAwesomeIcon
                  icon={
                    likedMedia[mediaItem.id] ? faHeartSolid : faHeartRegular
                  }
                  className="icon-likes"
                />
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

CreationPhotographe.propTypes = {
  media: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default CreationPhotographe;
