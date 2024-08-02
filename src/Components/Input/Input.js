import React from 'react';
import './Input.css';

const Input = ({title, type, placeholder, value, onChange = () => {}, onBlur = () => {}, name, error}) => {
  return (
    <div className='input_div' >
      <h6 className='input_title'>{title}</h6>
      <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} name={name} autoComplete='off'/>
      <p className='error'>{error}</p>
    </div>
  )
}

export default Input
