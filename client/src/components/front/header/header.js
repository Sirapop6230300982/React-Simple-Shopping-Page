import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <div className="logo">ARCHITECTURE HOME</div>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/sale">Sale</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="checkout-header ">
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default header;
