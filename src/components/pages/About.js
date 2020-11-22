import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__body">
        <div className="about__Left">
          <h2>HELLO</h2>
          <h1>I AM MEHUL GAWHALE</h1>
          <h3>LEARNING FULL STACK DEVELOPER & UI/UX DESIGNER </h3>
        </div>
        <div className="about__Right">
          <img src={process.env.PUBLIC_URL + "/work.svg"} />
        </div>
      </div>

      <div className="about__Intro">
        <div className="about__IntroLeft">
          <img src={process.env.PUBLIC_URL + "/work.svg"} />
        </div>
        <div className="about__IntroRight">
          <h2>HELLO</h2>
          <h1>I AM MEHUL GAWHALE</h1>
          <h3>LEARNING FULL STACK DEVELOPER & UI/UX DESIGNER </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
