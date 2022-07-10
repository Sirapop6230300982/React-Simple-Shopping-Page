import React from "react";
import "./insideS2H.css";
import { Link } from "react-router-dom";

const S2HDIN = () => {
  return (
    <div className="products-insideS2H">
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/DIN1.png"
            alt="ห้องรับประทานอาหารที่ 1 บ้านเดี่ยวสองชั้น"
          />
        </div>
      </div>
      <div className="back-S2H">
        <Link to="/s2h">
          <button className="product-back-button-S2H">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default S2HDIN;
