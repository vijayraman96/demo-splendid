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
        title="Make Your Style Easily Shoppable "
        subTitle="Partner with brands and allow your audience to shop your product recommendations. "
        primaryBtnText="Get Started"
        secondaryBtnText="For Brand"
        bgColor="skyblue"
        primaryUrl={'/contact'}
        secondaryUrl={'/'}
      />
      <CreatorStoreFront />
      <Footer />
    </div>
  )
}

export default Creator
