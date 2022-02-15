import "font-awesome/css/font-awesome.min.css";
import "./About.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "@mui/material/Avatar";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const c = [{ name: "P Wilision" }, { name: "K Wilison" }];
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNewOutlinedIcon
        style={{ color: "gray", fontSize: "45px" }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosOutlinedIcon
        style={{ color: "gray", fontSize: "45px" }}
      />
    </div>
  );
};
const About = () => {
  return (
    <div class="section">
      <div className="container" style={{ backgroundColor: "#ddfdee" }}>
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="social">
            <a href="">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src="Images/logo.png" />
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "#ddfde0" }}>
        <div class="top-heading">
          <h1>Services</h1>
        </div>
        <div className="cards-container">
          <div className="cards">
            <div className="icon">
              <i className="fa fa-car"></i>
            </div>
            <div className="Heading">car</div>
            <div className="text">
              Lorem ipsum dolor sit amet Lorem, ipsum dolor.
            </div>
          </div>
          <div className="cards">
            <div className="icon">
              <i className="fa fa-headphones"></i>
            </div>
            <div className="Heading">headphone</div>
            <div className="text">
              Lorem ipsum dolor sit amet Lorem, ipsum dolor.
            </div>
          </div>
          <div className="cards">
            <div className="icon">
              <i className="fa fa-mobile"></i>
            </div>
            <div className="Heading">mobile</div>
            <div className="text">
              Lorem ipsum dolor sit amet Lorem, ipsum dolor.
            </div>
          </div>
          <div className="cards">
            <div className="icon">
              <i className="fa fa-car"></i>
            </div>
            <div className="Heading">car</div>
            <div className="text">
              Lorem ipsum dolor sit amet Lorem, ipsum dolor.
            </div>
          </div>
          <div className="cards">
            <div className="icon">
              <i className="fa fa-headphones"></i>
            </div>
            <div className="Heading">headphone</div>
            <div className="text">
              Lorem ipsum dolor sit amet Lorem, ipsum dolor.
            </div>
          </div>
          <div className="cards">
            <div className="icon">
              <i className="fa fa-mobile"></i>
            </div>
            <div className="Heading">mobile</div>
            <div className="text">
              Lorem ipsum dolor sit amet Lorem, ipsum dolor.
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "#ddfde0" }}>
        <div
          className="testimonial"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "50%", textAlign: "center" }}>
            <h1 style={{ marginBottom: 20 }}>MEET OUR TEAM</h1>
            <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
              {c.map((c, index) => (
                <div key={index}>
                  <Card img="Images/logo.png" name={c.name} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
const Card = ({ img, name }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 150,
          height: 150,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />

      <p style={{ fontStyle: "italic", marginTop: 25, fontSize: 30 }}>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25, fontSize: 40 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> , Media
        Analyst
      </p>
    </div>
  );
};
export default About;
/*
 */
/*
Maecenas eget sem ut eros varius sollicitudin eget eget sapien.
Aenean fermentum tortor ac sapien aliquam facilisis.
Morbi pulvinar nisi sed erat congue, nec tristique odio scelerisque.
 */
