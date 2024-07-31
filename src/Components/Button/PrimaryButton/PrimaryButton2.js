import React from 'react';
import Button from 'react-bootstrap/Button';
import './PrimaryButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PrimaryButton2 = ({title, iconState, url}) => {

  const navigate = useNavigate();
  const navigateFunction = () => {
    navigate(url)
  }

    let buttonText = title ? title : "Get Started";
  return (
    <div className='buttonDiv' onClick={() => navigateFunction()}>
      <div className="button d-flex justify-content-between align-items-center">
        <p className='buttonText'>{title}</p>
        {iconState ? "" : (<><FontAwesomeIcon icon={faArrowRight} /></>)}
        
      </div>
    </div>
  )
}

export default PrimaryButton2
