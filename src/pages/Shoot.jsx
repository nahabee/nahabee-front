import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";

const Shoot = () => {
  return (
    <div className="h-screen w-screen bg-creme ">
      <NavBar />
      <div className="flex justify-center shadow-2xl rounded-lg pt-20 mx-20 mt-5 bg-creme">
        <Carousel />
      </div>
    </div>
  );
};

export default Shoot;
