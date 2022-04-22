import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
// import ProductImage from './ProductImage';
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "react-amazon-gallery";
import image from "./details";
// import { Row, Col } from "antd";
import { ButtonGroup, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
function ProductDetails() {
  let image = [
    "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
    "https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg",
    "https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg",
  ];
  const params = useParams();
  const [id, setId] = useState(params.id ? params.id : "");
  async function fetchData() {
    try {
      // const res = await axios.post(`/nurse/patientDetails/${id}`);
      // const result = await axios.get("nurse/dashboard");
      // const res2 = await axios.get("doctor/list");
      // dispatch(setDoctorsList(res2.data.data));
      // dispatch(setPatientsList(result.data.data.patient_list));
      // dispatch(setPatientInfo(res.data.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);
  const [itemCount, setItemCount] = React.useState(1);
  return (
    <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <hr />
        <div className="col-12 col-lg-5 mt-5" id="product_image">
          <Gallery images={image} width="120%" />
          <hr />
        </div>
        <div className="col-12 col-lg-5 mt-5">
          <h3>onn. 32” className HD (720P) LED Roku Smart TV (100012589)</h3>
          <p id="product_id">Product # sklfjdk35fsdf5090</p>
          <hr />

          <p id="product_price">
            <span>Deposit</span> $108.00
          </p>
          <p id="product_price">
            <span>Amount</span> $108.00
          </p>
          <hr />
          <div className="quanity-group">
            Quantity:
            <div style={{ display: "block", paddingBottom: 10 }}>
              <div>
                <ButtonGroup>
                  <Button
                    style={{ border: "1px solid", backgroundColor: "aqua" }}
                    onClick={() => {
                      setItemCount(Math.max(itemCount - 1, 0));
                    }}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <input
                    type="number"
                    value={itemCount}
                    placeholder="1"
                    style={{
                      width: "100px",
                      marginLeft: "3px",
                      marginRight: "3px",
                      border: "1px solid",
                      textAlign: "center",
                    }}
                  />
                  <Button
                    style={{ border: "1px solid", backgroundColor: "red" }}
                    onClick={() => {
                      setItemCount(itemCount + 1);
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
          >
            Add to Cart
          </button>

          <hr />

          <p>
            Status: <span id="stock_status">In Stock</span>
          </p>
          <p id="product_seller mb-3">
            Manufacturer <strong>Amazon</strong>
          </p>
          <p id="product_seller mb-3">
            Quantity <strong>178</strong>
          </p>

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>
            Binge on movies and TV episodes, news, sports, music and more! We
            insisted on 720p High Definition for this 32" LED TV, bringing out
            more lifelike color, texture and detail. We also partnered with Roku
            to bring you the best possible content with thousands of channels to
            choose from, conveniently presented through your own custom home
            screen.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
