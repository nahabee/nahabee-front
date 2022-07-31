import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";
import { useContext } from "react";

import CurrentDataContext from "../context/currentData";

const Shoot = () => {
  const { shoot } = useContext(CurrentDataContext);
  return (
    <div className="h-screen w-screen bg-creme ">
      <NavBar />
      <div className="flex justify-center shadow-2xl rounded-lg pt-20 mx-20 mt-5 bg-creme mobS:hidden ">
        <Carousel />
      </div>
      {/* mobile version */}
      <div className="xs:hidden bg-grey mobS:pt-10 mobS:rounded-lg">
        {shoot && shoot.map(({ name, id }) => <img key={id} src={name} />)}
      </div>
    </div>
  );
};

export default Shoot;
