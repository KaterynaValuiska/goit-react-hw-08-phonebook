import React from 'react';

const Toggle = ({ value, onChange }) => (
  <div className="form-check form-switch">
    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
      <input
        className="form-check-input"
        role="switch"
        id="flexSwitchCheckChecked"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
    </label>
  </div>
);

export default Toggle;
