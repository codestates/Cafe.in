import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loader">
      <div className="winediv">
        <div className="wineglass left">
          <div className="top"></div>
        </div>
        <div className="wineglass right">
          <div className="top"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
