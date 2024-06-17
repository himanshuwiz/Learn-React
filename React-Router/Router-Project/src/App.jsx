import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";

// import { Route, Switch, useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";

const App = () => {
  return (
    <>
      <Header title="React-JS Blog" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Newpost />} />
        <Route path="/post/:id" element={<Postpage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
