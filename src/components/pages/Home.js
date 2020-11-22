import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
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
        <div className="home__Bottom">
          <div className="home__BottomLeft">
            <h3>Mehul</h3>
          </div>
          <div className="home__BottomRight">
            <Link to="/">Home</Link>

            <Link to="#About">About</Link>

            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="home__About" id="About">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
