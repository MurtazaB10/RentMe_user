import { useSelector } from "react-redux";
import { isLength, isMatch } from "../../validation/Validation";
import Snackbar from "../../components/Alert/SnackBar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const initialState = {
  username: "",
  email: "",
  productname: "",
  orderid: "",
  details: "",
};
const Feedback = () => {
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [trigger, setTrigger] = useState(true);
  const [userData, setUserData] = useState();
  const [data, setData] = useState(initialState);
  const { username, email, productname, orderid, details } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("/admin/feedback");
      console.log(res);
      setUserData(res.data.data);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      }
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger]);

  const updateInfor = async (e) => {
    e.preventDefault();
    try {
      axios.post("/user/add-feedback", {
        feedback: details,
        email: email,
      });
      setConfirmationSnackbarMessage("Feedback Added Successfully!");
      setConfirmationSnackbarOpen(true);
      setTrigger(!trigger);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      } else {
        console.error(error);
        setConfirmationSnackbarMessage(error.message);
        setConfirmationSnackbarOpen(true);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center mt-3 fw-bold color-blue">Your Review</h1>
      <div className="personal mt-5">
        <h5 className="heading color-blue">Feedback</h5>
        <form onSubmit={updateInfor}>
          <div className="mb-3 d-flex justify-content-between formdiv">
            <div className="w-100">
              <label htmlFor="email" className="form-label color-blue">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-between formdiv">
            <div className="w-100">
              <label htmlFor="  details" className="form-label color-blue">
                Feedback
              </label>
              <textarea
                type="text"
                className="form-control"
                id="details"
                name="details"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary button-blue">
            Send
          </button>
        </form>
      </div>
      <hr />
      <div className="p-3">
        <table class="table table-striped color-blue">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((val, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{val.date.substring(0, 10)}</th>
                    <td>{val.user.username}</td>
                    <td>{val.querymessage}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </div>
  );
};
export default Feedback;
