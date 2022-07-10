import React from "react";
import { Link } from "react-router-dom";
import "./T1H.css";

const T1H = () => {
  return (
    <div className="products-T1H">
      <div className="card-T1H">
        <div>
          <img
            className="product-image-T1H"
            src="./pic/T1H/OPTA.jpg"
            alt="บ้านแฝดชั้นเดียวตัวเลือก A"
          />
        </div>
        <div>
          <h3 className="product-name-T1H">บ้านแฝดชั้นเดียว</h3>
        </div>
        <div className="product-choice-T1H">ตัวเลือก A</div>
        <div>
          <Link to="/t1ha">
            <button className="product-add-button-T1H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T1H">
        <div>
          <img
            className="product-image-T1H"
            src="./pic/T1H/OPTB.jpg"
            alt="บ้านแฝดชั้นเดียวตัวเลือก B"
          />
        </div>
        <div>
          <h3 className="product-name-T1H">บ้านแฝดชั้นเดียว</h3>
        </div>
        <div className="product-choice-T1H">ตัวเลือก B</div>
        <div>
          <Link to="/t1hb">
            <button className="product-add-button-T1H">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-T1H-Side">
        <div>
          <img
            className="product-image-T1H-side"
            src="./pic/T1H/FV.jpg"
            alt="บ้านแฝดชั้นเดียวด้านหน้า"
          />
        </div>
      </div>
      <div className="card-T1H-Side">
        <div>
          <img
            className="product-image-T1H-side"
            src="./pic/T1H/SV.jpg"
            alt="บ้านแฝดชั้นเดียวด้านข้าง"
          />
        </div>
      </div>
      <div className="card-T1H-Side">
        <div>
          <img
            className="product-image-T1H-side"
            src="./pic/T1H/BV.jpg"
            alt="บ้านแฝดชั้นเดียวด้านหลัง"
          />
        </div>
      </div>
      <div className="back-home">
        <Link to="/home">
          <button className="product-back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default T1H;
