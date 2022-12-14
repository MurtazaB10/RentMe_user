import "./Forget.css";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Snackbar from "../../components/Alert/SnackBar";

function Forget() {
  const history = useHistory();
  const [data, setData] = useState("");
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setData(value);
  };
  const forgotPassword = async () => {
    try {
      const res = await axios.post("/forgot-password", { email: data });
      setConfirmationSnackbarMessage(
        "Password update link is sent on your registered email"
      );
      setConfirmationSnackbarOpen(true);
      // history.push("/reset");
    } catch (err) {
      setConfirmationSnackbarMessage("Invalid email!");
      setConfirmationSnackbarOpen(true);
    }
  };
  return (
    <div className="fg-container">
      <div className="fg_pass">
        <h2>Forgot Your Password?</h2>

        <div className="row">
          <label htmlFor="email">Enter your email address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={data}
            onChange={handleChangeInput}
          />
          <button onClick={forgotPassword}>Verify your email</button>
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
export default Forget;

// //import {  ButtonGroup} from "@material-ui/core"
// // import { useParams } from "react-router-dom";
// import Logo from './download.jpg'
// import * as Yup from "yup";
// // import { connect } from "react-redux";
// import {FiMail} from 'react-icons/fi'
// import {TailSpin} from 'react-loader-spinner'
// import {Formik,Form} from 'formik'
// import { TextInput } from "./FormLib";
// import { ButtonGroup,Avatar,StyledTitle,StyleFormButton,StyledFormArea,colors, StyledContainer} from "./Styles";
// const forget=()=>{
//     // const history = useHistory();
//     // const {userEmail} = useParams();
//     return (
//         <StyledContainer>
//             <StyledFormArea>            <Avatar image={Logo}/>
//             <StyledTitle color ={colors.theme} size={30}>
//                 Password Reset
//             </StyledTitle><Formik>
//             <Form>
//             <TextInput name="email"
//         type="text"
//         label="Registered Email Address"
//         placeholder="kkkdjfb@gmail.com"
//         icon={<FiMail/>}
//         />
//                 <ButtonGroup>
//                     <StyleFormButton type = "submit">Send Mail</StyleFormButton>
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
// export default forget;
