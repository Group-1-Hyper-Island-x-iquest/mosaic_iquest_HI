import React from "react";
import Navigation from "./Navigation";

//This is a functional component named Layout that receives children as a prop. 
//It renders a <div> element that contains a <Navigation> component and 
//a <main> element that contains the children prop. 
//Essentially, it sets up the basic layout structure for the application, where 
//the navigation menu is displayed at the top and 
//the content of each page is displayed below it

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
