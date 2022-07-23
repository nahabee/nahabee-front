import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";

const Shoot = () => {
  const [allimages, setAllImages] = useState([]);

  // axios pour récupèrer les images par page

  useEffect(() => {
    const getallImages = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages/3/images`
      );
      setAllImages(data);
    };
    getallImages();
  }, []);
  return (
    <div className="h-screen w-screen bg-creme ">
      <NavBar />
      <div className="flex justify-center shadow-2xl rounded-lg pt-20 mx-20 mt-5 bg-creme mobS:hidden">
        <Carousel />
      </div>
      {/* mobile version */}
      <div>
        {allimages &&
          allimages.map(({ name, id }) => <img key={id} src={name} />)}
      </div>
    </div>
  );
};

export default Shoot;
