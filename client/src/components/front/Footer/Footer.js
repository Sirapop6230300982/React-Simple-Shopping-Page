import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>About us</h4>
            <h5>We do the home designer to design home for everyone</h5>
          </div>

          <div className="col">
            <h4>Suport</h4>
            <h5 className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Order Tracking</li>
              <li>FAQ</li>
            </h5>
          </div>
          <div className="col">
            <h4>Contract</h4>
            <h5 className="list-unstyled">
              <li>Facebook</li>
              <li>Instragram</li>
              <li>Twitter</li>
            </h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ARCHITECTURE HOME | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
