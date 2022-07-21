import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center w-screen">
      <nav className="font-body bg-transparent  ">
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
    </div>
  );
};

export default NavBar;
