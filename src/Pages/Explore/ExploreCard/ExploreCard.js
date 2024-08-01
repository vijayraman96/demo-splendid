import React from "react";
import "./ExploreCard.css";
import { Container, Col, Card } from "react-bootstrap";
import SecondaryButton from "../../../Components/Button/SecondaryButton/SecondaryButton";
import { ExploreData } from "./ExploreData";

const ExploreCard = () => {
  return (
    <div className="explore_card">
      <Container>
        <div class="explore_row">
            {ExploreData.map(item =>{
                return (
                    <Col  lg={4} md={6} sm={12}>
                        <Card id={item.id}>
                            <div className="image_container">
                                <img className="bg_image" src={item.bgImage} />
                                <img className="logo" src={item.logo} />
                            </div>
                        <div className="title_container">
                        <h5 className="explore_card_title">{item.title}</h5>
                        <a href={item.url}>{item.subTitle}</a>
                        <p class="explore_para">
                            {item.para}
                        </p>
                        <SecondaryButton url={item.url} title={'Learn more'}/>
                        </div>
                        
                        </Card>
                    </Col>
                )
            })}
          
        </div>
      </Container>
    </div>
  );
};

export default ExploreCard;
