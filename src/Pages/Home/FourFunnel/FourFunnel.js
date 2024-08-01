import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FourFunnelImg from '../../../assets/images/four-funnel.jpg';
import './FourFunnel.css'
const FourFunnel = () => {
  return (
    <div className="funnel_section">
      <Container>
        <Row>
          <Col className="col-md-6" sm="12">
            <div className="image_container">
              <h2 className="title mob_title">
                Splendid's four funnel approach
              </h2>
              <img src={FourFunnelImg} alt="Four Funnel Approach"></img>
            </div>
          </Col>
          <Col className="col-md-6 " sm="12">
          <div className="content_div">
          <h2 className="title laptop_title">
              Splendid's four funnel approach
            </h2>
            <h5 className="sub_title">
              Build a successful marketing program together. The Next-Gen Social
              Commerce Playbook.
            </h5>
            <ul>
              <li>
                <h6 className="approach">
                  1. Discover high potential customers & creators
                </h6>
                <p className="para">
                  Splendid Plugin syncs with any online POS to integrate orders,
                  track campaigns, convert customers, and create marketing
                  lists. A Splendid link acts as a discovery phase catalyst by
                  connecting customers to
                </p>
              </li>
              <li>
                <h6 className="approach">
                  2.  Engage with our creator match making tool
                </h6>
                <p className="para">
                Our proprietary authenticity algorithm grades creators, followers, and customers based on brand compatibility and engagement.
                </p>
              </li>
              <li>
                <h6 className="approach">
                  3.  Enable customers and creators to represent & sell
                </h6>
                <p className="para">
                Brands can empower creators with products and media assets, enabling them to earn commission on sales and through pay-per-click
                </p>
              </li>
              <li>
                <h6 className="approach">
                  4.  Collaborate for campaigns, gifting and  with like minded brands
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
