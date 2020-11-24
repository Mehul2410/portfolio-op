import React from "react";

import "../css/Skills.css";
import Progressbar from "../Progressbar";

const Skills = ({ Language, percent, progress }) => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__List">
        <Progressbar Language={"HTML"} percent={"100"} progress={"100"} />
        <Progressbar Language={"CSS"} percent={"90"} progress={"90"} />
        <Progressbar Language={"JS"} percent={"80"} progress={"80"} />
        <Progressbar Language={"REACTJS"} percent={"85"} progress={"85"} />
        <Progressbar Language={"NODEJS"} percent={"40"} progress={"40"} />
        {/* <Progressbar
          Language={"COMMUNICATION SKILLS"}
          percent={"90"}
          progress={"90"}
        /> */}

        <Progressbar Language={"GIT"} percent={"80"} progress={"80"} />
        <Progressbar Language={"REACT-NATIVE"} percent={"50"} progress={"50"} />
      </div>
    </div>
  );
};

export default Skills;

// .app {
//   background-color: #eee;
//   overflow-y: scroll; /* Add the ability to scroll */
// }

// /* Hide scrollbar for Chrome, Safari and Opera */
// .app::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
// .app {
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
// }
