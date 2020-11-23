import React from "react";
import Header from "../Header";
import "../css/Project.css";

import Cards from "../Cards";

const Project = ({ name, repos, image, link }) => {
  return (
    <div className="project">
      <h1>Work</h1>
      <div className="project__Cards">
        <Cards
          name={"google"}
          repos={"https://github.com/Mehul2410/Google-clone"}
          image={process.env.PUBLIC_URL + "/google.png"}
          link={"https://hulu-clone-29738.web.app"}
        />
        <Cards image={process.env.PUBLIC_URL + "/google.png"} />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Project;
