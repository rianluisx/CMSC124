import React from 'react'
import "../css/Hero.css"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>This website is about CMSC 124</h1>
        <p>Design and Implementation of Programming Languages</p>
        <button className="btn-hero">
          <a href="#about">Learn More</a>
        </button>
      </div>
    </section>
  );
}

export default Hero
