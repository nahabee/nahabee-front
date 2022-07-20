import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";

const Campaigns = () => {
  return (
    <div className="bg-creme h-screen">
      <NavBar />
      <div className="flex flex-col mt-20 ">
        <span className="bg-dark h-2 w-screen"></span>
        <Gallery />
      </div>
    </div>
  );
};

export default Campaigns;
