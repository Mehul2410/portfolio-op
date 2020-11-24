import React from "react";
import ProgressBar from "react-customizable-progressbar";
import "./css/Skills.css";

const Progressbar = ({ Language, percent, progress }) => {
  return (
    <div className="progressbar">
      <ProgressBar
        className="progressbar__c"
        progress={progress}
        radius={100}
      />
      <p>{percent}%</p>
      <h1>{Language}</h1>
    </div>
  );
};

export default Progressbar;
