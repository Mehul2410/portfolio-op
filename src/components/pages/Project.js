import React from "react";
import Header from "../Header";
import "../css/Project.css";

import Cards from "../Cards";

const Project = () => {
  return (
    <div className="project">
      <h1>Work</h1>
      <div className="project__Cards">
        <Cards />
      </div>
    </div>
  );
};

export default Project;
