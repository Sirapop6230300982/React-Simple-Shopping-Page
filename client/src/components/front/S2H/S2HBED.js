import React from "react";
import "./insideS2H.css";
import { Link } from "react-router-dom";

const S2HBED = () => {
  return (
    <div className="products-insideS2H">
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/BED1.png"
            alt="ห้องนอนที่ 1 บ้านเดี่ยวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/BED2.png"
            alt="ห้องนอนที่ 2 บ้านเดี่ยวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/BED3.png"
            alt="ห้องนอนที่ 3 บ้านเดี่ยวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/BED4.png"
            alt="ห้องนอนที่ 4 บ้านเดี่ยวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideS2H">
        <div>
          <img
            className="product-image-insideS2H"
            src="./pic/S2H/BED5.png"
            alt="ห้องนอนที่ 5 บ้านเดี่ยวสองชั้น"
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

export default S2HBED;
