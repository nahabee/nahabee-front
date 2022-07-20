import mcdata from "../mcdata";
import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [allbrands, setAllBrands] = useState([]);
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
        {mcdata &&
          mcdata
            .filter((mcdata) =>
              mcdata.name.toLowerCase().includes(containsWord.toLowerCase())
            )
            .filter((data) =>
              data.name.toLowerCase().includes(selected.toLowerCase())
            )
            .map(({ src, name }, index) => (
              <div className="">
                <a className="hidden">{name}</a>
                <img
                  key={index}
                  alt="gallery"
                  value={containsWord}
                  onChange={(e) => handleContainsWord(e.target.value)}
                  className="block object-cover object-center rounded-lg w-[60%] ml-10 hover:scale-150 cursor-zoom-in    "
                  src={src}
                />
              </div>
            ))}
      </div>
    </div>
  );
};
export default Gallery;
