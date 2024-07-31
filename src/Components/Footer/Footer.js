import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Card } from "react-bootstrap";
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import splendid from '../../assets/images/splendid.svg';
import './Footer.css'
const Footer = () => {
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
                    <a>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    
                    </a>
                    <a>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </div>
                </div>
                
            </Col>
            <Col sm={12} md={4}>
                <div className="footer_title">
                    <h5>Useful links</h5>
                    <ul className='footer_links'>
                        <li><a href="/creator">I am a Creator</a></li>
                        <li><a href="/">I am a Brand</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a>hello@splendid.app</a></li>
                    </ul>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className="footer_agreement">
                    <h5>Splendid User Agreement</h5>
                    <ul className='footer_links'>
                        <li><a>Terms & Conditions</a></li>
                        <li><a>Privacy & Policy</a></li>
                     
                    </ul>

                    <div className='address'>
                        <p><span>ADDRESS: </span>235, Binnamangala, 2nd Floor 13th Cross Road, 2nd Stage Indiranagar (Bangalore) Bangalore North Bangalore, Karnataka, 560038, INDIA</p>
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
