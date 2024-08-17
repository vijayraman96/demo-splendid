import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PrimaryButton2 from "../../../Components/Button/PrimaryButton/PrimaryButton2";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import "./HelpCard.css";
import ContactImage from "../../../assets/images/contact_us.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DropdownInput from "../../../Components/Input/DropdownInput/DropdownInput";
import TextArea from "../../../Components/Input/TextArea/TextArea";

const HelpCard = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const emailDomainValidation = (email) => {
    const domain = email.split("@")[1];
    return domain && domain.includes(".");
  };
  const handleChange = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
    const { value } = event.target;
    // Allow only positive digits
    if (value === "" || /^[0-9]+$/.test(value)) {
      formik.setFieldValue("number", value);
    }
  };
  const userTypeOptions = [
    { label: "Brand", value: "Brand" },
    { label: "Creator", value: "Creator" },
  ];
  const reasonData = [
    { label: "Delete Account", value: "Delete Account" },
    { label: "Other Queries", value: "Other Queries" },
  ];
  const handleKeyDown = (event) => {};
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      number: "",
      user_type: "",
      reason: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email is not valid")
        .test("is-valid-domain", "Email domain is not valid", (value) => {
          if (value) {
            return emailDomainValidation(value);
          }
          return true;
        })
        .required("Email is required"),
      fullName: Yup.string().required("Please enter your Full Name"),
      number: Yup.string().matches(/^[0-9]+$/),
      user_type: Yup.string().required("Please enter your User Type"),
      reason: Yup.string().required("Please enter your Reason"),
      //   message:  Yup.string().required("Please enter your Reason"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("values", values);
      try {
        const response = await axios.post(
          "https://api.splendid.app/api/application/v1/splendid/support",
          {
            name: formik.values.fullName,
            user_type: formik.values.user_type,
            mobile_number: formik.values.number,
            email: formik.values.email,
            message: formik.values.message,
            reason: formik.values.reason
          }
        );
        const data = response.data;  // response.data contains the actual data
        if (data && data.status === "Success") {
            resetForm();
            setSuccessMsg("We have received your request. We will notify you shortly.")
          // navigate("/thankyou");
        }
      } catch (err) {
        if (err?.name === "AxiosError") {
          setErrorMsg("The submission is failed. Please try again later");
        }
      }
    },
  });
  useEffect(() => {
    // setTimeout(() => setErrorMsg(""))
  }, [errorMsg]);
  return (
    <div className="help_section">
      <Container>
        <Row>
          {/* <Col lg={12} sm={12}>
            <div className="image_container">
              <h2 className="mobile_title">Get In Touch</h2>
              <img src={ContactImage} />
              <h2 className="title">We'll get back to you!</h2>
              <p class="para">
                Enable creators and harness the power of social selling.
              </p>
            </div>
          </Col> */}
          <Col lg={12} sm={12}>
            <div className="help form">
              <h2 className="title">Help</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="input_section">
                  <Input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    error={
                      formik.touched.fullName
                        ? formik.errors.fullName
                        : undefined
                    }
                    maxlength="200"
                    title="Full Name"
                    name="fullName"
                  />
                  <Input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your Work Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={
                      formik.touched.email ? formik.errors.email : undefined
                    }
                    maxlength="200"
                    title="Work Email"
                    name="email"
                  />

                  <Input
                    id="text"
                    className="form-control"
                    placeholder="Enter your Mobile Number"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                    type="text"
                    pattern="[0-9]*"
                    error={
                      formik.touched.number ? formik.errors.number : undefined
                    }
                    maxlength="200"
                    title="Mobile Number"
                    name="number"
                    onKeyDown={handleKeyDown}
                  />
                  <DropdownInput
                    name="user_type" // Ensure the name matches initialValues
                    options={userTypeOptions}
                    placeholder="Brand"
                    title="User Type"
                    value={formik.values.user_type}
                    onChange={formik.setFieldValue}
                    onBlur={formik.handleBlur}
                    error={formik.touched.user_type && formik.errors.user_type}
                  />
                  <DropdownInput
                    name="reason" // Ensure the name matches initialValues
                    options={reasonData}
                    placeholder="Delete my Account"
                    title="Reason"
                    value={formik.values.reason}
                    onChange={formik.setFieldValue}
                    onBlur={formik.handleBlur}
                    error={formik.touched.reason && formik.errors.reason}
                  />
                  <TextArea
                    name="message"
                    placeholder="Enter your reason briefly here"
                    title="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    // error={formik.touched.description && formik.errors.description}
                  />

                  {/* <Input
                    type="text"
                    id="socialMedia"
                    className="form-control"
                    placeholder="Enter your Social Media Url"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.social_media_url}
                    error={
                      formik.touched.social_media_url
                        ? formik.errors.social_media_url
                        : undefined
                    }
                    maxlength="200"
                    title="Social Media Url"
                    name="social_media_url"
                  /> */}
                  {/* <PrimaryButton2 title="Get Started" iconState="false" type="submit"/>
                   */}
                  <div className="mt-5 d-flex justify-content-start">
                    <button type="submit" className="contactBtn">
                      Submit
                    </button>
                  </div>
                  <p className="error">{errorMsg}</p>
                </div>
              </form>
              <p className="error">{errorMsg}</p>
              <h6 className="success">{successMsg}</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HelpCard;
