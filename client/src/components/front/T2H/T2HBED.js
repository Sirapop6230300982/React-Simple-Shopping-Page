import React from "react";
import "./insideT2H.css";
import { Link } from "react-router-dom";

const T2HBED = () => {
  return (
    <div className="products-insideT2H">
      <div className="card-insideT2H">
        <div>
          <img
            className="product-image-insideT2H"
            src="./pic/T2H/BED1.png"
            alt="ห้องนอนที่ 1 บ้านแฝดสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideT2H">
        <div>
          <img
            className="product-image-insideT2H"
            src="./pic/T2H/BED2.png"
            alt="ห้องนอนที่ 2 บ้านแฝดสองชั้น"
          />
        </div>
      </div>
      <div className="back-T2H">
        <Link to="/t2h">
          <button className="product-back-button-T2H">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default T2HBED;
