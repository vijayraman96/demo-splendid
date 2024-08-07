import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FourFunnelImg from '../../../assets/images/four-funnel.jpg';
import './FourFunnel.css'
import Circle from './../../../assets/images/circle.svg'
const FourFunnel = () => {
  return (
    <div className="funnel_section">
      <Container>
        <Row>
          <Col className="col-md-6" sm="12">
            <div className="image_container">
              <h2 className="title mob_title">
                Splendid's Four Funnel Approach
              </h2>
              <img src={FourFunnelImg} alt="Four Funnel Approach"></img>
            </div>
          </Col>
          <Col className="col-md-6" sm="12">
          <div className="content_div">
          <h2 className="title laptop_title">
              Splendid's Four Funnel Approach
            </h2>
            <h5 className="sub_title">
              Build a successful marketing program together. The Next-Gen Social
              Commerce Playbook.
            </h5>
            <ul class="funnel_ul">
              <li>
                <h6 className="approach">
                  <span className="animating"><span className="number">1</span> </span> Discover High Potential Customers & Creators
                </h6>
                <p className="para">
                  Splendid Plugin syncs with any online POS to integrate orders,
                  track campaigns, convert customers, and create marketing
                  lists. A Splendid link acts as a discovery phase catalyst by
                  connecting customers to brands.
                </p>
              </li>
              <li>
                <h6 className="approach">
                 <span className="animating"><span className="number">2</span></span>  Engage With Our Creator Match Making Tool
                </h6>
                <p className="para">
                Our proprietary authenticity algorithm grades creators, followers, and customers based on brand compatibility and engagement.
                </p>
              </li>
              <li>
                <h6 className="approach">
                  <span className="animating"><span className="number">3</span></span> Enable Customers And Creators To Represent & Sell
                </h6>
                <p className="para">
                Brands can empower creators with products and media assets, enabling them to earn commission on sales and through pay-per-click
                </p>
              </li>
              <li>
                <h6 className="approach">
                  <span className="animating"><span className="number">4</span></span>  Collaborate For Campaigns, Gifting And  With Like Minded Brands
                </h6>
                <p className="para pb-0">
                Splendid facilitates brand-brand, brand-creator, and creator-creator collaborations, multiplying engagement and ROI.
                </p>
              </li>
            </ul>
          </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FourFunnel;
