import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
          <Link to={!user && "/login"} className="homeLogin">
            <span onClick={handleAuthentication} className="header_optionTwo">
              {user ? "로그아웃" : "로그인"}
            </span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionOne">돌아가기</span>
          <span className="header_optionTwo">주문내역</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
            <span className="header_basketCnt">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
