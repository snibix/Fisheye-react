import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import Lightbox from "./LightBox";
import MediaContent from "./MediaContent";

function CreationPhotographe({ media, id, onUpdateLikes, sortBy }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedMedia, setLikedMedia] = useState(
    media.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );
  // Ajout du state likesCount initialisé avec les likes de chaque média
  const [likesCount, setLikesCount] = useState(
    media.reduce((acc, item) => {
      acc[item.id] = item.likes;
      return acc;
    }, {})
  );

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const changeImage = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    } else if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + media.length) % media.length
      );
    }
  };

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

      const totalLikes = Object.values(newLikesCount).reduce(
        (total, count) => total + count,
        0
      );
      onUpdateLikes(totalLikes);

      return newLikesCount;
    });
  };

  const sortedMedia = [...media].sort((a, b) => {
    switch (sortBy) {
      case "likes":
        return b.likes - a.likes;
      case "dates":
        return new Date(b.date) - new Date(a.date);
      case "titles":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <section className="photograph-medias">
      {sortedMedia.map((item, index) => (
        <article className="card" key={item.id} data-aos="fade-up">
          <div className="image-container" onClick={() => openModal(index)}>
            <MediaContent item={item} photographerId={id} />
          </div>
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

      <Lightbox
        images={sortedMedia}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        currentIndex={currentIndex}
        changeImage={changeImage}
      />
    </section>
  );
}

CreationPhotographe.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  onUpdateLikes: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
};

export default CreationPhotographe;
