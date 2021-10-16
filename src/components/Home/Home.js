import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
