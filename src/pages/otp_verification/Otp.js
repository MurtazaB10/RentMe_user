import React, { useState } from "react";

const Otp = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
<div className="OtpZone" style={{border:"1px solid",width:"400px",height:"200px",marginLeft:"40%",marginTop:"20%"}}>
<div className="row">
                <div className="col text-center">
                    <p>Enter the OTP sent to you to verify your identity</p>
                    {otp.map((data, index) => {
                        return (
                            <input style={{width:"40px" ,height:"40px",marginLeft:"10px",textAlign:"center"}}
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        &ensp;
                        <button
                            className="btn btn-primary"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                    </p>
                </div>
            </div>
</div>
        </>
    );
};

export default Otp;
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from 'yup'

// export default function Otp() {
//   const formSchema = Yup.object().shape({
//     password: Yup.string()
//       .required('Password is mendatory')
//       .min(7, 'Password must be at 7 char long'),
//     confirmPwd: Yup.string()
//       .required('Password is mendatory')
//       .oneOf([Yup.ref('password')], 'Passwords does not match'),
//   })
//   const formOptions = { resolver: yupResolver(formSchema) }
//   const { register, handleSubmit, reset, formState } = useForm(formOptions)
//   const { errors } = formState
//   function onSubmit(data) {
//     console.log(JSON.stringify(data, null, 4))
//     return false
//   }
//   return (
//     <div className="container mt-5">
//       <h2>React Confirm Password Validation Example</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             name="password"
//             type="password"
//             {...register('password')}
//             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.password?.message}</div>
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             name="confirmPwd"
//             type="password"
//             {...register('confirmPwd')}
//             className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
//         </div>
//         <div className="mt-3">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }
// // import DemoForm from './DemoForm';
// // import React from 'react';
  

  
// // export default DemoForm;
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import Form from '../utiliy/Form'

// // const Otp = () => {

// //     const [email, setEmail] = useState('');
// //     const [validate, setValidate] = useState({});

// //     const validateforgotPassword = () => {
// //         let isValid = true;

// //         let validator = Form.validator({
// //             email: {
// //                 value: email,
// //                 isRequired: true,
// //                 isEmail: true
// //             }
// //         });

// //         if (validator !== null) {
// //             setValidate({
// //                 validate: validator.errors
// //             })

// //             isValid = false
// //         }
// //         return isValid;
// //     }

// //     const forgotPassword = (e) => {
// //         e.preventDefault();

// //         const validate = validateforgotPassword();

// //         if (validate) {
// //             alert('Reset password link is sent to '+email);
// //             setValidate({});
// //             setEmail('');
// //         }
// //     }

// //     return (
// //         <div className="row g-0 auth-wrapper">
// //             <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
// //                 <div className="auth-background-holder"></div>
// //                 <div className="auth-background-mask"></div>
// //             </div>

// //             <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
// //                 <div className="d-flex flex-column align-content-end">
// //                     <div className="auth-body mx-auto">
// //                         <p>Forgot Password</p>
// //                         <div className="auth-form-container text-start">
// //                             <form className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
// //                                 <div className="email mb-3">
// //                                     <input type="email"
// //                                         className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
// //                                         id="email"
// //                                         name="email"
// //                                         value={email}
// //                                         placeholder="Email"
// //                                         onChange={(e) => setEmail(e.target.value)}
// //                                     />

// //                                     <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
// //                                         {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
// //                                     </div>
// //                                 </div>
                                
// //                                 <div className="text-center">
// //                                     <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Forgot Password</button>
// //                                 </div>
// //                             </form>

// //                             <hr />
// //                             <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //         </div>
// //     );
// // }

// // export default Otp;