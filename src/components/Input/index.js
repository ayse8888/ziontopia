import React from "react";

export const Input = ({ type, placeholder, className, onChange, value, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};
