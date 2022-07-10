import React from "react";
import "./Sale.css";

const Sale = ({ productItems, handleAddProduct }) => {
  return (
    <div className="sales-home">
      {productItems.map((productItem) => (
        <div className="sales-card">
          <div>
            <img
              className="sales-image-home"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3 className="sales-name-home">{productItem.name}</h3>
          </div>
          <div className="sales-price-home">{productItem.price} ฿</div>
          <div>
            <button
              className="sales-add-button-home"
              onClick={() => handleAddProduct(productItem)}
            >
              เพิ่มเข้าสู่รายการสั่งจอง
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sale;
