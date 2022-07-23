import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-creme">
      <div className="flex flex-col mobS:hidden ">
        <h1 className="font-title text-10xl text-green text-center">naha</h1>
        <h2 className="font-subtitle text-9xl text-center ">
          <Link to="/campaigns">
            <button className="rounded-full h-8 w-8 bg-dark hover:bg-grey animate-bounce hover:animate-none" />
          </Link>
          bee
        </h2>
      </div>
      {/* mobile version */}
      <div className="xs:hidden bg-dark h-screen w-screen">
        <h1 className="font-title text-creme text-9xl flex flex-col text-center">
          na
        </h1>
        <h1 className="font-title text-creme text-9xl flex flex-col text-center">
          ha
        </h1>
        <h1 className="font-subtitle text-creme text-9xl flex ml-14 text-center">
          <Link to="/campaigns">
            <button className="rounded-full h-8 w-8 bg-creme hover:bg-grey animate-bounce hover:animate-none" />
          </Link>
          bee
        </h1>
        <div className="">
          <ReactPlayer
            width="100%"
            loop="true"
            url="https://youtu.be/1YdGVwt6d8w"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
