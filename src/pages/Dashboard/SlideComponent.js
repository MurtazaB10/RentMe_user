import React from "react";
import { Link } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { addToCartAction } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

function SlideComponent(props) {
  const basket = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const det = props.details;
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch(
      addToCartAction({
        id: 1,
        title: "Exercise Cycle AB-100",
        image: "/Images/sample1.jpg",
        price: 300,
        rating: 4,
      })
    );
    console.log(basket);
  };
  return (
    <div className="swiper_slide">
      <Link to="/" target="_blank" className="text-decoration-none">
        <img src={det.image[0].url} />
        <h3>{det.name}</h3>
        <ul>
          <li>
            <p>
              Rent{" "}
              <span>
                <CurrencyRupeeIcon fontSize="1rem" /> {det.rentalprice}
              </span>
            </p>
          </li>
          <li>
            <Link to="/product" className="link">
              See more
            </Link>
          </li>
        </ul>
      </Link>
    </div>
  );
}

export default SlideComponent;
