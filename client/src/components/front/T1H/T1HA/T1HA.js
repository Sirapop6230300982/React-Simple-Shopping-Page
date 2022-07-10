import React from "react";
import { Link } from "react-router-dom";
import "./T1HA.css";

const T1HA = () => {
  return (
    <div className="products-T1HA">
      <div className="blueprint-T1HA">
        <img
          src="./pic/T1H/BLUA.jpg"
          alt="แผนผังบ้านแฝดชั้นเดียวตัวเลือก A"
        ></img>
      </div>
      <div className="card-T1HA">
        <div>
          <img
            className="product-image-T1HA"
            src="./pic/T1H/T1HAI/BED1.png"
            alt="ห้องนอนบ้านแฝดชั้นเดียวตัวเลือก A"
          />
        </div>
        <div>
          <h3 className="product-name-T1HA">ห้องนอน</h3>
        </div>
        <div className="product-price-T1HA">บ้านแฝดชั้นเดียว</div>
        <div>
          <Link to="/t1habed">
            <button className="product-add-button-T1HA">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T1HA">
        <div>
          <img
            className="product-image-T1HA"
            src="./pic/T1H/T1HAI/DIN1.png"
            alt="ห้องรับประทานอาหารบ้านแฝดชั้นเดียวตัวเลือก A"
          />
        </div>
        <div>
          <h3 className="product-name-T1HA">ห้องรับประทานอาหาร</h3>
        </div>
        <div className="product-price-T1HA">บ้านแฝดชั้นเดียว</div>
        <div>
          <Link to="/t1hadin">
            <button className="product-add-button-T1HA">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T1HA">
        <div>
          <img
            className="product-image-T1HA"
            src="./pic/T1H/T1HAI/LIV1.png"
            alt="ห้องนั่งเล่นบ้านแฝดชั้นเดียวตัวเลือก A"
          />
        </div>
        <div>
          <h3 className="product-name-T1HA">ห้องนั่งเล่น</h3>
        </div>
        <div className="product-price-T1HA">บ้านแฝดชั้นเดียว</div>
        <div>
          <Link to="/t1haliv">
            <button className="product-add-button-T1HA">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="back-T1H">
        <Link to="/t1h">
          <button className="product-back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default T1HA;
