import React from "react";
import logo from "../../../images/Banner&Background/logo.png";
import "./Menubar.css";
const Menubar = () => {
  return (
    <div>
      <div className="menubar-container">
        <div className="menubar container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo-img">
                <img className="p-2" src={logo} alt="logo" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="menu-items">
                <ul className="d-flex align-items-end justify-content-end">
                  <li className="items p-2">Home</li>
                  <li className="items p-2">Shop</li>
                  <li className="items p-2">Contact</li>
                  <li className="items p-2">About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
