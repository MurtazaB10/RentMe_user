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
                    Nikita Sharma<span></span>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              Marriage comes with a lot of unavoidable expenses in India and
              spending a big chunk of your savings on furniture and white goods
              could be a big challenge. Rentish not just took away all worries
              but in fact went to the extent of spoiling us. Where I could have
              owned just some bare essentials after making a huge hole in my
              pocket or paid unnecessary EMIs, I could samrtly own a lot of
              stuff which would have come much later on my list. Heartfelt
              thanks to the whole Rentish team for making our renting experience
              completely hassle-free. It has been two great years and I am sure
              there are many more to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperComponent;
