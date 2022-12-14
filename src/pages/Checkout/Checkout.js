import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import MaterialLayout from "./MaterialLayout";
import AddressForm from "./Forms/AddressForm";
// import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from "./ReviewOrder/ReviewOrder";
import CheckoutSuccess from "./CheckoutSuccess/CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import useStyles from "./Cstyles";
import axios from "axios";

const steps = ["Shipping address", "Review your order"];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  const init = {
    firstName: "",
    lastName: "",
    address: "",
  };
  const [data, setData] = useState(init);

  switch (step) {
    case 0:
      return <AddressForm formField={formField} set={setData} />;
    // case 1:
    //   return <PaymentForm formField={formField} />;
    case 1:
      return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
    console.log(activeStep);
  }
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  // useEffect(() => {
  //   loadScript("https://checkout.razorpay.com/v1/checkout.js");
  // });
  const displayRazorpay = async () => {
    if (isLastStep) {
      const res = await axios.get("/user/getcart");
      let t = 0;
      for (let i = 0; i < res.data.data.user.cart.items.length; i++)
        t +=
          res.data.data.user.cart.items[i].quantity *
            res.data.data.user.cart.items[i].productId.rentalprice *
            res.data.data.user.cart.items[i].duration +
          res.data.data.user.cart.items[i].productId.deposit;
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onerror = () => {
        alert("Razorpay SDK failed to load. Are you online?");
      };
      script.onload = async () => {
        try {
          const res1 = await axios.post("/create-order", {
            amount: t,
          });
          const { amount, id: order_id, currency } = res1.data.data.order;
          const res2 = await axios.get("/get-razorpay-key");
          const { key: razorpayKey } = res2.data.data;
          var options = {
            key: razorpayKey,
            amount: amount.toString(),
            currency: currency,
            name: "Rentish",
            description: "Order",
            order_id: order_id,
            handler: async function (response) {
              const result = await axios.post("/pay-order", {
                amount: amount,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              });
              window.location.pathname = `/success/${result.data.data.razorpay.orderId}`;
            },
            prefill: {
              name: res.data.data.user.username,
              email: res.data.data.user.email.value,
              contact: res.data.data.user.phonenumber.value,
            },
          };
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        } catch (error) {
          if (error.message === "Request failed with status code 401") {
            localStorage.clear();
          }
          console.error(error);
        }
      };
      document.body.appendChild(script);
    }
  };

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <MaterialLayout>
      <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length + 1 ? (
            <CheckoutSuccess />
          ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  {_renderStepContent(activeStep)}

                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={_handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <div className={classes.wrapper}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={displayRazorpay}
                        className={classes.button}
                      >
                        {isLastStep ? "Place order" : "Next"}
                      </Button>
                      {/* {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )} */}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </React.Fragment>
      </React.Fragment>
    </MaterialLayout>
  );
}