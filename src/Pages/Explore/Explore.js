import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ExploreCard from './ExploreCard/ExploreCard';
import { Container } from 'react-bootstrap';
import './Explore.css';

const Explore = () => {
  return (
    <div>
      <Header />
      <div className="explore_banner">
        <Container >
         <h1 class="explore_title">Explore</h1>
        </Container>
      </div>
      <ExploreCard />
      <Footer />
    </div>
  )
}

export default Explore
