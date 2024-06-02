import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-gray-900 items-center justify-between flex text-white py-4 text-1xl font-bold">
        <NavLink to="/about" exact activeClassName="active" className="mx-6">
          About
        </NavLink>
        <NavLink to="/contact" exact activeClassName="active">
          ContactUs
        </NavLink>
        <NavLink to="/services" exact activeClassName="active">
          Services
        </NavLink>
        <NavLink
          to="/user/Hola"
          exact
          activeclassname="active"
          className="mr-5"
        >
          User
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
