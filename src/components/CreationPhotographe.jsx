import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import MediaContent from "./MediaContent";

function CreationPhotographe({ media, id, onUpdateLikes, sortBy }) {
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

  // Trier les médias en fonction de `sortBy`
  const sortedMedia = [...media].sort((a, b) => {
    switch (sortBy) {
      case "likes":
        return b.likes - a.likes; // Trier par popularité (likes)
      case "dates":
        return new Date(b.date) - new Date(a.date); // Trier par date
      case "titles":
        return a.title.localeCompare(b.title); // Trier par titre
      default:
        return 0; // Ne rien changer si la valeur n'est pas reconnue
    }
  });

  // Fonction pour gérer le clic sur le cœur
  const handleLike = (photoId) => {
    const isCurrentlyLiked = likedMedia[photoId];

    setLikedMedia((prev) => ({
      ...prev,
      [photoId]: !isCurrentlyLiked,
    }));

    setLikesCount((prev) => {
      const newLikesCount = {
        ...prev,
        [photoId]: prev[photoId] + (isCurrentlyLiked ? -1 : 1),
      };

      // Met à jour le total des likes dans le parent
      const totalLikes = Object.values(newLikesCount).reduce(
        (total, count) => total + count,
        0
      );
      onUpdateLikes(totalLikes);

      return newLikesCount;
    });
  };

  return (
    <section className="photograph-medias">
      {sortedMedia.map((item) => (
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
  onUpdateLikes: PropTypes.func,
  sortBy: PropTypes.string,
};

export default CreationPhotographe;
