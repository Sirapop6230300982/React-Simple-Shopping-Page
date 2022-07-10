import React from "react";
import { Link } from "react-router-dom";
import "./T2H.css";

const T2H = () => {
  return (
    <div className="products-T2H">
      <div className="blueprint-T2H">
        <img
          src="./pic/T2H/F1.jpg"
          alt="แผนผังบ้านแถวสองชั้น-ชั้นที่หนึ่ง"
        ></img>
      </div>
      <div className="blueprint-T2H">
        <img src="./pic/T2H/F2.jpg" alt="แผนผังบ้านแถวสองชั้น-ชั้นที่สอง"></img>
      </div>
      <div className="card-T2H">
        <div>
          <img
            className="product-image-T2H"
            src="./pic/T2H/BED1.png"
            alt="ห้องนอนบ้านแฝดสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-T2H">ห้องนอน</h3>
        </div>
        <div className="product-price-T2H">บ้านแฝดสองชั้น</div>
        <div>
          <Link to="/t2hbed">
            <button className="product-add-button-T2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T2H">
        <div>
          <img
            className="product-image-T2H"
            src="./pic/T2H/LIV1.png"
            alt="ห้องนั่งเล่นบ้านแฝดสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-T2H">ห้องนั่งเล่น</h3>
        </div>
        <div className="product-price-T2H">บ้านแฝดสองชั้น</div>
        <div>
          <Link to="/t2hliv">
            <button className="product-add-button-T2H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T2H-Side">
        <div>
          <img
            className="product-image-T2H-side"
            src="./pic/T2H/FRONT.jpg"
            alt="บ้านแฝดสองชั้นด้านหน้า"
          />
        </div>
      </div>
      <div className="card-T2H-Side">
        <div>
          <img
            className="product-image-T2H-side"
            src="./pic/T2H/LEFT.jpg"
            alt="บ้านแฝดสองชั้นด้านข้าง"
          />
        </div>
      </div>
      <div className="card-T2H-Side">
        <div>
          <img
            className="product-image-T2H-side"
            src="./pic/T2H/BACK.jpg"
            alt="บ้านแฝดสองชั้นด้านหลัง"
          />
        </div>
      </div>
      <div className="back-T2H">
        <Link to="/home">
          <button className="product-back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default T2H;
