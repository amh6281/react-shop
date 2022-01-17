import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./Payment.css";
import CheckOutProduct from "../CheckoutProduct/CheckOutProduct";
export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="payment">
      <div className="payment_container">
        <Link to="/checkout" className="checkoutLink">
          <h1>장바구니로 돌아가기 ({basket.length} 개의 상품이 존재합니다.)</h1>
        </Link>
        <div className="payment_section">
          <div className="payment_title">
            <h3>주소지</h3>
          </div>
          <div className="payment_address">
            <p>{user.email} 님의 주소</p>
            <p>강원도</p>
            <p>춘천</p>
          </div>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>상품 목록</h3>
        </div>
        <div className="payment_item">
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>결제</h3>
        </div>
        <div className="payment_detail"></div>
      </div>
    </div>
  );
}
