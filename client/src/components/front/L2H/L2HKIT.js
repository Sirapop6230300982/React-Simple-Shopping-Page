import React from "react";
import "./insideL2H.css";
import { Link } from "react-router-dom";

const L2HKIT = () => {
  return (
    <div className="products-insideL2H">
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/KITCHEN1.jpg"
            alt="บ้านแฝดชั้นเดียว"
          />
        </div>
      </div>

      <div className="back-L2H">
        <Link to="/l2h">
          <button className="product-back-button-L2H">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default L2HKIT;
