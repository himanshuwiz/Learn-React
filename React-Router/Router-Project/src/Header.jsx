/* eslint-disable react/prop-types */

import "./index.css";
import "./App.css";
const Header = ({ title }) => {
  return (
    <>
      <header className="w-full bg-[#66d8f5] p-4 flex justify-between items-center">
        <h1>{title}</h1>
      </header>
    </>
  );
};

export default Header;
