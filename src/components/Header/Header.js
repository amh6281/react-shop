import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">안녕하세요</span>
          <Link to="/login" className="homeLogin">
            <span className="header_optionTwo">로그인하기</span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionOne">돌아가기</span>
          <span className="header_optionTwo">주문내역</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">반가워요</span>
          <span className="header_optionTwo">안녕하세요</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasket />
            <span className="header_basketCnt">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
