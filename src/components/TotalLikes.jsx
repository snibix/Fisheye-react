import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function TotalLikes({ totalLikes }) {
  return (
    <div>
      <span id="totalLikes">{totalLikes}</span>&nbsp;
      <FontAwesomeIcon icon={faHeartSolid} className="icon-likes" />
    </div>
  );
}

TotalLikes.propTypes = {
  totalLikes: PropTypes.number,
};

export default TotalLikes;
