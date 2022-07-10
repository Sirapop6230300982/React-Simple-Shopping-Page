import React from "react";
import { Link } from "react-router-dom";
import "./T1HB.css";

const T1HB = () => {
  return (
    <div className="products-T1HB">
      <div className="blueprint-T1HB">
        <img
          src="./pic/T1H/BLUB.jpg"
          alt="แผนผังบ้านแฝดชั้นเดียวตัวเลือก B"
        ></img>
      </div>
      <div className="card-T1HB">
        <div>
          <img
            className="product-image-T1HB"
            src="./pic/T1H/T1HBI/BED1.png"
            alt="ห้องนอนบ้านแฝดชั้นเดียวตัวเลือก B"
          />
        </div>
        <div>
          <h3 className="product-name-T1HB">ห้องนอน</h3>
        </div>
        <div className="product-price-T1HB">บ้านแฝดชั้นเดียว</div>
        <div>
          <Link to="/t1hbbed">
            <button className="product-add-button-T1HB">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T1HB">
        <div>
          <img
            className="product-image-T1HB"
            src="./pic/T1H/T1HBI/DIN1.png"
            alt="ห้องรับประทานอาหารบ้านแฝดชั้นเดียวตัวเลือก B"
          />
        </div>
        <div>
          <h3 className="product-name-T1HB">ห้องรับประทานอาหาร</h3>
        </div>
        <div className="product-price-T1HB">บ้านแฝดชั้นเดียว</div>
        <div>
          <Link to="/t1hbdin">
            <button className="product-add-button-T1HB">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T1HB">
        <div>
          <img
            className="product-image-T1HB"
            src="./pic/T1H/T1HBI/LIV1.png"
            alt="ห้องนั่งเล่นบ้านแฝดชั้นเดียวตัวเลือก B"
          />
        </div>
        <div>
          <h3 className="product-name-T1HB">บ้านนั่งเล่น</h3>
        </div>
        <div className="product-price-T1HB">บ้านแฝดชั้นเดียว</div>
        <div>
          <Link to="/t1hbliv">
            <button className="product-add-button-T1HB">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="back-T1H">
        <Link to="/t1h">
          <button className="product-add-button-T1HB">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default T1HB;
