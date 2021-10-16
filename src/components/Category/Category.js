import React, { useEffect, useState } from "react";
import "./Category.css";
const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("faakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="category-container">
        <div className="top-part-category">
          <h5 className="mt-4">
            <span className="me-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
            OUR PRODUCTS{" "}
            <span className="ms-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
          </h5>
          <h1 className="mt-5">Shop By Category</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa
          </p>
          <div className="button-continer">
            <button className="btn-0">New Arrivals</button>
            <button className="btn-1">Featured</button>
            <button className="btn-1">Best Sellers</button>
          </div>
        </div>
        <div className="row">
          {data.map((pd) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={pd.id}>
              <div className="product-cart p-2">
                <div className="product-img p-2">
                  <img className="w-100" src={pd.image} alt="" />
                  <p className="mt-3">
                    <b>{pd.name}</b>
                  </p>
                  <h5 className="text-info">{pd.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
