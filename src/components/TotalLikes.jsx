import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function TotalLikes({ likeImg }) {
  const totalLikes = likeImg.reduce((total, item) => total + item.likes, 0);
  return (
    <div>
      <span id="totalLikes">{totalLikes}</span>&nbsp;
      <FontAwesomeIcon icon={faHeartSolid} className="icon-likes" />
    </div>
  );
}

TotalLikes.propTypes = {
  likeImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TotalLikes;
