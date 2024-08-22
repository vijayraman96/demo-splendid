import React from 'react';
import './Shipping.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Container } from 'react-bootstrap';

const Shipping = () => {
  return (
    <div>
       <Header />
      <div className='shipping_section'>
            <h5 className='pb-3 pt-3'>Splendid: Shipping Policy</h5>
        <Container className=''>
            <p>Kindly Note –  </p>
            <p>We follow a brand-specific policy for returns and exchange. For any refunds, returns or cancellations kindly refer to the brand’s website for details.  </p>
            <p>Returns/replacements & cancellations can be placed via your splendid account. </p>
            <p>Refunds, replacements, cancellations & refunds are made by the brand directly.  </p>
            {/* <p><b>Splendid: </b>the performance layer for partnerships! </p> */}
            {/* <div className='about_button_container d-flex flex-column justify-content-center align-items-center mb-3 mt-5'>
                <SecondaryButton title={'I am a Brand'} iconState={false} url={'/'}/>
                <SecondaryButton title={'I am a Creator'}  iconState={false} url={'/creator'}/>
                
            </div> */}

        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Shipping
