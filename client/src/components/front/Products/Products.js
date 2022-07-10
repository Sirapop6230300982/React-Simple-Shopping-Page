import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products-home">
      <div className="card-home">
        <div>
          <img
            className="product-image-home"
            src="./pic/T1H.png"
            alt="บ้านแฝดชั้นเดียว"
          />
        </div>
        <div>
          <h3 className="product-name-home">บ้านแฝด</h3>
        </div>
        <div className="product-price-home">ชั้นเดียว</div>
        <div>
          <Link to="/t1h">
            <button className="product-add-button-home">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-home">
        <div>
          <img
            className="product-image-home"
            src="./pic/T2H.png"
            alt="บ้านแฝดสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-home">บ้านแฝด</h3>
        </div>
        <div className="product-price-home">สองชั้น</div>
        <div>
          <Link to="/t2h">
            <button className="product-add-button-home">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-home">
        <div>
          <img
            className="product-image-home"
            src="./pic/S2H.png"
            alt="บ้านเดี่ยวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-home">บ้านเดี่ยว</h3>
        </div>
        <div className="product-price-home">สองชั้น</div>
        <div>
          <Link to="/s2h">
            <button className="product-add-button-home">สำรวจภายใน</button>
          </Link>
        </div>
      </div>
      <div className="card-home">
        <div>
          <img
            className="product-image-home"
            src="./pic/L2H.png"
            alt="บ้านเเถวสองชั้น"
          />
        </div>
        <div>
          <h3 className="product-name-home">บ้านเเถว</h3>
        </div>
        <div className="product-price-home">สองชั้น</div>
        <Link to="/l2h">
          <button className="product-add-button-home">สำรวจภายใน</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
