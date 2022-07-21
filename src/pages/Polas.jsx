import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Polas = () => {
  const [allimages, setAllImages] = useState([]);
  const [text, setText] = useState();

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
  // axios pour récupèrer le texte

  useEffect(() => {
    const getText = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages`
      );
      setText(data);
    };
    getText();
  }, []);

  return (
    <div className="bg-creme w-screen h-screen">
      <NavBar />
      <div className="flex pb-10 mt-6 mobS:bg-creme ">
        <div className="grid grid-cols-2 grid-rows-2  m-auto shadow-lg gap-10  mt-10 h-5/6 place-items-center mobS:grid-cols-1 ">
          {allimages &&
            allimages.map(({ name, id }) => (
              <div key={id} className="group cursor-pointer ">
                <img
                  className="object-cover rounded-lg bg-white h-72 hover:opacity-30 "
                  src={name}
                />
                <span className="absolute -mt-44 hover:text-transparent translate-x-2">
                  <a className="font-body flex z-50 flex-col font-extrabold text-xl opacity-0 group-hover:opacity-100 mobS:hidden">
                    Height: 166cm - 5.6 UK
                  </a>
                  <a className="font-body font-extrabold text-xl opacity-0 group-hover:opacity-100 mobS:hidden ">
                    Shoes: 38 EU - 5 UK - 7 US
                  </a>
                </span>
              </div>
            ))}
        </div>
        <h1> </h1>
      </div>
    </div>
  );
};

export default Polas;
