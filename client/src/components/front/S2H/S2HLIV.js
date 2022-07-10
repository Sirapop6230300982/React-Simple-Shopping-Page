import React from "react";
import "./insideS2H.css";
import { Link } from "react-router-dom";

const S2HLIV = () => {
  return (
    <div className="products-insideS2H">
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/LIV1.png"
            alt="ห้องนั่งเล่นที่ 1 บ้านเดี่ยวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/LIV2.png"
            alt="ห้องนั่งเล่นที่ 2 บ้านเดี่ยวสองชั้น"
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

export default S2HLIV;
