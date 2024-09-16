import React from 'react';
import ContactForm from '../components/Contact/ContactForm.jsx';
import FaqSection from '../components/Home/FAQSection';
import CtaSection from '../components/Contact/CtaSection';
import '../components/Contact/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-page__text-container">
        <div className="contact-page__title">Let's get in touch</div>
        <div className="contact-page__paragraph">
          We help you with any questions or inquiries.
        </div>
      </div>
      <div className="contact-page__container">
        <div className="contact-page__buttons-container">
          <div className="contact-page__button">
            <img className="contact-page__icon" alt="" src="/icon8.svg" />
            <p className="contact-page__text">info@infyair.com</p>
          </div>
          <div className="contact-page__button">
            <img className="contact-page__icon" alt="" src="/icon9.svg" />
            <p className="contact-page__text">+39 342 137 7523</p>
          </div>
          <div className="contact-page__button">
            <img className="contact-page__icon" alt="" src="/icon10.svg" />
            <a href="https://maps.app.goo.gl/bXoLhaZKc4a36sL66" target="__blank" class="maps">Via Mariotto Albertinelli, 4 Milano (MI) 20148</a>
          </div>
        </div>
        <ContactForm />
      
        
      </div>
      <FaqSection />

    </div>
  );
};

export default ContactPage;