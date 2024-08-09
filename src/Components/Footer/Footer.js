import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Card } from "react-bootstrap";
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import splendid from '../../assets/images/splendid.svg';
import { useNavigate } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='footer_section'>
      <Container>
        <Row>
            <Col sm={12} md={4}>
                <div className='footer_div'>
                <div className='footer_logo'>
                    <img src={splendid}></img>
                </div>
                <div className='footer_text'>
                    <p>Splendid enables brands, creators, and customers to build meaningful relationships with each other.</p>
                </div>
                <div className='social_links'>
                    <a href='https://www.instagram.com/splendidfutures/' target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    
                    </a>
                    <a href='https://www.linkedin.com/company/splendid-app/' target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href='https://www.facebook.com/splendidfutures' target="blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </div>
                </div>
                
            </Col>
            <Col sm={12} md={4}>
                <div className="footer_title">
                    <h5>Useful Links</h5>
                    <ul className='footer_links'>
                        <li><a onClick={() => navigate('/creator')}>I Am A Creator</a></li>
                        <li><a onClick={() => navigate('/')}>I Am A Brand</a></li>
                        <li><a onClick={() => navigate('/about')}>About</a></li>
                        <li><a href="mailto:hello@splendid.app">hello@splendid.app</a></li>
                    </ul>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className="footer_agreement">
                    <h5>Splendid User Agreement</h5>
                    <ul className='footer_links'>
                        <li><a onClick={() => navigate('/terms-conditions')}>Terms & Conditions</a></li>
                        <li><a onClick={() => navigate('/privacy-policy')}>Privacy & Policy</a></li>
                     
                    </ul>
                    <h6 className='pvtLtd'>Splendid App Private Limited</h6>
                    <div className='address'>
                        <p><span>Address: </span>235, Binnamangala, 2nd Floor 13th Cross Road, 2nd Stage Indiranagar (Bangalore) Bangalore North Bangalore, Karnataka, 560038, INDIA</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='footer_second_div'>
            <Col sm={12}>
                <p>© 2024 Splendid, All Rights Reserved</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
