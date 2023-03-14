import React from "react";

export const BUTTON_TYPE_CLASSES = {
  btn_primary: "btn_primary",
  btn_secondary: "btn_secondary",
  btn_save_active: "btn_save_active",
  btn_save_inactive: "btn_save_inactive",
  btn_see_details: "btn_see_details",
  btn_add_location: "btn_add_location",
};

//The props here: 
//children: the text or content to display inside the button
//buttonType: a string that corresponds to a class defined in the BUTTON_TYPE_CLASSES object, which determines the visual style of the button
//otherProps: any other props that should be applied to the button element, such as 
//onClick or disabled
const Button = ({ children, buttonType, ...otherProps }) => {
  return (

    //The BUTTON_TYPE_CLASSES object defines three possible button styles: 
    //"btn_primary", "btn_secondary", and "btn_cancel". 
    //When the component is rendered, 
    //it applies the appropriate class to the button based on the buttonType prop passed in.
    
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
