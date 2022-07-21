import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-creme  ">
      <div className="flex flex-col ">
        <h1 className="font-title text-10xl text-green text-center mobS:text-7xl ">
          naha
        </h1>
        <h2 className="font-subtitle text-9xl text-center ">
          <Link to="/campaigns">
            <button className="rounded-full h-8 w-8 bg-dark hover:bg-grey animate-bounce hover:animate-none" />
          </Link>
          bee
        </h2>
      </div>
    </div>
  );
};

export default Home;
