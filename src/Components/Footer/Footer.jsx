import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2023 Deepika Dinesh.All rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
