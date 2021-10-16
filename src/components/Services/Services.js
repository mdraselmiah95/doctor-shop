import React, { useEffect, useState } from "react";
import "./Services.css";
const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("CategoryData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="services container mt-5">
        <div className="top-part">
          <h5>
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
              PREVENTION
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
          </h5>
          <h1 className="services-title">How to Prevent Yourself</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            <br />
            ligula eget dolor. Aenean massa.
          </p>
        </div>
        <div className="service-cart">
          <div className="row">
            {data.map((pd) => (
              <div key={pd.id} className="col-lg-4 col-md-6">
                <div className="cart p-3 border m-2">
                  <div className="cart-img">
                    <img src={pd.image} alt="" className="my-2" />
                    <h5>{pd.name}</h5>
                    <p>{pd.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
