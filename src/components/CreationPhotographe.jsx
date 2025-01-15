import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router";

function CreationPhotographe({ media, id }) {
  // Initialisation des likes et des états des coeurs pour chaque media
  const [likedMedia, setLikedMedia] = useState(
    media.reduce((acc, item) => {
      acc[item.id] = false; // Par défaut, tous les coeurs sont vides
      return acc;
    }, {})
  );

  // Fonction pour gérer le clic sur le cœur
  const handleLike = (photoId) => {
    setLikedMedia((prevLikedMedia) => {
      const newLikedMedia = { ...prevLikedMedia };
      newLikedMedia[photoId] = !newLikedMedia[photoId]; // Alterner l'état du cœur (rempli/vidé)
      return newLikedMedia;
    });
  };

  return (
    <section className="photograph-medias">
      {media.map((photo) => (
        <article className="card" key={photo.id} data-aos="fade-up">
          <Link>
            <img
              src={`/assets/photographers/medias/${id}/${photo.image}`}
              className="card-img"
              alt={`photo de profil ${photo.name}`}
            />
          </Link>
          <div className="card-body">
            <h3 className="card-title">{photo.title}</h3>
            <div className="card-likes">
              <span className="number-likes">{photo.likes}</span>
              <button
                className="btn-likes"
                onClick={() => handleLike(photo.id)} // Ajoute ou enlève un like au clic
              >
                {/* TODO: A terminer : -incrementations des likes */}
                <FontAwesomeIcon
                  icon={likedMedia[photo.id] ? faHeartSolid : faHeartRegular} // Afficher le coeur plein ou vide
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
