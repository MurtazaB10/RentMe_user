import React, { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./ProductCatalogue.css";
import DiamondIcon from "@mui/icons-material/Diamond";
import DashboardIcon from "@mui/icons-material/Dashboard";
import axios from "axios";

const Productview = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const res = await axios.post(`/product`);
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-1">
            <ProSidebar>
              <Menu iconShape="square">
                <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<DiamondIcon />}>
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </div>
          <div className="col-md-9 col-11">
            <div className="container-fluid">
              <div className="row gy-4 py-5">
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Headphones</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p class="card-text">
                        <b>Price: $ 20</b>
                      </p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
                      <a href="#" class="btn btn-primary mx-4">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productview;
