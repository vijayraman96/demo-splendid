import React from "react";
import "./Revolution.css";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PosIntegration from "../../../assets/images/pos-integrations.png";
import TrackPerformance from "../../../assets/images/track-performance.png";
import Leverage from "../../../assets/images/leverage-social.png";
import Gifting from "../../../assets/images/gifting.png";
const Revolution = () => {
  return (
    <div className="revolution_section">
      <Container>
        <h3 className="title text-center mx-auto">
          A revolutionary way to increase <br></br>sales & grow your business. ​
        </h3>
        <Row className="lap_view">
          <Col sm={12} md={12}>
            <ul className="revolution_ul">
              <li>
                <div className="li_container">
                  <div className="content">
                    <h3 className="revolution_title">
                      Track to optimize performance
                    </h3>
                    <h6 className="revolution_description">
                      Our all-in-one platform streamlines word-of-mouth
                      marketing making it easy to scale.
                    </h6>
                  </div>

                  <div className="icon_container">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="image_container">
                  <img src={TrackPerformance} alt="Track Performance" />
                </div>
              </li>
              <li>
                <div className="li_container">
                  <div className="content">
                    <h3 className="revolution_title">View social mentions</h3>
                    <h6 className="revolution_description">
                      Authenticity isn't just a buzzword—it's your growth
                      strategy.​<br></br>Get authentic reports on brand partner
                      engagement etc…
                    </h6>
                  </div>

                  <div className="icon_container">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="image_container">
                  <img src={Leverage} alt="Social Mentions" />
                </div>
              </li>
              <li>
                <div className="li_container">
                  <div className="content">
                    <h3 className="revolution_title">Simple monthly payouts</h3>
                    <h6 className="revolution_description">
                      Enjoy effortless financial management with monthly talent
                      and brand pay-outs​
                    </h6>
                  </div>

                  <div className="icon_container">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="image_container">
                  <img src={PosIntegration} alt="POS Integrations" />
                </div>
              </li>
              <li>
                <div className="li_container">
                  <div className="content">
                    <h3 className="revolution_title">
                      PR and gifting reimagined
                    </h3>
                    <h6 className="revolution_description">
                      Select those that matter to your business. Build a partner
                      program that is capable of scaling your brand
                    </h6>
                  </div>

                  <div className="icon_container">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="image_container">
                  <img src={Gifting} alt="Gifting" />
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="mob_view">
          <Row>
            <Col sm={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="">
                    <div className="revolution_icon_container d-flex justify-content-between align-items-center">
                      <h3> Track to optimize performance</h3>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrow_icon"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <img src={TrackPerformance} alt="Track Performance" />
                    <p>
                      Our all-in-one platform streamlines word-of-mouth
                      marketing making it easy to scale.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  <div className="revolution_icon_container d-flex justify-content-between align-items-center">
                      <h3>View social mentions</h3>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrow_icon"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <img src={Leverage} alt="Social Mentions" />
                    <p>
                      Authenticity isn't just a buzzword—it's your growth
                      strategy.​
                    </p>
                    <p>
                      Get authentic reports on brand partner engagement etc…
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                  <div className="revolution_icon_container d-flex justify-content-between align-items-center">
                      <h3>Simple monthly payouts</h3>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrow_icon"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                  <img src={PosIntegration} alt="POS Integrations" />
                    <p>
                    Enjoy effortless financial management with monthly talent and brand pay-outs​
                    </p>
                  
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                  <div className="revolution_icon_container d-flex justify-content-between align-items-center">
                      <h3>PR and gifting reimagined</h3>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrow_icon"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                  <img src={Gifting} alt="Gifting" />
                    <p>
                    Select those that matter to your business. Build a partner program that is capable of scaling your brand
                    </p>
                    
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Revolution;
