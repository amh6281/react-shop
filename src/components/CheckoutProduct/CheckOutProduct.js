import { useStateValue } from "../../StateProvider";
import "./CheckOutProduct.css";

export default function CheckOutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeBtn = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_info">
          <small>₩</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
        </div>
        <button onClick={removeBtn}>장바구니 제거하기</button>
      </div>
    </div>
  );
}
