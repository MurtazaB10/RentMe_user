import React, { useEffect, useState } from "react";
import Gallery from "react-amazon-gallery";
import { useParams } from "react-router-dom";
import axios from "axios";
import Snackbar from "../../components/Alert/SnackBar";

function ProductDetails() {
  const params = useParams();
  const [id, setId] = useState(params.id ? params.id : "");
  const [data, setData] = useState();
  const [image, setImage] = useState();
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);

  async function fetchData() {
    try {
      const res = await axios.post(`/product`);
      const fil = res.data.data.filter((val) => {
        return val._id === id;
      });
      let arr = [];
      console.log(fil);
      for (let index = 0; index < fil[0].image.length; index++) {
        arr[index] = fil[0].image[index].url;
        
      }
      setImage(arr);
      setData(fil);
    } catch (error) {
      console.error(error);
    }
  }

  async function addCart(id) {
    if (data && data[0].quantity > 0) {
      try {
        const res = await axios.post("/user/addtocart", {
          productId: id,
        });
        console.log(res);
        setConfirmationSnackbarMessage("Product added to cart successfully!");
        setConfirmationSnackbarOpen(true);
      } catch (error) {
        if (error.message === "Request failed with status code 401") {
          localStorage.clear();
        }
        console.error(error);
      }
    } else {
      setConfirmationSnackbarMessage("Out of Stock!");
      setConfirmationSnackbarOpen(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <hr />
        <div className="col-12 col-lg-5 mt-5" id="product_image">
          <Gallery images={image && image} />
          <hr />
        </div>
        {console.log(data && data[0])}
        <div className="col-12 col-lg-5 mt-5">
          <h3>{data && data[0].name}</h3>
          <hr />

          <p id="product_price">
            <span>Deposit</span> ₹ {data && data[0].deposit}
          </p>
          <p id="product_price">
            <span>Amount</span> ₹ {data && data[0].rentalprice}
          </p>
          <hr />
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
            onClick={() => addCart(data && data[0]._id)}
          >
            Add to Cart
          </button>

          <hr />

          <p>
            Status:{" "}
            <span id="stock_status">
              {data && data[0].quantity > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p id="product_seller mb-3">
            Manufacturer <strong>{data && data[0].manufacturer}</strong>
          </p>

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>{data && data[0].description}</p>
          <hr />
        </div>
      </div>
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </div>
  );
}
export default ProductDetails;
