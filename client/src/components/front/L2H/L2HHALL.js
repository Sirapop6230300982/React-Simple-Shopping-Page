import React from "react";
import "./insideL2H.css";
import { Link } from "react-router-dom";

const L2HHALL = () => {
  return (
    <div className="products-insideL2H">
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/HALL1.jpg"
            alt="ห้องโถงที่ 1 บ้านแถวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/HALL2.jpg"
            alt="ห้องโถงที่ 2 บ้านแถวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/HALL3.jpg"
            alt="ห้องโถงที่ 3 บ้านแถวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/HALL4.jpg"
            alt="ห้องโถงที่ 4 บ้านแถวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/HALL5.jpg"
            alt="ห้องโถงที่ 5 บ้านแถวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/HALL6.jpg"
            alt="ห้องโถงที่ 6 บ้านแถวสองชั้น"
          />
        </div>
      </div>
      <div className="card-insideL2H">
        <div>
          <img
            className="product-image-insideL2H"
            src="./pic/L2H/HALL7.jpg"
            alt="ห้องโถงที่ 7 บ้านแถวสองชั้น"
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

export default L2HHALL;
