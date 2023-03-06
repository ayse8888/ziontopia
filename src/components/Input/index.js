import React from "react";

export const Input = ({ type, placeholder, className, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};
