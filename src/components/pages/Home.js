import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Header from "../Header";
import About from "./About";

const Home = () => {
  return (
    <div className="home">
      <div className="home__start">
        <h1>Heyy!!!</h1>
        <h2>
          A good programmer looks both ways before crossing a one-way street.
        </h2>
      </div>
      <div className="home__front">
        <img src={process.env.PUBLIC_URL + "/portfolio-bg.jpg"} />
      </div>
      <div className="overlay">
        <div className="home__About">
          <About />
        </div>
        <div className="home__Work">
          <Link to="/Work">Let's explore my work</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
