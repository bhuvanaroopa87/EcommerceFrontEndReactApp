import React from "react";
const Select = ({ name, value, label, items, onChange, error }) => {
  const styleAsterisk = { color: "red" };
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {<span style={styleAsterisk}>*</span>}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="custom-select custom-select-sm"
      >
        <option key="select" default />
        {items.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
