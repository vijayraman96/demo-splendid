import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PrimaryButton2 from "../../../Components/Button/PrimaryButton/PrimaryButton2";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import "./ContactDiv.css";
import ContactImage from '../../../assets/images/contact_us.png';

const ContactDiv = () => {
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
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|io|ie|org|ai|net|co|info|me|app|tech|site)$/,
          "Invalid email domain"
        )
        .min(10)
        .max(100, "Email address is too long")
        .required("Email is required"),
      fullName: Yup.string().required("Please enter your Full Name"),
      number: Yup.string().matches(
        new RegExp("[0-9]{10}"),
        "Enter valid number"
      ),
      site_url: Yup.string().required("Please enter your Site url"),
      social_media_url: Yup.string().required(
        "Please enter your Social Media url"
      ),
    }),
    onSubmit: (values) => {
      // e.preventDefault();
      console.log("values", values);
    },
  });
  return (
    <div className="contact_section">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
          <div className="image_container">
          <h2 className="mobile_title">Get In Touch</h2>
            <img src={ContactImage}/>
            <h2 className="title">We'll get back to you!</h2>
            <p class="para">Enable creators and harness the power  of social selling.</p>
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
                  error={formik.touched.email ? formik.errors.email : undefined}
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
                    formik.touched.fullName ? formik.errors.fullName : undefined
                  }
                  maxlength="200"
                  title="Full Name"
                  name="fullName"
                />
                <Input
                  type="numeric"
                  id="number"
                  className="form-control"
                  placeholder="Enter your Mobile Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.number}
                  error={
                    formik.touched.number ? formik.errors.number : undefined
                  }
                  maxlength="200"
                  title="Mobile Number"
                  name="number"
                />
                <Input
                  type="text"
                  id="siteUrl"
                  className="form-control"
                  placeholder="Enter your Site Url"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.site_url}
                  error={
                    formik.touched.site_url ? formik.errors.site_url : undefined
                  }
                  maxlength="200"
                  title="Site Url"
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
                <Button type="submit" className="contactBtn"> Request a Demo </Button>
                </div>
                
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
