import React from "react";

function SwiperComponent(props) {
  const feed = props.feed;
  console.log(feed);
  return (
    <div className="slider_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="203"
        height="135"
        id="quotes"
        y="990"
        className="arrow"
      >
        <path
          fill="#E2EAF5"
          d="M118.417 0v84.375h46.52L135.334 135h38.063L203 84.375V0h-84.583zM0 84.375h46.52L16.918 135H54.98l29.604-50.625V0H0v84.375z"
        />
      </svg>
      <div className="slide">
        <div className="row">
          <div className="col-12">
            <div className="user_details">
              <ul>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/Images/samplecustomer.jpg"}
                    alt=""
                  />
                </li>
                <li>
                  <h4>
                   {feed.user.username}<span></span>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
           {feed.querymessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperComponent;
