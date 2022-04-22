import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../redux/reducers/cartReducer";
import "./Subtotal.css";
import { useSelector } from "react-redux";

function Subtotal() {
  //   const [{ basket }, dispatch] = useStateValue();
  const basket = useSelector((state) => state.cart.cart);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
