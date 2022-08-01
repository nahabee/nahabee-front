import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import CurrentDataContext from "../context/currentData";

const Gallery = () => {
  const [allbrands, setAllBrands] = useState([]);
  const { campaigns } = useContext(CurrentDataContext);

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
  const [containsWord, setContainsWord] = useState("");
  const [selected, setSelected] = useState("");
  const handleContainsWord = (word) => {
    setContainsWord(word);
  };
  const handleSetBrand = (brand) => {
    setSelected(brand.target.value);
  };

  return (
    <div className="h-screen w-screen bg-creme mobS:bg-grey mobS:rounded-lg ">
      <input
        className="outline-none focus w-96 mt-10 ml-[6%] rounded-lg focus:shadow-sm font-body mobS:hidden"
        type="text"
        placeholder="Search by brand"
        value={containsWord}
        onChange={(e) => handleContainsWord(e.target.value)}
      />

      <select
        className="outline-none font-body rounded-lg ml-4 focus:shadow-sm w-40 mt-4 mobS:flex mobS:m-auto mobS:w-[70%] mobS:mt-14 "
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

      <div className="text-gray-700 grid grid-cols-5 gap-4 bg-creme mobS:bg-grey mt-10 mobS:grid-cols-1 mobS:rounded-lg">
        {campaigns &&
          campaigns
            .filter((campaigns) =>
              campaigns.brand.toLowerCase().includes(containsWord.toLowerCase())
            )
            .filter((data) =>
              data.brand.toLowerCase().includes(selected.toLowerCase())
            )
            .map(({ id, name, brand, type }) => (
              <div key={id}>
                {type === 0 ? (
                  <img
                    value={containsWord}
                    onChange={(e) => handleContainsWord(e.target.value)}
                    className={
                      selected === "" && brand === "Méduse"
                        ? "hidden"
                        : "block object-cover object-center rounded-lg w-[70%] ml-10 mobS:m-auto mobS:mb-5"
                    }
                    src={name}
                  />
                ) : (
                  <video
                    value={containsWord}
                    autoPlay
                    loop
                    playsInline
                    muted
                    onChange={(e) => handleContainsWord(e.target.value)}
                    className="block object-cover object-center rounded-lg w-[70%] ml-10 mobS:m-auto mobS:mb-5"
                  >
                    <source src={name} />
                  </video>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};
export default Gallery;
