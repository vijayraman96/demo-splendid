import React from 'react'
import SecondaryButton from '../../../Components/Button/SecondaryButton/SecondaryButton';
import './CreatorStoreFront.css';
import ProfitableBrand from '../../../assets/images/profitable-brand.jpg';
import CurateDigital from '../../../assets/images/curate-digital.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreatorStoreFront = () => {
    const navigate = useNavigate();
  const navigateFunction = (val) => {
    console.log("val", val)
    navigate(`/${val}`);
  }
  return (
    <div className='creatorStore'>
      <h2 className='store_title'>A simplified shopping experience for your audience. Easily share your must-have products via your personalized Splendid storefront.​</h2>
      <Container>
        <Row>
            <Col lg={6} sm={12} className='left_div'>
                <div className='store_div'>
                    <img src={ProfitableBrand} onClick={() => navigateFunction('creator-storefront#brand_partnership')} />
                    <h4>Establish profitable brand partnerships.​</h4>
                    <SecondaryButton title="Read More" url={'/creator-storefront#brand_partnership'} />
                </div>

            </Col>
            <Col lg={6} sm={12} className='right_div'>
                <div className='store_div'>
                    <img src={CurateDigital} onClick={() => navigateFunction('creator-storefront#digital_storefront')}/>
                    <h4>Curate a digital storefront.​</h4>
                    <SecondaryButton title="Read More" url={'/creator-storefront#digital_storefront'}/>
                </div>

            </Col>
           
        </Row>
      </Container>
    </div>
  )
}

export default CreatorStoreFront
