import React from 'react';
import './Home.css';
import servicesData from '../../Data/ServiceData';

const Services = () => {
  return (
    <section className="services">
      <div className="services__heading">
        <h2>Our Services</h2>
        <p>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>
      <div className="services__cards">
        {servicesData.map((service) => (
          <div key={service.id} className="services__card">
            <div className="services__card-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="services__card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <a href="/#" className="services__card-link">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;