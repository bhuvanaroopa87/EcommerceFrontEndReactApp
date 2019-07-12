import React from "react";

const Input = ({ type, name, label, value, onChange, autoFocus, error }) => {
  const styleAsterisk = { color: "red" };
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <span style={styleAsterisk}>*</span>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        className="form-control"
        autoFocus={autoFocus ? true : false}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
