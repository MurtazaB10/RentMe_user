import "font-awesome/css/font-awesome.min.css";
import demo from "./demo.png";
import "./About.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const c = [
  {name :"P Wilision"},
  {name :"K Wilison"}
]
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const About = () => {
  return (
    <>
    <div className="section">
      <div className="about">
        <div className="innerContainer">
          <h1>
            About US
          </h1>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and
            <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500s, <br />
            when an unknown printer took a galley of type and scrambled it to{" "}
            make a type specimen book. It has survived not only five centuries,{" "}
            <br />
            but also the leap into electronic typesetting, remaining essentially{" "}
            <br />
            unchanged. It was popularised in the 1960s with the release of
            Letraset <br />
            sheets containing Lorem Ipsum passages, and more recently with
            desktop <br />
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
        </div>
      </div>
    </div>
    <div className="testimonial"
      style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ width: "50%", textAlign: "center" }}>
    <h1 style={{ marginBottom: 20 }}>MEET OUR TEAM</h1>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
        {
          c.map((c,index) =>(
            <div key ={index}>
            <Card img={demo} name = {c.name}/>
            </div>
          ))
        }
      </Slider>
    </div>
    </div>
    </>
  );
};
const Card = ({ img,name }) => {
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
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <div className="social" style={{  listStyle: "none",display: "flex",
        alignItems: "center",
        flexDirection: "row",
        textAlign: "center",position:"relative" }}>
          <li><a href = "/"><i className="fa fa-facebook"></i></a></li>
          <li><a href = "#"><i className="fa fa-instagram"></i></a></li>
          <li><a href = "#"><i className="fa fa-twitter"></i></a></li>
      </div>
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25, fontSize : 24 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
        Media Analyst
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
