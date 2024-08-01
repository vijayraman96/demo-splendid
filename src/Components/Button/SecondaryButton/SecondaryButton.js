import React from 'react';
import Button from 'react-bootstrap/Button';
import './SecondaryButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SecondaryButton = ({title, url}) => {
  const navigate = useNavigate();
  const navigateFunction = () => {
    navigate(url)
  }
let buttonText = title ? title : "Get Started";
  return (
    <div className='secodaryButtonDiv' onClick={() => navigateFunction()}>
      <div className="button d-flex justify-content-around align-items-center">
        <p className='buttonText'>{title}</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  )
}

export default SecondaryButton;