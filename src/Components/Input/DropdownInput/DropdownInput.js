import React from 'react';
import Select from 'react-dropdown-select';
import './DropdownInput.css';

const DropdownInput = ({ options, placeholder, multi = false, name, value, error, title, onChange, onBlur }) => {
  const handleSelectChange = (values) => {
    const selectedValue = multi ? values.map(val => val.value) : values[0]?.value || '';
    onChange(name, selectedValue); // Call Formik's setFieldValue
  };

  return (
    <div className="dropdown_input_div">
      <h6 className="dropdown_title">{title}</h6>
      <Select
        options={options}
        onChange={handleSelectChange}
        values={value ? options.filter(option => multi ? value.includes(option.value) : option.value === value) : []}
        multi={multi}
        placeholder={placeholder}
        onBlur={() => onBlur(name)} // Call Formik's handleBlur
        autoComplete="off"
      />
      {error ? (
        <p className="error">{error}</p>
      ) : null}
    </div>
  );
};

export default DropdownInput;
