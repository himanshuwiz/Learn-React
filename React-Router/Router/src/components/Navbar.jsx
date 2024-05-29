import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar Section */}

      <div className="flex justify-between p-6 bg-gray-900">
        <a href="" className="text-white">
          Logo
        </a>
        <nav className="flex justify-center flex-1">
          <ul className="flex">
            <li className="cursor-pointer text-white mr-4">
              <NavLink to="/" activeClassName="selected"></NavLink>
            </li>
            <li className="cursor-pointer text-white mr-4">
              <NavLink to="/home" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer text-white mr-4">
              <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
            <li className="cursor-pointer text-white ">
              <NavLink to="/contact" activeClassName="selected">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
