import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PrimaryButton2 from "../../Components/Button/PrimaryButton/PrimaryButton2";
import { Col, Row, Container } from "react-bootstrap";
import "./ThankYou.css";
import Thankyou from "../../assets/images/thankyou.png";

const ThankYou = () => {
  return (
    <div>
      <Header />
      <div className="thankyou_section">
        <Container>
          <div className="thankyou_div">
            <div className="image_div">
              <img src={Thankyou} alt="" />
              <h2 class="thank_title">
                Revolutionize Sales And Business Growth.
              </h2>
              <PrimaryButton2 title="Go to Home" iconState="false" url={'/'} />
              <p class="thank_description">Thank you for contacting us</p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
