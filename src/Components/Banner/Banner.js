import React from 'react'
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton2'
import SecondaryButton from '../Button/SecondaryButton/SecondaryButton';
import './Banner.css';
import { Container } from "react-bootstrap";
const Banner = ({title, subTitle, primaryBtnText, secondaryBtnText, primaryUrl, secondaryUrl, bgColor}) => {
  return (
    <div className={`BannerMainDiv ${bgColor}`}>
        <Container>
         <div className={`bannerSection`}>
      <div className='bannerDivContent'>
        <h1 className='main_title'>{title}</h1>
        <p class="description">{subTitle}</p>
        <div className='buttonContainer d-flex justify-content-start align-items-center w-60'>
            <PrimaryButton title={primaryBtnText} url={primaryUrl}/>
            <SecondaryButton title={secondaryBtnText} url={secondaryUrl}/>
        </div>
      </div>
    </div>
    </Container>
    </div>
    
   
  )
}

export default Banner
