import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
 <div className="group">
  <input className="form-input" onChange={handleChange} {...otherProps} />
  {/* the following segment is conditional, as can be
  seen we can use null when nothing is needed */}
  {label ? (
   <label
    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
   >
    {label}
   </label>
  ) : null}
 </div>
);

export default FormInput;
