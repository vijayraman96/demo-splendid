import React from 'react';
import StoreFront from './StoreFront/StoreFront';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Store.css';

const Store = () => {
  return (
    <div className='storefront_section'>
       <Header />
      <StoreFront />
      <Footer />
    </div>
  )
}

export default Store
