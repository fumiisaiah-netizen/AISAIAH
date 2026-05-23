import React, { useState } from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+231887681614">+231 887 681 614</a>
              <span> / </span>
              <a href="tel:+231777312133">+231 777 312 133</a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:fumiisaiah@gmail.com">fumiisaiah@gmail.com</a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">💼</div>
            <div>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/abigailfumiisaiah
              </a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">🐙</div>
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                github.com/abigailfumiisaiah
              </a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">📘</div>
            <div>
              <h3>Facebook</h3>
              <a href="https://web.facebook.com/abigail.isaiah.90" target="_blank" rel="noopener noreferrer">
                Abigail Isaiah
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Your message here..."
            />
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="success-message">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};
