import React from "react";
import img from "../../images/Banner&Background/kit.png";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="about-section my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image p-3">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-text p-3 mt-5">
              <h5 className="mt-4">
                About US{" "}
                <span className="ms-3">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                    alt=""
                  />
                </span>
              </h5>
              <p className="text-start">
                Pair large text with an image to give focus to your chosen
                product, collection, or blog post. Add details on availability,
                style, or even provide a review. Even if you can't afford to
                travel the world, you can take your children to the museum, zoo
                or local park. And don't be afraid to take them to grown-up
                spots. Eating out in a restaurant teaches children how to be
                quiet and polite and gives them the pleasure of knowing you
                trust them to behave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
