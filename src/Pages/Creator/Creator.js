import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import "./Creator.css";
import CreatorStoreFront from './CreatorStoreFront/CreatorStoreFront';

const Creator = () => {
  return (
    <div className='creator'>
      <Header />
      <Banner
        title="Make your style easily shoppable "
        subTitle="Partner with brands and allow your audience to shop your product recommendations. "
        primaryBtnText="Explore"
        secondaryBtnText="For Brand"
        bgColor="skyblue"
        primaryUrl={'/explore'}
        secondaryUrl={'/'}
      />
      <CreatorStoreFront />
      <Footer />
    </div>
  )
}

export default Creator
