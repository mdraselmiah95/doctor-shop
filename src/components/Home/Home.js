import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Menubar from "../Shared/Menubar/Menubar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Menubar />
      <Banner />
      <Services />
      <About />
      <Category />
      <Contact />
    </div>
  );
};

export default Home;
