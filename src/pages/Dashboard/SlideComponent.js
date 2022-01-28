import React from "react";
import { Link } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function SlideComponent() {
  return (
    <div className="swiper_slide">
      <Link to="/" target="_blank" className="text-decoration-none">
        <img src={process.env.PUBLIC_URL + "/Images/sample1.jpg"} />
        <h3>Exercise Cycle AB-100</h3>
        <ul>
          <li>
            <p>
              Rent{" "}
              <span>
                <CurrencyRupeeIcon fontSize="1rem" /> 309/mo
              </span>
            </p>
          </li>
          <li>
            <Link to="/" target="_blank" className="link">
              See more
            </Link>
          </li>
        </ul>
      </Link>
    </div>
  );
}

export default SlideComponent;
