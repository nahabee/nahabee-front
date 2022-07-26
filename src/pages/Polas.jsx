import NavBar from "../components/NavBar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CurrentDataContext from "../context/currentData";

const Polas = () => {
  const { polas } = useContext(CurrentDataContext);
  const [allmesures, setAllMesures] = useState([]);

  // axios pour récupèrer les mesures
  useEffect(() => {
    const getallMesures = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/mesures`
      );
      setAllMesures(data);
    };
    getallMesures();
  }, []);

  return (
    <div className="bg-creme w-screen h-screen mobS:bg-grey mobS:rounded-lg">
      <NavBar />
      {/* model stats for mobile only */}
      <div className="xs:hidden bg-grey mobS:rounded-lg">
        <h1 className="font-title text-5xl text-center text-creme mobS:pt-10 ">
          MODEL stats
        </h1>
      </div>
      <div className="flex pb-10 mt-6 mobS:bg-grey mobS:pb-0">
        <div className="grid grid-cols-2 grid-rows-2 m-auto shadow-xl mt-5 rounded-lg h-5/6 place-items-center mobS:shadow-none mobS:gap-4">
          {polas &&
            polas.map(({ name, id }) => (
              <div key={id}>
                <a href="https://www.instagram.com/nahabee/" target="_blank">
                  {" "}
                  <img
                    className="object-cover cursor-pointer rounded-lg bg-white m-6 h-64 hover:scale-110 transition hover:duration-700 hover:ease-in-out mobS:h-48 mobS:m-auto "
                    src={name}
                  />
                </a>
              </div>
            ))}
        </div>
        <div className="w-1/2 flex flex-col mobS:hidden ">
          <h1 className=" font-title text-7xl w-1/2 mt-8 opacity-80 mobS:text-xl ">
            MODEL stats,
          </h1>
          <div className="flex flex-col group mt-5 ">
            <div className=" h-60 w-32 flex bg-stone-900 opacity-90 " />
            {allmesures &&
              allmesures.map(({ name, description, id }) => (
                <div key={id} className="flex flex-col gap-2 mt-[-3.5rem]">
                  <a className="font-body z-50 text-xl mobS:hidden ml-40 tracking-widest">
                    <span className="font-subtitle opacity-80 tracking-normal ">
                      {name}
                    </span>
                    : {description}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="xs:hidden bg-grey mt-5 mobS:rounded-lg">
        <div className="flex flex-col text-creme mobS:rounded-lg">
          {allmesures &&
            allmesures.map(({ name, description, id }) => (
              <div
                key={id}
                className="flex flex-col mobS:ml-6 text-justify mobS:rounded-lg"
              >
                <a className="font-body text-xl tracking-widest">
                  <span className="font-subtitle text-2xl tracking-widest">
                    {name}
                  </span>
                  : {description}
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Polas;
