import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-3  ">
            <div className="first-cart p-2 mt-2">
              <img src="" alt="" />
              <h6 className="mt-5">About Us</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="second-part">
              <h1 className="">Hello world</h1>
              <input
                className="input-field mt-3"
                type="text"
                placeholder="Hello world"
              />
              <br />
              <input
                className="input-field"
                type="text"
                placeholder="Hello world"
              />
              <br />
              <input className="input-button" type="text" />
              <br />
              <p>
                <span className="m-2 ">
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
                <span className="m-2 ">
                  <FontAwesomeIcon icon={faYoutube} />
                </span>
                <span className="m-2 ">
                  <FontAwesomeIcon icon={faYoutube} />
                </span>
                <span className="m-2 ">
                  <FontAwesomeIcon icon={faYoutube} />
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="third-part">
              <h1>Useful Links</h1>
              <p className="mt-4">Privacy Policy</p>
              <p>Privacy Policy</p>
              <p>Privacy Policy</p>
              <p>Privacy Policy</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h1>Contact Us</h1>
              <small className="mt-5">Office: 12 Fake Street,New York</small>
              <br />
              <small className="mt-3">Phone: (08) 8827 633354</small>
              <br />
              <small className="mt-3">Fax: 08) 08 4752 1499</small>
              <br />
              <small className="mt-3">Mail: support.goaltheme.com</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="button text-center">
          <small>© 2020 Medil Theme by Goalthemes. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
