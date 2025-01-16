import PropTypes from "prop-types";

function MediaContent({ item, photographerId }) {
  // Fonction pour déterminer si le média est une vidéo
  const isVideo = (filename) => {
    if (!filename) return false;
    return filename.toLowerCase().endsWith(".mp4");
  };

  if (isVideo(item.image || item.video)) {
    return (
      <video className="card-img" controls>
        <source
          src={`/assets/photographers/medias/${photographerId}/${item.video}`}
          type="video/mp4"
        />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    );
  }

  return (
    <img
      src={`/assets/photographers/medias/${photographerId}/${item.image}`}
      className="card-img"
      alt={`photo de ${item.title}`}
    />
  );
}

MediaContent.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    video: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  photographerId: PropTypes.string.isRequired,
};

export default MediaContent;
