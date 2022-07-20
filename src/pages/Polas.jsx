import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Polas = () => {
  const [allimages, setAllImages] = useState([]);

  // axios pour récupèrer les images par page

  useEffect(() => {
    const getallImages = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages/2/images`
      );
      setAllImages(data);
    };
    getallImages();
  }, []);

  return (
    <div className="bg-creme w-screen h-screen">
      <NavBar />
      <div className="flex">
        <div className="grid grid-cols-2 grid-rows-2 w-1/2 gap-3 mt-10 h-5/6  place-items-center">
          {allimages &&
            allimages.map(({ name, id }) => (
              <div key={id}>
                <img className="object-cover h-72" src={name} />
              </div>
            ))}
        </div>
        <div className="w-1/2">
          <h1> </h1>
        </div>
      </div>
    </div>
  );
};

export default Polas;
