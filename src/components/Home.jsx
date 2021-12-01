import { useStoreActions, useStoreState } from "easy-peasy";
import Navigator from "./Navigator";
import Box from "./Box";
import { useEffect } from "react";

const Home = () => {
  const boxes = useStoreState((state) => state.boxes);
  const setClock = useStoreActions((action) => action.setClock);
  const elements = [...Array(parseInt(boxes)).keys()];

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box-container">
      {elements.map((x) => (
        <Box key={x} />
      ))}
      <Navigator to="/config" />
    </div>
  );
};

export default Home;
