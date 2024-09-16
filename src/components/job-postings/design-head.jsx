// pages/DesignHead.jsx
import React from 'react';
import '../Careers/careers.css';
import { Link } from 'react-router-dom';

const DesignHead = () => {
  
  return (
    <div className="design-head-container">
      <div className="design-head-header">
        <h1 className="design-head-title">Design Head</h1>
        <Link to="/apply" className="apply-now-button">
          Apply Now
        </Link>
      </div>
      <div className="design-head-description">
        <p>
          We are seeking a talented UI Designer to join our team. As a UI Designer, you will be responsible for creating visually appealing and user-friendly interfaces for our web and mobile applications. You will collaborate closely with UX designers, developers, and stakeholders to ensure a seamless user experience.
        </p>
        <p>
          The ideal candidate should have a strong portfolio demonstrating exceptional UI design skills, proficiency in design tools such as Sketch or Figma, and a keen eye for detail. Experience with responsive design and a good understanding of user-centered design principles are essential.
        </p>
        <p>
          If you are passionate about creating beautiful and intuitive user interfaces, we'd love to hear from you. Click the "Apply Now" button above to submit your application and portfolio.
        </p>
      </div>
    </div>
  );
};

export default DesignHead;