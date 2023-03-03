import React from "react";
import "./Button.css";

export const BUTTON_TYPE_CLASSES = {
  btn_primary: "btn_primary",
  btn_secondary: "btn_secondary",
  btn_cancel: "btn_cancel",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
