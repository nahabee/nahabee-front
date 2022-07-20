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

  // axios pour récupèrer les images

  useEffect(() => {
    const getallImages = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/images`
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
    <div>
      <input
        className="outline-none focus w-96 mt-10 ml-[6%] rounded-lg focus:shadow-sm font-body"
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

      <div className=" text-gray-700 grid grid-cols-4 mt-10 ">
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
