import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
      />
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">안녕하세요</span>
          <span className="header_optionTwo">로그인하기</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">돌아가기</span>
          <span className="header_optionTwo">주문내역</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">반가워요</span>
          <span className="header_optionTwo">안녕하세요</span>
        </div>
        <div className="header_basket">
          <ShoppingBasket />
          <span className="header_basketCnt">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
