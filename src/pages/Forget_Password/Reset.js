import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { showErrMsg, showSuccessMsg } from "./util/Notification";
import { isLength, isMatch } from "./util/Validation";
import Snackbar from "../../components/Alert/SnackBar";

const initialState = {
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

function Reset() {
  const [data, setData] = useState(initialState);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const { token } = useParams();

  const { password, cf_password, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPass = async () => {
    if (isLength(password))
      return setData({
        ...data,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setData({ ...data, err: "Password did not match.", success: "" });

    try {
      const res = await axios.post(
        "/user/reset",
        { password },
        {
          headers: { Authorization: token },
        }
      );

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="fg-container">
      <div className="fg_pass">
        <h2>Reset Your Password</h2>

        <div className="row">
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangeInput}
          />
          <label htmlFor="cf_password">Confirm Password</label>
          <input
            type="password"
            name="cf_password"
            id="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
          <button onClick={handleResetPass}>Reset Password</button>
          &nbsp;
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

export default Reset;
// //import {  ButtonGroup} from "@material-ui/core"
// // import { useParams } from "react-router-dom";
// import Logo from './download.jpg'
// import * as Yup from "yup";
// // import { connect } from "react-redux";
// import {FiMail,FiLock} from 'react-icons/fi'
// import {TailSpin} from 'react-loader-spinner'
// import {Formik,Form} from 'formik'
// import { TextInput } from "./FormLib";
// import { ButtonGroup,Avatar,StyledTitle,StyleFormButton,StyledFormArea,colors, StyledContainer} from "./Styles";
// const Reset=()=>{
//     // const history = useHistory();
//     // const {userEmail} = useParams();
//     return (
//             <StyledContainer>
//             <StyledFormArea>            <Avatar image={Logo}/>
//             <StyledTitle color ={colors.theme} size={30}>
//                 Change your password
//             </StyledTitle><Formik>
//             <Form>
//             <TextInput name="password"
//         type="password"
//         label="New Password"
//         placeholder="abc123"
//         icon={<FiMail/>}
//         />
//                     <TextInput name="password"
//         type="password"
//         label="Confirm password"
//         placeholder="********"
//         icon={<FiLock/>}
//         />
//                 <ButtonGroup>
//                     <StyleFormButton type = "submit">Update</StyleFormButton>
//         </ButtonGroup>
//             </Form>
//             {/* <Formik initialValues={
//             {
//                 email:"KarunMourya4@gmail.com",
//                 redirectUrl:"http://localhost:3000/reset",
//             }}
//             validationmSchema = {Yup.object()({
//     email: Yup.string()
//       .email('invalid Email address').required("REquired")
//   })} */}
//    {/* onSubmit = {(values,{setSubmitting,setFieldError})=>{
// //       console.log(values);

// //   }}
//         > */}
//  {/* {
// ({isSubmitting})=>(
//     <Form>
//         <TextInput name="email"
//         type="text"
//         label="Registered Email Address"
//         placeholder="kkkdjfb@gmail.com"
//         // icon={<FiMail/>}
//         />
//         <ButtonGroup>
//             {
//                 !isSubmitting &&(
//                     <StyleFormButton type = "submit">Send Mail</StyleFormButton>
//                 )
//             }
//             {
//                 isSubmitting&&(
//                     <TailSpin
//                         type="ThreeDots"
//                         color={colors.theme}
//                         height={49}
//                         width={100}
//                     />
//                 )
//             }
//         </ButtonGroup>
//     </Form>
// )
// }           */}
//         </Formik>
//         {/* <ExtraText>
//             Back To Login? <TextLink to='/login'>Click Here</TextLink>
//         </ExtraText> */}
//         </StyledFormArea>

//         </StyledContainer>

//     )
// }
// export default Reset;
