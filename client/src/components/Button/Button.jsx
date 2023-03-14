import React from "react";

export const BUTTON_TYPE_CLASSES = {
  btn_primary: "btn_primary",
  btn_secondary: "btn_secondary",
  btn_save_active: "btn_save_active",
  btn_save_inactive: "btn_save_inactive",
  btn_see_details: "btn_see_details",
  btn_add_location: "btn_add_location",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
