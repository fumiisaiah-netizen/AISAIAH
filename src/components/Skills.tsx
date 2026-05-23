import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 95, icon: '⚡' },
  { name: 'TypeScript', level: 90, icon: '📘' },
  { name: 'React', level: 92, icon: '⚛️' },
  { name: 'Node.js', level: 88, icon: '🟢' },
  { name: 'Python', level: 85, icon: '🐍' },
  { name: 'HTML', level: 95, icon: '🌐' },
  { name: 'CSS', level: 92, icon: '🎨' },
  { name: 'C#', level: 80, icon: '💎' },
  { name: 'C++', level: 78, icon: '⚙️' },
  { name: 'Docker', level: 82, icon: '🐳' },
  { name: 'AWS', level: 80, icon: '☁️' },
  { name: 'PostgreSQL', level: 85, icon: '🐘' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Tech Stack</h2>
        <div className="title-underline"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              >
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
