import { useStoreState } from "easy-peasy";

const Box = () => {
  const size = useStoreState((state) => state.size);
  const pxWidth = useStoreState((state) => state.pxWidth);
  const cmWidth = useStoreState((state) => state.cmWidth);

  const conv = pxWidth / cmWidth;
  const sizePx = [parseInt(size[0] * conv), parseInt(size[1] * conv)];
  console.log(sizePx);

  const boxStyle = {
    height: sizePx[1],
    width: sizePx[0],
  };
  return (
    <div className="box" style={boxStyle}>
      <h1>This is Home</h1>
      <p>This is another brick in the wall</p>
    </div>
  );
};

export default Box;
