import React from "react";
import "./insideT1HB.css";
import { Link } from "react-router-dom";

const T1HBDIN = () => {
  return (
    <div className="products-insideT1HB">
      <div className="card-insideT1HB">
        <div>
          <img
            className="product-image-insideT1HB"
            src="./pic/T1H/T1HAI/DIN1.png"
            alt="ห้องรับประทานอาหารที่ 1 บ้านแฝดชั้นเดียวตัวเลือก B"
          />
        </div>
      </div>
      <div className="card-insideT1HB">
        <div>
          <img
            className="product-image-insideT1HB"
            src="./pic/T1H/T1HAI/DIN2.png"
            alt="ห้องรับประทานอาหารที่ 2 บ้านแฝดชั้นเดียวตัวเลือก B"
          />
        </div>
      </div>
      <div className="back-T1HB">
        <Link to="/t1hb">
          <button className="product-back-button-T1HB">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default T1HBDIN;
