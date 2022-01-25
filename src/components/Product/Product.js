import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch(
      // dispatch는 Reducer.js의 action에 해당하는 부분
      {
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      }
    );
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon onClick={addToBasket} />
      </IconButton>
    </div>
  );
}

export default Product;
