import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuResponsiv from "./MenuResponsiv";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="flex justify-center items-center w-screen">
      <nav className="font-body bg-transparent mobS:hidden lg:hidden  ">
        <ul className="space-x-48 mt-5 flex bg-transparent cursor-pointer text-xl text-dark ">
          <Link to="/campaigns">
            <li className="hover:text-grey decoration-solid text-green">
              Campaigns
            </li>
          </Link>
          <Link to="/polas">
            <li className="hover:text-grey decoration-solid text-green">
              Polas
            </li>
          </Link>
          <Link to="/">
            <li className="hover:text-grey font-title decoration-solid text-green text-4xl ">
              nahabee
            </li>
          </Link>
          <Link to="/shoot">
            <li className="hover:text-grey decoration-solid flex text-green  flex-row">
              Shoot
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-grey decoration-solid flex text-green  flex-row">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
      <div className="fixed right-6 xs:hidden top-5 scale-x-100 z-40 text-white">
        <MenuIcon onClick={showMenu} className="scale-150 cursor-pointer" />
      </div>
      <div className="fixed z-50 text-white">
        <MenuResponsiv showMenu={showMenu} active={active} />
      </div>
    </div>
  );
};

export default NavBar;
