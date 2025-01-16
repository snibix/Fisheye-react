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
      acc[item.id] = false;
      return acc;
    }, {})
  );

  const [likesCount, setLikesCount] = useState(
    media.reduce((acc, item) => {
      acc[item.id] = item.likes;
      return acc;
    }, {})
  );

  // Fonction pour gérer le clic sur le cœur
  const handleLike = (photoId) => {
    const isCurrentlyLiked = likedMedia[photoId];

    // Mise à jour simultanée des deux états
    setLikedMedia((prev) => ({
      ...prev,
      [photoId]: !isCurrentlyLiked,
    }));

    setLikesCount((prev) => ({
      ...prev,
      [photoId]: prev[photoId] + (isCurrentlyLiked ? -1 : 1),
    }));
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
              <span className="number-likes">{likesCount[photo.id]}</span>
              <button
                className="btn-likes"
                onClick={() => handleLike(photo.id)}
              >
                <FontAwesomeIcon
                  icon={likedMedia[photo.id] ? faHeartSolid : faHeartRegular}
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
