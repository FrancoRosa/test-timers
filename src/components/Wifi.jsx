import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const Wifi = () => {
  return (
    <Link to={"/wifi"} className="wifi">
      <FontAwesomeIcon icon={faWifi} />
    </Link>
  );
};

export default Wifi;
