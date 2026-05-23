import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            I'm a software engineer with years of experience in building modern web applications and Designs.
            I specialize in creating Scalable, user-friendly solutions that solve real-world problems.
            I believe in writing clean, maintainable code and sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};
