import React from "react";
import "./insideT1HA.css";
import { Link } from "react-router-dom";

const T1HADIN = () => {
  return (
    <div className="products-insideT1HA">
      <div className="card-insideT1HA">
        <div>
          <img
            className="product-image-insideT1HA"
            src="./pic/T1H/T1HAI/DIN1.png"
            alt="ห้องรับประทานอาหารที่ 1 บ้านแฝดชั้นเดียวตัวเลือก A"
          />
        </div>
      </div>
      <div className="card-insideT1HA">
        <div>
          <img
            className="product-image-insideT1HA"
            src="./pic/T1H/T1HAI/DIN2.png"
            alt="ห้องรับประทานอาหารที่ 2 บ้านแฝดชั้นเดียวตัวเลือก A"
          />
        </div>
      </div>
      <div className="back-T1HA">
        <Link to="/t1ha">
          <button className="product-back-button-T1HA">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default T1HADIN;
