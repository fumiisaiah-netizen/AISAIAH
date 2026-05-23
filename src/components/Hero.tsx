import React from 'react';
import './Hero.css';
import profileImage from '../assets/I2.jpeg';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Abigail Fumi Isaiah</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-tagline">
            Building scalable web applications and creative solutions
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src={profileImage} alt="Abigail Fumi Isaiah" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};
