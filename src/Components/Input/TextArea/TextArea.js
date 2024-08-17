import React from 'react';
import { useField } from 'formik';
import './Textarea.css'; // Ensure to style this component as needed
const TextArea = ({ name, placeholder, rows = 4, title, value, onChange, onBlur, error }) => {
    return (
      <div className="textarea_div">
        {title && <h6 className="textarea_title">{title}</h6>}
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`textarea ${error ? 'error' : ''}`}
        />
        {error ? (
          <p className="error_message">{error}</p>
        ) : null}
      </div>
    );
  };
  
  export default TextArea;
