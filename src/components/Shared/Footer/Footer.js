import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faEnvelope,
  faFax,
  faLink,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
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
              <input className="input-button" type="submit" />
              <br />
              <p className="mt-4">
                <span className="m-2 fs-4 text-primary bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
                <span className="m-2 fs-4 text-danger bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faYoutube} />
                </span>
                <span className="m-2 fs-4 text-info bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
                <span className="m-2 fs-4 text-warning bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="third-part">
              <h1>Useful Links</h1>

              <p className="mt-4">
                <FontAwesomeIcon icon={faLink} className="text-success me-2" />
                Privacy Policy
              </p>

              <p>
                <FontAwesomeIcon icon={faLink} className="text-success me-2" />
                Privacy Policy
              </p>
              <p>
                <FontAwesomeIcon icon={faLink} className="text-success me-2" />
                Privacy Policy
              </p>
              <p>
                <FontAwesomeIcon icon={faLink} className="text-success me-2" />
                Privacy Policy
              </p>
              <p>
                <FontAwesomeIcon icon={faLink} className="text-success me-2" />
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h1>Contact Us</h1>
              <small className="mt-5">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="text-info me-2 fs-5"
                />
                Office: 12 Fake Street,New York
              </small>
              <br />
              <small className="mt-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-info me-2 fs-5"
                />
                Phone: (08) 8827 633354
              </small>
              <br />
              <small className="mt-3">
                <FontAwesomeIcon
                  icon={faFax}
                  className="text-danger me-2 fs-5"
                />
                Fax: 08) 08 4752 1499
              </small>
              <br />
              <small className="mt-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary me-2 fs-5"
                />
                Mail: support.goaltheme.com
              </small>
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
