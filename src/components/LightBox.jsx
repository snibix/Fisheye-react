// Lightbox.jsx
import PropTypes from "prop-types";

function Lightbox({ images, isOpen, closeModal, currentIndex, changeImage }) {
  if (!isOpen) return null;

  const currentMedia = images[currentIndex] || {};

  // Fonction pour déterminer si c'est une vidéo
  const isVideo = (filename) => {
    if (!filename) return false;
    return filename.toLowerCase().endsWith(".mp4");
  };

  // Construire le chemin du média
  const mediaPath = currentMedia.video
    ? `/assets/photographers/medias/${currentMedia.photographerId}/${currentMedia.video}`
    : `/assets/photographers/medias/${currentMedia.photographerId}/${currentMedia.image}`;

  return (
    <div className="lightbox">
      <button className="lightbox-close" onClick={closeModal}>
        &times;
      </button>

      <button className="lightbox-prev" onClick={() => changeImage("prev")}>
        &#8249;
      </button>

      <div className="lightbox-content">
        {isVideo(currentMedia.video || currentMedia.image) ? (
          <video controls>
            <source src={mediaPath} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        ) : (
          <img
            src={mediaPath}
            alt={currentMedia.title || `Media ${currentIndex + 1}`}
          />
        )}
        <h2 className="lightbox-title">{currentMedia.title}</h2>
      </div>

      <button className="lightbox-next" onClick={() => changeImage("next")}>
        &#8250;
      </button>
    </div>
  );
}

Lightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      video: PropTypes.string,
      photographerId: PropTypes.number.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  changeImage: PropTypes.func.isRequired,
};

export default Lightbox;
