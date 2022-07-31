import { useState, useEffect } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useContext } from "react";
import CurrentDataContext from "../context/currentData";

const Carousel = () => {
  const { shoot } = useContext(CurrentDataContext);

  return (
    <div className="w-[85%] flex jusitfy-center items-center ">
      <AliceCarousel autoPlayInterval="4000">
        {shoot &&
          shoot.map(({ name, id }) => (
            <div key={id}>
              <img className="w-fit " src={name} />
            </div>
          ))}
      </AliceCarousel>
    </div>
  );
};

export default Carousel;
