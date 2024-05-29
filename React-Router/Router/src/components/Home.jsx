import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet />
    </>
  );
};

export default Home;
