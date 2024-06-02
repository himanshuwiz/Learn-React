import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import User from "./components/User";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" />
        <Route path="/About" exact element=<About /> />
        <Route path="/contact" exact element=<Contact /> />
        <Route path="/services" exact element=<Services /> />
        <Route path="/user/:fname" exact element=<User /> />
        <Route path="*" exact element=<Error /> />
      </Routes>
    </div>
  );
};

export default App;
