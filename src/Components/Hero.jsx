
  import React, { useState } from "react";
import cloud from "../assets/Images/C1.png";
import moon from "../assets/Images/moon.png";
import bg from "../assets/Images/fog.jpg";

const Hero = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={`hero ${active ? "active" : ""}`}>
      {/* Background */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Clouds */}
      <img src={cloud} className="cloud cloud-center" alt="" />
      <img src={cloud} className="cloud cloud-left" alt="" />
      <img src={cloud} className="cloud cloud-right" alt="" />

      {/* Moon */}
      <img src={moon} className="moon" alt="" />

      {/* Center Content */}
      <div className="hero-content">
        <h1 className="logo" onClick={() => setActive(true)}>
          ASTRO
        </h1>
        <p>Click on the logo</p>
      </div>
    </section>
  );
};

export default Hero;
