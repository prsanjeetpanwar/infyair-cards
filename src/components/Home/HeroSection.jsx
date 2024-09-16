import React from 'react';
import "./Home.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__heading">
          <p>A Digital Product Studio</p>
          <p>that will Work</p>
        </div>
        <div className="hero__text">
          <span>For</span>
          <span className="hero__text-highlight">Startups</span>
          <span>,</span>
          <span className="hero__text-highlight">Enterprise leaders</span>
          <span>,</span>
          <span className="hero__text-highlight">Media &amp; Publishers</span>
          <span>and</span>
          <span className="hero__text-highlight">Social Good</span>
        </div>
        <div className="hero__buttons">
          <button className="hero__btn">Portfolio</button>
          <button className="hero__btn">Contact</button>
        </div>
        <img src="/abstract-design.svg" alt="Abstract Design" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero;