import React from "react";
import Header from "../Header";
import "../css/Project.css";

import Cards from "../Cards";
import Skills from "./Skills";

const Project = ({ name, repos, image, link }) => {
  return (
    <div className="project">
      <Skills />
      <h1>Project</h1>
      <div className="project__Cards">
        <Cards
          name={"google-search"}
          repos={"https://github.com/Mehul2410/Google-clone"}
          image={process.env.PUBLIC_URL + "/google.png"}
          link={"https://hulu-clone-29738.web.app"}
        />
        <Cards
          name={"Foodies"}
          repos={"https://github.com/Mehul2410/Foodies"}
          image={process.env.PUBLIC_URL + "/foodies.png"}
          link={"https://foodies-b9b87.web.app"}
        />

        <Cards
          name={"Google-keep-clone"}
          repos={"https://github.com/Mehul2410/google-keep-clone"}
          image={process.env.PUBLIC_URL + "/google-keep.png"}
        />
        <Cards
          name={"Realtime pizza delivery tracker"}
          repos={"https://github.com/Mehul2410/pizza"}
          image={
            "https://raw.githubusercontent.com/codersgyan/realtime-pizza-app-node-express-mongo/master/Screenshot%202020-09-21%20at%2023.03.06.png"
          }
        />
        <Cards
          name={"My portfolio"}
          repos={"https://github.com/Mehul2410/portfolio-op"}
          image={process.env.PUBLIC_URL + "/portfolio.png"}
        />
        <Cards
          name={"COVID-19 tracker"}
          repos={"https://github.com/Mehul2410/COVID-19-TRACKER"}
          image={
            "https://vibrant-feynman-4365d1.netlify.app/images/portfolio/cvoid.jpeg"
          }
        />
        <Cards
          name={"Whatsapp-clone"}
          repos={"https://github.com/Mehul2410/WhatsApp-clone"}
          image={
            "https://vibrant-feynman-4365d1.netlify.app/images/portfolio/whatsapp.jpeg"
          }
        />
        <Cards
          name={"Instagram-clone"}
          repos={"https://github.com/Mehul2410/instagram-web-clone"}
          image={process.env.PUBLIC_URL + "/WhatsApp.jpeg"}
        />
        <Cards
          name={"Twitter-clone"}
          repos={"https://github.com/Mehul2410/Twitter-clone"}
          image={
            "https://vibrant-feynman-4365d1.netlify.app/images/portfolio/twitter.jpeg"
          }
        />
        <Cards
          name={"Facebook-clone"}
          repos={"https://github.com/Mehul2410/facebook-front-end"}
          image={process.env.PUBLIC_URL + "/fb.png"}
        />
      </div>
    </div>
  );
};

export default Project;
