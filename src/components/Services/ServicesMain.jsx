import React, { useState } from "react";
import "./services.css";

const ServicesMain = () => {
  const [currentSlides, setCurrentSlides] = useState({
    resourceAugmentation: 0,
    applicationDevelopment: 0,
    googleCloudServices: 0,
    amazonWebServices: 0,
    microsoftAzure: 0,
    dataDrivenSolutions: 0,
    imageProcessing: 0,
    projectPlanning: 0,
    agileDevelopment: 0
  });

  const servicesList = {
    resourceAugmentation: [
      { icon: 'icon121.svg', title: 'Data Scientist' },
      { icon: 'icon1.svg', title: 'Data Engineer' },
      { icon: 'icon141.svg', title: 'DevOps' },
      { icon: 'icon151.svg', title: 'Data Analyst' },
      { icon: 'icon121.svg', title: 'Full Stack Developer' },
      { icon: 'icon1.svg', title: 'Functional Consultants' },
    ],
    applicationDevelopment: [
      { icon: 'icon121.svg', title: 'Customer Relationship Management(CRM)' },
      { icon: 'icon1.svg', title: 'Human Resource Management (HRM)' },
      { icon: 'icon141.svg', title: 'Transport Management System(TMS)' },
      { icon: 'icon151.svg', title: 'Warehouse Management System' },
    ],
    googleCloudServices: [
      { icon: 'icon121.svg', title: 'Experts Consultants' },
      { icon: 'icon1.svg', title: 'Enterprise Resource Planning (HRM)' },
      { icon: 'icon141.svg', title: 'Inventory Management' },
      { icon: 'icon151.svg', title: 'Finance and Payment On Sales' },
    ],
    amazonWebServices: [
      { icon: 'icon121.svg', title: 'Experts Consultants' },
      { icon: 'icon1.svg', title: 'Enterprise Resource Planning (HRM)' },
      { icon: 'icon141.svg', title: 'Inventory Management' },
      { icon: 'icon151.svg', title: 'Finance and Payment On Sales' },
    ],
    microsoftAzure: [
      { icon: 'icon121.svg', title: 'Experts Consultants' },
      { icon: 'icon1.svg', title: 'Enterprise Resource Planning (HRM)' },
      { icon: 'icon141.svg', title: 'Inventory Management' },
      { icon: 'icon151.svg', title: 'Finance and Payment On Sales' },
    ],
    dataDrivenSolutions: [
      { icon: 'icon121.svg', title: 'AI Powered Retail Solutions' },
      { icon: 'icon1.svg', title: 'Human Resources Management(HRM)' },
      { icon: 'icon141.svg', title: 'Transport Management System' },
      { icon: 'icon151.svg', title: 'Warehouse Management System' },
    ],
    imageProcessing: [
      { icon: 'icon121.svg', title: 'ArtifyAI: Tailored Image Generation Solutions' },
      { icon: 'icon1.svg', title: 'VisionAI: Advanced Image and Video Analysis' },
    ],
    projectPlanning: [
      { icon: 'icon121.svg', title: 'Requirements Gathering and Analysis' },
      { icon: 'icon1.svg', title: 'Project Roadmap and Timeline Development' },
      { icon: 'icon141.svg', title: 'Resource Allocation and Task Assignment' },
      { icon: 'icon151.svg', title: 'Risk Assessment and Mitigation Strategies' },
    ],
    agileDevelopment: [
      { icon: 'icon121.svg', title: 'Iterative Development and Sprints' },
      { icon: 'icon1.svg', title: 'Scrum or Kanban Methodology Implementation' },
      { icon: 'icon141.svg', title: 'Regular Progress Updates and Demos' },
      { icon: 'icon151.svg', title: 'Continuous Improvement and Feedback Incorporation' },
    ],
  };

  const slidesToShow = 4;

  const handleSlide = (direction, section) => {
    setCurrentSlides(prevSlides => {
      const maxIndex = Math.ceil(servicesList[section].length / slidesToShow) - 1;
      let newIndex = prevSlides[section];

      if (direction === 'next') {
        newIndex = newIndex < maxIndex ? newIndex + 1 : 0;
      } else {
        newIndex = newIndex > 0 ? newIndex - 1 : maxIndex;
      }

      return { ...prevSlides, [section]: newIndex };
    });
  };

  const renderSlider = (services, section) => (
    <div className="services-slider">
      <button className="nav-button prev" onClick={() => handleSlide('prev', section)}>
        &lt;
      </button>
      <div className="services-grid">
        {services.slice(currentSlides[section] * slidesToShow, (currentSlides[section] + 1) * slidesToShow).map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={() => handleSlide('next', section)}>
        &gt;
      </button>
    </div>
  );

  return (
    <>
      <div className="services-section">
        <div className="services-section-container">
          <div className="services-section-heading">Resource Augmentation</div>
          <div className="services-section-description">
            At INFYAIR, our design team is passionate about creating stunning,
            user-centric designs that captivate your audience and elevate your
            brand. We believe that great design is not just about aesthetics;
            it's about creating seamless and intuitive user experiences.
          </div>
          <button className="services-button">
            Our design services include:
          </button>

          <div className="services-list-container">
            <h3 className="services-subheading">User Experience (UX) Design</h3>
            {renderSlider(servicesList.resourceAugmentation, 'resourceAugmentation')}
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-section-container">
          <div className="services-section-heading">Supply chain solutions</div>
          <div className="services-section-description">
            Our engineering team combines technical expertise with a passion for
            innovation to build robust and scalable digital solutions. We
            leverage the latest technologies and best practices to deliver
            high-performance applications tailored to your specific needs.
          </div>
          <button className="services-button">
            Our tools and services include:
          </button>
          <div className="services-list-container">
            <h3 className="services-subheading">Supply Chain Management</h3>
            {renderSlider(servicesList.applicationDevelopment, 'applicationDevelopment')}
          </div>
          <div className="services-list-container">
            <h3 className="services-subheading">Resource Planning</h3>
            {renderSlider(servicesList.googleCloudServices, 'googleCloudServices')}
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-section-container">
          <div className="services-section-heading">Cloud Services</div>
          <div className="services-section-description">
            Our engineering team combines technical expertise with a passion for
            innovation to build robust and scalable digital solutions. We
            leverage the latest technologies and best practices to deliver
            high-performance applications tailored to your specific needs.
          </div>
          <button className="services-button">
            Our tools and services include:
          </button>
          <div className="services-list-container">
            <h3 className="services-subheading">Application Development</h3>
            {renderSlider(servicesList.applicationDevelopment, 'applicationDevelopment')}
          </div>
          <div className="services-list-container">
            <h3 className="services-subheading">Google Cloud Services</h3>
            {renderSlider(servicesList.googleCloudServices, 'googleCloudServices')}
          </div>
          <div className="services-list-container">
            <h3 className="services-subheading">Amazon Web Services</h3>
            {renderSlider(servicesList.amazonWebServices, 'amazonWebServices')}
          </div>
          <div className="services-list-container">
            <h3 className="services-subheading">Microsoft Azure</h3>
            {renderSlider(servicesList.microsoftAzure, 'microsoftAzure')}
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-section-container">
          <div className="services-section-heading">
            Artificial Intelligence and Machine Learning
          </div>
          <div className="services-section-description">
            Our engineering team combines technical expertise with a passion for
            innovation to build robust and scalable digital solutions. We
            leverage the latest technologies and best practices to deliver
            high-performance applications tailored to your specific needs.
          </div>
          <button className="services-button">Our services include:</button>
          <div className="services-list-container">
            <h3 className="services-subheading">Data Driven Solutions</h3>
            {renderSlider(servicesList.dataDrivenSolutions, 'dataDrivenSolutions')}
          </div>
          <div className="services-list-container">
            <h3 className="services-subheading">Image Processing</h3>
            {renderSlider(servicesList.imageProcessing, 'imageProcessing')}
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-section-container">
          <div className="services-section-heading">Project Management</div>
          <div className="services-section-description">
            Our experienced project management team ensures that your projects
            are delivered on time, within budget, and according to your
            specifications. We follow industry standard methodologies and employ
            effective communication and collaboration tools to keep you informed
            throughout the development process.
          </div>
          <button className="services-button">
            Our project management services include:
          </button>
          <div className="services-list-container">
            <h3 className="services-subheading">Project Planning and Scoping</h3>
            {renderSlider(servicesList.projectPlanning, 'projectPlanning')}
          </div>
          <div className="services-list-container">
            <h3 className="services-subheading">Agile Development</h3>
            {renderSlider(servicesList.agileDevelopment, 'agileDevelopment')}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMain;