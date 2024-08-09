import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PrimaryButton2 from "../../../Components/Button/PrimaryButton/PrimaryButton2";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import "./ContactDiv.css";
import ContactImage from "../../../assets/images/contact_us.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ContactDiv = () => {
    const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const emailDomainValidation = (email) => {
    const domain = email.split('@')[1];
  return domain && domain.includes('.');
  };
  const handleChange = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
    const { value } = event.target;
    // Allow only positive digits
    if (value === '' || /^[0-9]+$/.test(value)) {
      formik.setFieldValue('number', value);
    }
  };
  const handleKeyDown = (event) => {
    
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      number: "",
      site_url: "",
      social_media_url: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email is not valid")
        .test('is-valid-domain', 'Email domain is not valid', value => {
            if (value) {
              return emailDomainValidation(value);
            }
            return true;
          })
        .required("Email is required"),
      fullName: Yup.string().required("Please enter your Full Name"),
      number: Yup.string().matches(/^[0-9]+$/),
      site_url: Yup.string()
      .required("Please enter shopify link")
      .matches(
        /^(https:\/\/[a-zA-Z0-9-_]+\.myshopify\.com\/admin+.*|https:\/\/admin\.shopify\.com\/store\/[a-zA-Z0-9-_]+.*)$/,
        "Invalid shopify link"
      ),
    }),
    onSubmit: async(values, { resetForm }) => {
      try {
        const response = await axios.post(
          "https://api.splendid.app/api/application/v1/brand-application/add",
          {
            brand_name: formik.values.fullName,
            business_email: formik.values.email,
            business_mobile_number: formik.values.number,
            website_url: formik.values.site_url,
            social_urls: formik.values.social_media_url,
          }
        );
      
        const data = response.data;  // response.data contains the actual data
      
        if (data && data.status === "Success" && Object.keys(data.brand_application).length > 0) {
            resetForm();
          navigate("/thankyou");
        }
      } catch (err) {
        if(err?.name === "AxiosError") {
            setErrorMsg("The submission is failed. Please try again later");
        }
      }
    },
  });
  useEffect(() => {
    // setTimeout(() => setErrorMsg(""))
  }, [errorMsg])
  return (
    <div className="contact_section">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <div className="image_container">
              <h2 className="mobile_title">Get In Touch</h2>
              <img src={ContactImage} />
              <h2 className="title">We'll get back to you!</h2>
              <p class="para">
                Enable creators and harness the power of social selling.
              </p>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="contact form">
              <h2 className="title laptop_title">Get In Touch</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="input_section">
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
                  
                    id="text"
                    className="form-control"
                    placeholder="Enter your Mobile Number"
                   onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                    type="text" pattern="[0-9]*"
                    error={
                      formik.touched.number ? formik.errors.number : undefined
                    }
                    maxlength="200"
                    title="Mobile Number"
                    name="number"
                    onKeyDown={handleKeyDown}
                  />
                  <Input
                    type="text"
                    id="siteUrl"
                    className="form-control"
                    placeholder="Enter your Shopify Admin Url"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.site_url}
                    error={
                      formik.touched.site_url
                        ? formik.errors.site_url
                        : undefined
                    }
                    //   maxlength="200"
                    title="Shopify Admin Url"
                    name="site_url"
                  />
                  <Input
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
                  />
                  {/* <PrimaryButton2 title="Get Started" iconState="false" type="submit"/>
                   */}
                  <div className="mt-5 d-flex justify-content-start">
                    <button type="submit" className="contactBtn">
                      Request a Demo
                    </button>
                  </div>
                  <p className="error">{errorMsg}</p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactDiv;
