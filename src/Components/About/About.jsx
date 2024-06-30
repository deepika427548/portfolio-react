import React from "react";
import "./About.css";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
              iusto ut alias fugit ratione odit illum eos earum perferendis, nam
              quasi reprehenderit nemo sapiente cupiditate non dolorem in.
              Asperiores, iste.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="about-skills">
            <div className="aboutskill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="aboutskill">
              <p>JavaScript</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="aboutskill">
              <p>React JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="aboutskill">
              <p>Node JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="aboutskill">
              <p>Mongo DB</p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
