import React from "react";
import Input from "../../Components/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import PrimaryButton2 from "../../Components/Button/PrimaryButton/PrimaryButton2";
import ContactDiv from "./Contact/ContactDiv";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactDiv />
      <Footer />
    </>
  );
};

export default Contact;
