import React from "react";

const Select = ({ selectOptions, onChange, value, disabled }) => {
  return (
    <select
      className={`select-input ${disabled ? "disabled" : ""}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {selectOptions.map((item) => {
        return <option key={item}>{item}</option>;
      })}
    </select>
  );
};

export default Select;
