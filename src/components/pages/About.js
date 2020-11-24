import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__body">
        <div className="about__Left">
          <h2>HELLO</h2>
          <h1>I AM MEHUL GAWHALE</h1>
          <h3>FRONT-END WEB-DEVELOPER & UI/UX DESIGNER </h3>
        </div>
        <div className="about__Right">
          <img src={process.env.PUBLIC_URL + "/work.svg"} />
        </div>
      </div>

      <div className="about__Intro">
        <div className="about__IntroLeft">
          <img src={process.env.PUBLIC_URL + "/programmer.svg"} />
        </div>
        <div className="about__IntroRight">
          <h1>LET’S INTRODUCE ABOUT MYSELF</h1>
          <h3>
            <br></br>
            <br></br>
            Greetings of the time! I am Mehul Gawhale,I am Learning Full Stack
            Developer as well as UI/UX Designer.Apart from what I do for a
            living, I am a maker, engineer,blogger, social, tech enthusiast,
            teacher.<br></br>
            <br></br>Feel free to share your thoughts, I am all ears. I will try
            to help in every way possible. Let us embrace the fact that we are
            humans before anything. Life is beautiful, let's not waste it.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
