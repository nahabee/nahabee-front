import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Link } from "react-router-dom";

const MenuResponsiv = ({ showMenu, active }) => {
  return (
    <div className="z-50 fixed">
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 full bg-grey text-2xl backdrop-blur-sm gap-20 justify-center"
            : "hidden"
        }
      >
        <div className="absolute right-6 xs:hidden top-6 scale-x-100 z-50">
          <CloseIcon
            onClick={showMenu}
            className="cursor-pointer scale-x-100"
          />
        </div>
        <li className="hover:underline font-title ">
          <Link to="/">nahabee</Link>
        </li>
        <li className="hover:underline font-body ">
          <Link to="/campaigns">Campaigns</Link>
        </li>
        <li className="hover:underline font-body  z-50">
          <Link to="/polas">Polas</Link>
        </li>
        <li className="hover:underline font-body  z-50">
          <Link to="/shoot">Shoot</Link>
        </li>
        <li className="hover:underline font-body  z-50">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuResponsiv;
