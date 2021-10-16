import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner d-flex  align-items-center text-center">
        <div className="row container">
          <div className="col-md-10">
            <h1 className="title">Take care of your Health Now !</h1>
            <h2 className="title-sm my-3"> Sale up to 30% all products</h2>
            <button className="shop-btn btn btn-outline-warning">
              Shop Now
            </button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
