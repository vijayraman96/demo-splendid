import React from "react";
import SecondaryButton from "../../../Components/Button/SecondaryButton/SecondaryButton";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./BrandCard.css";

const BrandCard = () => {
  return (
    <div className="brand_card_section">
      <Container>
        <Row>
          <Col sm={12} md={4} >
            <Card>
              <Card.Body>
                <Card.Title className="text-left">
                  Integrations with your <br></br> POS system
                </Card.Title>
                <Card.Text className="text-left">
                  Turn your community into your new acquisition channel – With
                  92% of people trusting recommendations from people they know.
                </Card.Text>
                <SecondaryButton title="Read more" />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} >
          <Card>
              <Card.Body>
                <Card.Title className="text-left">
                  Discover talent that impacts your brand
                </Card.Title>
                <Card.Text className="text-left">
                  Discover high-ranking customers, creators, followers, and
                  influencers in your brand network and invite them to be your
                  partners.
                </Card.Text>
                <SecondaryButton title="Read more" />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} >
          <Card>
              <Card.Body>
                <Card.Title className="text-left">
                Enable creator commerce & social selling
                </Card.Title>
                <Card.Text className="text-left">
                With Splendid brand’s can power mini-shops that are published by creators turning their followers into your buyers.
                </Card.Text>
                <SecondaryButton title="Read more" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandCard;
