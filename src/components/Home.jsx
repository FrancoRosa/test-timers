import Navigator from "./Navigator";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <p>This is another brick in the wall</p>
      <Navigator to="/config" />
    </div>
  );
};

export default Home;
