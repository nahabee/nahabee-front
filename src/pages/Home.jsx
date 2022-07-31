import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-creme ">
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
      <div className="xs:hidden bg-grey h-screen w-screen mobS:rounded-lg">
        <NavBar />
        <div>
          <h1 className="font-title text-10xl flex justify-center text-creme">
            n
          </h1>
          <h1 className="font-title text-10xl flex justify-center text-creme -mt-72">
            a
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
