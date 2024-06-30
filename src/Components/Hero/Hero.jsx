import React from "react";
import "./Hero.css";
import profileimg from "../../assets/profileimg.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="hero-img" src={profileimg} alt="" />
      <h1>
        <span>Hi,I'm Deepika Dinesh</span>,I'm a Full Stack Web Developer
      </h1>
      <div className="hero-button">
        <div className="hero-contact">
          <AnchorLink className="Anchor-link" href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-project">
          <AnchorLink className="Anchor-link" href="#projects">
            My Projects
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
