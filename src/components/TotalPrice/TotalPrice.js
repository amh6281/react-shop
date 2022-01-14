import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../Reducer";
import { useStateValue } from "../../StateProvider";
import "./TotalPrice.css";

export default function TotalPrice() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="totalprice">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              총액 ( {basket.length} items) : <strong>{value}원</strong>
            </p>
            <small className="totalprice_gift">
              <input type="checkbox" />
              체크박스 입니다.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₩"}
      />
      <button>결제하기</button>
    </div>
  );
}
