import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ children }) => {
  return <div className="custom-form">{children}</div>;
};

Form.propTypes = {
  children: PropTypes.node,
};

Form.defaultProps = {
  children: null,
};

export default Form;
