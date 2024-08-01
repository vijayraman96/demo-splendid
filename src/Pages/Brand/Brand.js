import React from 'react';
import Header from './../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import './Brand.css';
import BrandDiv from './BrandDiv/BrandDiv';

const Brand = () => {
  return (
    <div className='brand_section'>
      <Header />
      <BrandDiv />
      <Footer />
    </div>
  )
}

export default Brand
