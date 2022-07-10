import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearProduct,
  setTelephone,
  setFirstname,
  setSurname,
  setAddress,
  setEmail,
  setTheorderlist,
  setTheprice,
  addBooking,
}) => {
  const totalprice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const orderOnList = cartItems.reduce(
    (name, item) => name + item.quantity + item.name + "+",
    0
  );
  useEffect(() => {
    setTheorderlist(orderOnList);
  });

  useEffect(() => {
    setTheprice(totalprice);
  });
  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <h1>Booking Items</h1>
      </div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                เพิ่ม
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                ลด
              </button>
            </div>
            <div className="cart-items-quantity">x{item.quantity}</div>
            <div className="cart-items-price">{item.price} ฿</div>
          </div>
        ))}
      </div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleClearProduct}>
            ล้างรายการ
          </button>
        )}
      </div>

      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">{totalprice}</div>
      </div>
      <div>
        <div className="checkout">
          {cartItems.length >= 1 && (
            <div className="form-section">
              <div className="title">
                <h2>Start Booking</h2>
              </div>
              <div class="container">
                <label>
                  <b>Telephone</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Telephone.No"
                  onChange={(event) => {
                    setTelephone(event.target.value);
                  }}
                />
                <label>
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter FirstName"
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                />
                <label>
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter SurName"
                  onChange={(event) => {
                    setSurname(event.target.value);
                  }}
                />
                <label>
                  <b>Address</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
                <label>
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <label>
                  <b>Ordering</b>
                </label>
                <input
                  type="text"
                  name="orders"
                  target={orderOnList}
                  value={orderOnList}
                />
                <label>
                  <b>Price</b>
                </label>
                <input
                  type="text"
                  name="prices"
                  target={totalprice}
                  value={totalprice}
                />
                <Link to="/checkout">
                  <button type="submit" onClick={addBooking}>
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
