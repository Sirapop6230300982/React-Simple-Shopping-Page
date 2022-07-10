import React from "react";
import { Link } from "react-router-dom";
import "./S2H.css";

const S2H = () => {
  return (
    <div className="products-S2H">
      <div className="blueprint-S2H">
        <img src="./pic/S2H/F1.jpg" alt="บ้านเดี่ยวสองชั้น-ชั้นที่-1"></img>
      </div>
      <div className="blueprint-S2H">
        <img src="./pic/S2H/F2.jpg" alt="บ้านเดี่ยวสองชั้น-ชั้นที่-2"></img>
      </div>
      <div className="card-S2H">
        <div>
          <img
            className="product-image-S2H"
            src="./pic/S2H/BED1.png"
            alt="ห้องนอนบ้านเดี่ยวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-S2H">ห้องนอน</h3>
        </div>
        <div className="product-price-S2H">บ้านเดี่ยวชั้นเดียว</div>
        <div>
          <Link to="/s2hbed">
            <button className="product-add-button-S2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-S2H">
        <div>
          <img
            className="product-image-S2H"
            src="./pic/S2H/DIN1.png"
            alt="ห้องรับประทานอาหารบ้านเดี่ยวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-S2H">ห้องรับประทานอาหาร</h3>
        </div>
        <div className="product-price-S2H">บ้านเดี่ยวชั้นเดียว</div>
        <div>
          <Link to="/s2hdin">
            <button className="product-add-button-S2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-S2H">
        <div>
          <img
            className="product-image-S2H"
            src="./pic/S2H/LIV1.png"
            alt="ห้องนั่งเล่นบ้านเดี่ยวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-S2H">ห้องนั่งเล่น</h3>
        </div>
        <div className="product-price-S2H">บ้านเดี่ยวชั้นเดียว</div>
        <div>
          <Link to="/s2hliv">
            <button className="product-add-button-S2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-S2H-Side">
        <div>
          <img
            className="product-image-S2H-side"
            src="./pic/S2H/FV.png"
            alt="บ้านเดี่ยวสองชั้นด้านหน้า"
          />
        </div>
      </div>
      <div className="card-S2H-Side">
        <div>
          <img
            className="product-image-S2H-side"
            src="./pic/S2H/SV.png"
            alt="บ้านเดี่ยวสองชั้นด้านข้าง"
          />
        </div>
      </div>
      <div className="card-S2H-Side">
        <div>
          <img
            className="product-image-T2H-side"
            src="./pic/S2H/BV.png"
            alt="บ้านเดี่ยวสองชั้นด้านหลัง"
          />
        </div>
      </div>
      <div className="back-S2H">
        <Link to="/home">
          <button className="product-back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default S2H;
