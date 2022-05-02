import "font-awesome/css/font-awesome.min.css";
import "./About.css";
import BedIcon from "@mui/icons-material/Bed";
const About = () => {
  return (
    <div class="aboutsection">
      <div className="aboutcontainer">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              <h2 style={{ fontSize: "60px" }}>About us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="best-features about-features">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2 className="h2c">Our Background</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img
                src="C:\Users\hp\Desktop\Project\New folder\Rentish_Frontend\src\pages\About\logo.png"
                alt="Not Found"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <h4>Who we are & what we do</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourproduct">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2 className="h2c">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="brandcontainer">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <BedIcon className="bed" />
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That's why we do a strict
                  quality check for every product.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <BedIcon className="bed" />
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That's why we do a strict
                  quality check for every product.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <BedIcon className="bed" />
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That's why we do a strict
                  quality check for every product.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <BedIcon className="bed" />
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That's why we do a strict
                  quality check for every product.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <BedIcon className="bed" />
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That's why we do a strict
                  quality check for every product.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <BedIcon className="bed" />
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That's why we do a strict
                  quality check for every product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
