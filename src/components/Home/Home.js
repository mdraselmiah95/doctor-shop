import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Menubar from "../Shared/Menubar/Menubar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Menubar />
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
