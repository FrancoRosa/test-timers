import { useStoreState } from "easy-peasy";
import Navigator from "./Navigator";
import Box from "./Box";

const Home = () => {
  const boxes = useStoreState((state) => state.boxes);
  const elements = new Array(parseInt(boxes));
  console.log(elements);
  return (
    <div>
      <h1>This is Home</h1>
      <p>This is another brick in the wall</p>
      {elements.map((x) => (
        <Box />
      ))}
      <Navigator to="/config" />
    </div>
  );
};

export default Home;
