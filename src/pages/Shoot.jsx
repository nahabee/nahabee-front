import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";

const Shoot = () => {
  return (
    <div className="h-screen w-screen bg-creme ">
      <NavBar />
      <div className="mt-10">
        <Carousel />
      </div>
    </div>
  );
};

export default Shoot;
