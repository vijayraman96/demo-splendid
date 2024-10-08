import React, { useEffect, useRef } from "react";
import PrimaryButton2 from "../../../Components/Button/PrimaryButton/PrimaryButton2";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import IntegrationPos from "../../../assets/images/integrations-pos.jpg";
import DiscoverTalent from "../../../assets/images/discover-talent.jpg";
import EnableCreator from "../../../assets/images/enable-creator.jpg";
import { storeFrontData } from "./StoreFrontData.js";
import "./StoreFront.css";
import { useLocation } from 'react-router-dom';
const StoreFront = () => {
  console.log("data", storeFrontData);
  const refs = useRef({});
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the leading '#'
    if (hash && refs.current[hash]) {
      refs.current[hash].scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div>
      <div className="storefront_container">
        {storeFrontData.map((item) => {
          return (
            // Add return statement here
            <div className="section" ref={(el) => (refs.current[item.id] = el)} key={item.id} id={item.id}>
              <Container>
                <Row>
                  <Col sm={12} md={6}>
                    <div className="image_container">
                      <h2 className="title mob_title">{item.mobileTitle}</h2>
                      <img src={item.imageSrc} alt={item.laptopTitle} />
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className="content_container">
                      <h2 className="title lap_title">{item.laptopTitle}</h2>
                      <p className="para">{item.para}</p>
                      {item.otherPara && (
                        <p className="para">{item.otherPara}</p>
                      )}
                      {item.liArray && item.liArray.length > 0 && (
                        <ul className="brand_li">
                          {item.liArray.map((liItem, index) => (
                            <li key={index}>{liItem.point}</li> // Destructure point
                          ))}
                        </ul>
                      )}
                      <PrimaryButton2 title="Get Started" url="/contact" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoreFront;
