import React from "react";
import "../../styles/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="spinnerContainer">
      <h3>Loading...</h3>
      <div className="spinner" />
    </div>
  );
};

export default LoadingSpinner;
