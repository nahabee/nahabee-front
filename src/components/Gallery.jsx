import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [allbrands, setAllBrands] = useState([]);
  const [allimages, setAllImages] = useState([]);

  // axios pour récupèrer les marques
  useEffect(() => {
    const getallBrands = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/brands`
      );
      setAllBrands(data);
    };
    getallBrands();
  }, []);

  // axios pour récupèrer les images par page

  useEffect(() => {
    const getallImages = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages/1/images`
      );
      setAllImages(data);
    };
    getallImages();
  }, []);

  const [containsWord, setContainsWord] = useState("");
  const [selected, setSelected] = useState("");
  const handleContainsWord = (word) => {
    setContainsWord(word);
  };
  const handleSetBrand = (brand) => {
    setSelected(brand.target.value);
  };
  return (
    <div className="bg-creme ">
      <input
        className="outline-none focus w-96 mt-10 ml-[6%] rounded-lg focus:shadow-sm font-body mobS:w-44 mobS:ml-4 "
        type="text"
        placeholder="Search by brand"
        value={containsWord}
        onChange={(e) => handleContainsWord(e.target.value)}
      />

      <select
        className="outline-none font-body rounded-lg ml-4 focus:shadow-sm w-36 mt-4 "
        onChange={(e) => handleSetBrand(e)}
      >
        <option value=""> All brands</option>
        {allbrands &&
          allbrands.sort().map(({ name, id }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
      </select>

      <div className="text-gray-700 grid grid-cols-4 gap-4 mt-10 mobS:grid-cols-2 mobS:gap-2 mobS:-ml-4 mobS:w-screen">
        {allimages &&
          allimages
            .filter((allimages) =>
              allimages.brand.toLowerCase().includes(containsWord.toLowerCase())
            )
            .filter((data) =>
              data.brand.toLowerCase().includes(selected.toLowerCase())
            )
            .map(({ id, name, brand }) => (
              <div className="">
                <a className="hidden">{brand}</a>
                <img
                  key={id}
                  alt="gallery"
                  value={containsWord}
                  onChange={(e) => handleContainsWord(e.target.value)}
                  className="block object-cover object-center rounded-lg w-[60%] ml-10 hover:scale-150 cursor-zoom-in    "
                  src={name}
                />
              </div>
            ))}
      </div>
    </div>
  );
};
export default Gallery;
