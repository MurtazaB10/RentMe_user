import React, { useState } from "react";
import axios from "axios";
import Snackbar from "../../components/Alert/SnackBar";
import { useParams } from "react-router-dom";

const initialState = {
  password: "",
  cf_password: "",
};

function Reset() {
  const [data, setData] = useState(initialState);
  const params = useParams();
  const [id, setId] = useState(params.id ? params.id : "");
  const [token, setToken] = useState(params.token ? params.token : "");
  console.log(id,token);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);

  const { password, cf_password } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPass = async () => {
    try {
      const res = await axios.post("/reset-password", { password ,id,token});
    console.log(res);
      setConfirmationSnackbarMessage("Password reset successfully!");
      setConfirmationSnackbarOpen(true);
    } catch (err) {
      setConfirmationSnackbarMessage("Something went wrong!");
      setConfirmationSnackbarOpen(true);
    }
  };

  return (
    <div className="fg-container">
      <div className="fg_pass">
        <h2>Reset Your Password</h2>

        <div className="row">
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
//         placeholder="****"
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