import React from "react";
import { Link } from "react-router-dom";
import "./L2H.css";

const L2H = () => {
  return (
    <div className="products-L2H">
      <div className="blueprint-L2H">
        <img src="./pic/L2H/F1.png" alt="บ้านแถวสองชั้น-ชั้นที่-1"></img>
      </div>
      <div className="blueprint-S2H">
        <img src="./pic/L2H/F2.png" alt="บ้านแถวสองชั้น-ชั้นที่-2"></img>
      </div>
      <div className="card-L2H">
        <div>
          <img
            className="product-image-L2H"
            src="./pic/L2H/BED1.jpg"
            alt="ห้องนอนบ้านแถวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-L2H">ห้องนอน</h3>
        </div>
        <div className="product-price-L2H">บ้านเดี่ยวชั้นเดียว</div>
        <div>
          <Link to="/l2hbed">
            <button className="product-add-button-L2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-L2H">
        <div>
          <img
            className="product-image-L2H"
            src="./pic/L2H/KITCHEN1.jpg"
            alt="ห้องครัวบ้านแถวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-L2H">ห้องรับประทานอาหาร</h3>
        </div>
        <div className="product-price-L2H">บ้านเดี่ยวชั้นเดียว</div>
        <div>
          <Link to="/l2hkit">
            <button className="product-add-button-L2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-L2H">
        <div>
          <img
            className="product-image-L2H"
            src="./pic/L2H/HALL1.jpg"
            alt="ห้องโถงบ้านแถวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-L2H">ห้องนั่งเล่น</h3>
        </div>
        <div className="product-price-L2H">บ้านเดี่ยวชั้นเดียว</div>
        <div>
          <Link to="/l2hhall">
            <button className="product-add-button-L2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>

      <div className="back-L2H">
        <Link to="/home">
          <button className="product-back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default L2H;
