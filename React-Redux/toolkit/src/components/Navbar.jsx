import { Link } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart); //name cart from the Store.jsx
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link to={"/"} className="mr-4">
          Home
        </Link>
        <Link to={"/Cart"}>Cart</Link>
        <span>items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
