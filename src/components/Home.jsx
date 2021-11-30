import { useStoreState } from "easy-peasy";
import Navigator from "./Navigator";
import Box from "./Box";

const Home = () => {
  const boxes = useStoreState((state) => state.boxes);
  const elements = [...Array(parseInt(boxes)).keys()];
  console.log(elements);
  return (
    <div>
      <h1>This is Home</h1>
      <p>This is another brick in the wall</p>
      {elements.map((x) => (
        <Box key={x} />
      ))}
      <Navigator to="/config" />
    </div>
  );
};

export default Home;
