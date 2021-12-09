import { useStoreState } from "easy-peasy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Wifi = () => {
  const network = useStoreState((state) => state.network);

  return (
    <Link to={"/wifi"} className="wifi">
      <FontAwesomeIcon
        icon={faWifi}
        className={network ? "has-text-success" : "has-text-grey"}
      />
    </Link>
  );
};

export default Wifi;
