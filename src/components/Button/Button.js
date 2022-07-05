import React from "react";
import "./Button.css";

const Button = ({ text, onClick, type }) => {
  return (
    <button type={type} className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
