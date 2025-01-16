import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import MediaContent from "./MediaContent";

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
      {media.map((item) => (
        <article className="card" key={item.id} data-aos="fade-up">
          <Link>
            <MediaContent item={item} photographerId={id} />
          </Link>
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <div className="card-likes">
              <span className="number-likes">{likesCount[item.id]}</span>
              <button className="btn-likes" onClick={() => handleLike(item.id)}>
                <FontAwesomeIcon
                  icon={likedMedia[item.id] ? faHeartSolid : faHeartRegular}
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
  media: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      video: PropTypes.string,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default CreationPhotographe;
