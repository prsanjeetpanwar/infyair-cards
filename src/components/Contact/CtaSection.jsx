import React from 'react';
import './Contact.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-section__container">
        <img className="cta-section__logo-icon" alt="" src="/logo.svg" />
        <div className="cta-section__text-container">
          <div className="cta-section__heading">
            Today, INFYAIR Continues to Thrive as a Leading Digital Product
            Agency.....
          </div>
          <div className="cta-section__paragraph">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring
            your digital ideas to life.
          </div>
        </div>
      </div>
      <div className="cta-section__container">
        <div className="cta-section__sub-container">
          <div className="cta-section__sub-heading">Welcome to INFYAIR</div>
            <div className="cta-section__sub-text">
              Where collaboration, Expertise, and Client-Centricity Intersect
              to Shape the Future of Digital Innovation.
            </div>
        </div>
        <div className="cta-section__button">
          <p className="cta-section__btn-text">Start Project</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;