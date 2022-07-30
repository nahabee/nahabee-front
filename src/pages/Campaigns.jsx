import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";

const Campaigns = () => {
  return (
    <div className="bg-creme h-screen mobS:bg-grey">
      <NavBar />
      <div className="flex flex-col mt-10 ">
        <span className="bg-dark h-2 w-screen mobS:w-screen mobS:hidden" />
        <Gallery />
      </div>
    </div>
  );
};

export default Campaigns;
