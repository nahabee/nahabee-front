import { useState, useEffect } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const [allimages, setAllImages] = useState([]);

  // axios pour récupèrer les images par page

  useEffect(() => {
    const getallImages = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages/21/images`
      );
      setAllImages(data);
    };
    getallImages();
  }, []);
  return (
    <div className="w-[85%] flex jusitfy-center items-center ">
      <AliceCarousel autoPlayInterval="4000">
        {allimages &&
          allimages.map(({ name, id }) => (
            <div key={id}>
              <img className="rounded-lg w-fit " src={name} />
            </div>
          ))}
      </AliceCarousel>
    </div>
  );
};

export default Carousel;
