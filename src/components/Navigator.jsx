import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faHome } from "@fortawesome/free-solid-svg-icons";

const Navigator = ({ to }) => {
  return (
    <Link to={to} className="navigator">
      {to === "/home" ? (
        <FontAwesomeIcon icon={faHome} />
      ) : (
        <FontAwesomeIcon icon={faTools} />
      )}
    </Link>
  );
};

export default Navigator;
