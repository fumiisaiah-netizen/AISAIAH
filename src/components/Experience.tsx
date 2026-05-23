import React from 'react';
import './Experience.css';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  location: string;
}

const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Software Engineer',
    organization: 'AFI Solutions',
    period: '2025 - Present',
    description: 'Built and maintained full-stack web applications using React and Node.js. Improved system performance by 40%.',
    location: 'Onsite',
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    organization: 'Rauf Denktas University',
    period: '2021 - 2024',
    description: 'President of Computer Science Club.',
    location: 'Kibris, Turkey',
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Experience & Education</h2>
        <div className="title-underline"></div>
      </div>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.type}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-type-badge">
                {item.type === 'work' ? '💼' : '🎓'}
              </div>
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-organization">{item.organization}</h4>
              <p className="timeline-location">{item.location}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
