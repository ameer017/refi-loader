import React from "react";
import "./Loader.css"; // Import the CSS file for styling

const Loader = () => {
  return (
    <div className="earthfi-insane-loader-container">
      <div className="earthfi-insane-loader">
        <div className="background-waves"></div>
        <div className="outer-circle"></div>
        <div className="middle-circle"></div>
        <div className="inner-circle"></div>
        <div className="core">
          <div className="core-glow"></div>
          <div className="core-inner"></div>
        </div>
        <div className="particle-trail"></div>
      </div>
    </div>
  );
};

export default Loader;
