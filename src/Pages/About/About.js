import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './About.css';
import { Container } from 'react-bootstrap';
import SecondaryButton from '../../Components/Button/SecondaryButton/SecondaryButton';

const About = () => {
  return (
    <div>
      <Header />
      <div className='about_section'>
            <h5 className='pb-5 pt-3'>Splendid: The Performance Layer For Partnerships!</h5>
        <Container className=''>
            <p>Splendid bridges the conversion gap with its creator commerce marketing platform, designed to help forward-thinking brands and creators boost their revenue. </p>
            <p>Drive more spending and win more customers by empowering partners and creators with AI-powered storefronts, re-engagement campaigns, samples, and gifts. </p>
            <p>We aim to be a co-pilot for customers, followers, influencers, ambassadors, and partners by enhancing their online shopping and recommendation experience. </p>
            {/* <p><b>Splendid: </b>the performance layer for partnerships! </p> */}
            <div className='about_button_container d-flex flex-column justify-content-center align-items-center mb-3 mt-5'>
                <SecondaryButton title={'I am a Brand'} iconState={false} url={'/'}/>
                <SecondaryButton title={'I am a Creator'}  iconState={false} url={'/creator'}/>
                
            </div>

        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default About
