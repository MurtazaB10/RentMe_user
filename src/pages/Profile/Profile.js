import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { isLength, isMatch } from "../../validation/Validation";
import Snackbar from "../../components/Alert/SnackBar";
import axios from "axios";

const initialState = {
  username: "",
  email: "",
  phonenumber: "",
  cfpassword: "",
  password: "",
};

function Profile() {
  //   const auth = useSelector((state) => state.auth);
  //   const token = useSelector((state) => state.token);

  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [trigger, setTrigger] = useState(true);
  const [Number, setNumber] = useState();
  const [Email, setEmail] = useState();
  const [document, setDocument] = useState();
  const [documentNumber, setDocumentNumber] = useState();
  const [userData, setUserData] = useState();
  const [documentType, setDocumentType] = useState();

  const [data, setData] = useState(initialState);
  const { phonenumber, password, cfpassword } = data;

  useEffect(() => {
    fetchData();
  }, [trigger]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const fetchData = async () => {
    try {
      const res = await axios.post("/user/updateuser");
      console.log(res);
      setUserData(res.data.data);
      setData({
        ...data,
        phonenumber: userData.phonenumber.value,
        email: userData.email.value,
        username: userData.username,
      });
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      }
      console.error(error);
    }
  };

  const updateInfor = (e) => {
    e.preventDefault();
    try {
      axios.patch("/user/updateuser", data);
      setConfirmationSnackbarMessage("Update Successfully!");
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

  const updatePassword = async (e) => {
    e.preventDefault();
    // console.log(user);
    // const ismatch = await bcrypt.compare(password, user.password);
    // if (ismatch) {
    //   setConfirmationSnackbarMessage("new password is same as the old one!");
    //   setConfirmationSnackbarOpen(true);
    // }
    if (isLength(password)) {
      setConfirmationSnackbarMessage("Password must be at least 6 characters!");
      setConfirmationSnackbarOpen(true);
    }

    if (!isMatch(password, cfpassword)) {
      setConfirmationSnackbarMessage("Password did not match.");
      setConfirmationSnackbarOpen(true);
    }
    // try {
    //   axios.post(
    //     "/user/reset",
    //     { password: password },
    //     { headers: { Authorization: token } }
    //   );
    //   setConfirmationSnackbarMessage("Update Successfull!");
    //   setConfirmationSnackbarOpen(true);
    // } catch (error) {
    //   setConfirmationSnackbarMessage("Failed to Update!");
    //   setConfirmationSnackbarOpen(true);
    // }
  };

  const verifyEmail = async (e) => {
    e.preventDefault();
    let res;
    try {
      res = await axios.post("/user/verify-email-otp", {
        id: userData._id,
        OTP: Email,
      });
      setConfirmationSnackbarMessage("Email Verified Successfully!");
      setConfirmationSnackbarOpen(true);
      setTrigger(!trigger);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      } else {
        console.error(error);
        setConfirmationSnackbarMessage(res.message);
        setConfirmationSnackbarOpen(true);
      }
    }
  };

  const sendEmailOTP = async () => {
    try {
      const res = await axios.post("/user/generate-email-otp", {
        id: userData._id,
      });
      setConfirmationSnackbarMessage("OTP sent Successfully!");
      setConfirmationSnackbarOpen(true);
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

  const sendNumberOTP = async () => {
    try {
      const res = await axios.post("/user/generate-number-otp", {
        id: userData._id,
      });
      setConfirmationSnackbarMessage("OTP sent Successfully!");
      setConfirmationSnackbarOpen(true);
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

  const verifyNumber = async (e) => {
    e.preventDefault();
    try {
      console.log(userData._id + " " + Number);
      const res = await axios.post("/user/verify-number-otp", {
        id: userData._id,
        OTP: Number,
      });
      setConfirmationSnackbarMessage("Phone Number Verified Successfully!");
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

  const verifyDocument = async (e) => {
    e.preventDefault();
    let res;
    try {
      const formdata = new FormData();
      formdata.append("file", document);
      formdata.append("id", userData._id);
      formdata.append("documenttype", documentType);
      formdata.append("documentnumber", documentNumber);
      res = await axios.post("/user/document-validation", formdata);
      setConfirmationSnackbarMessage("Document Verified Successfully!");
      setConfirmationSnackbarOpen(true);
      setTrigger(!trigger);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      } else {
        console.error(res.message);
        setConfirmationSnackbarMessage(res.message);
        setConfirmationSnackbarOpen(true);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center mt-3 fw-bold">Your profile</h1>
      <div className="personal mt-5">
        <h5 className="heading">Personal Details</h5>
        <form onSubmit={updateInfor}>
          <div className="mb-3 d-flex justify-content-between formdiv">
            <div className="w-50">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                aria-describedby="emailHelp"
                defaultValue={userData && userData.username}
                onChange={handleChange}
              />
            </div>
            <div className="w-50 ms-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                defaultValue={userData && userData.email.value}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-between formdiv">
            <div className="w-50">
              <label htmlFor="phonenumber" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phonenumber"
                name="phonenumber"
                defaultValue={userData && userData.phonenumber.value}
                onChange={handleChange}
              />
            </div>
            <div className="w-50 ms-2">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                defaultValue={userData && userData.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Details
          </button>
        </form>
      </div>
      <div className="personal my-5">
        <h5 className="heading heading2">Change Password</h5>
        <form onSubmit={updatePassword} method="POST">
          <div className="mb-3 d-flex justify-content-between formdiv">
            <div className="w-50">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="w-50 ms-2">
              <label htmlFor="cfpassword" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cfpassword"
                name="cfpassword"
                value={cfpassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Password
          </button>
        </form>
      </div>
      <div className="d-flex flex-md-row flex-column justify-content-evenly mx-md-4">
        {userData && !userData.phonenumber.isVer && (
          <div className="verify personal m-5">
            <h5 className="heading heading2">Number Verification</h5>
            <div>
              <div className="mb-3 formdiv w-100">
                <div>
                  <label htmlFor="number" className="form-label">
                    Enter the OTP
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    id="number"
                    value={Number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>
              <button className="btn btn-primary" onClick={sendNumberOTP}>
                Send OTP
              </button>
              <button onClick={verifyNumber} className="ms-5 btn btn-primary">
                Verify
              </button>
            </div>
          </div>
        )}
        {userData && !userData.email.isVer && (
          <div className="personal verify m-5">
            <h5 className="heading heading2">Email Verification</h5>
            <div>
              <div className="mb-3 d-flex justify-content-between">
                <div className="w-100">
                  <label htmlFor="email" className="form-label">
                    Enter the OTP
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="email"
                    id="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <button className="btn btn-primary" onClick={sendEmailOTP}>
                Send OTP
              </button>
              <button onClick={verifyEmail} className="ms-5 btn btn-primary">
                Verify
              </button>
            </div>
          </div>
        )}
      </div>
      {userData && userData.document === undefined && (
        <div className="mx-md-4">
          <div className="personal verify m-5">
            <h5 className="heading heading2">Document Verification</h5>
            <form onSubmit={verifyDocument} method="POST">
              <div className="mb-3 d-flex align-items-center justify-content-between formdiv">
                <div className="mt-4">
                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {documentType
                        ? documentType
                        : "Select the Type of Document"}
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li onClick={() => setDocumentType("Aadhar Card")}>
                        <a class="dropdown-item">Aadhar Card</a>
                      </li>
                      <li onClick={() => setDocumentType("PAN Card")}>
                        <a class="dropdown-item">PAN Card</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-50 ms-2">
                  <label htmlFor="document" className="form-label">
                    Select the Document
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="document"
                    id="document"
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                  />
                </div>
                <div className="w-50 ms-2">
                  <label htmlFor="docNumber" className="form-label">
                    Enter the Document Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="docNumber"
                    id="docNumber"
                    value={documentNumber}
                    onChange={(e) => setDocumentNumber(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Verify
              </button>
            </form>
          </div>
        </div>
      )}
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </div>
  );
}

export default Profile;
