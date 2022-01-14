import React from "react";
import Header from "../Header/Header";
import "./CheckOut.css";
import TotalPrice from "../TotalPrice/TotalPrice";

function CheckOut() {
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
            alt=""
          />
          <div>
            <h2 className="checkout_title">장바구니입니다.</h2>
          </div>
        </div>
        <div className="checkout_right">
          <TotalPrice />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;