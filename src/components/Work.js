import React from "react";
import "./css/Work.css";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

const Work = () => {
  return (
    <div className="work">
      <div className="work__Skills">
        <Skills />
      </div>

      <div className="work__Project">
        <Project />
      </div>
    </div>
  );
};

export default Work;
