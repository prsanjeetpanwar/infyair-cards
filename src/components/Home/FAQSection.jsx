import './Home.css';
import React, { useState } from 'react';
import faqData from '../../Data/FAQData';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="faq__heading">
        <h2>Frequently Asked Questions</h2>
        <p>Still have questions? Reach out to our team at <span><a href='https://mail.google.com/mail/u/0/#inbox?compose=jrjtXPWjzmwSpPkdsbQdpjQzJlflTdfbQnwrRgBqRjspPknqLlvCZJtdTsTXFjzStjTrdJfn'>info@infyair.com</a></span> </p>
      </div>
      <div className="faq__cards">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq__card ${expandedIndex === index ? 'expanded' : ''}`}>
            <div className="faq__header" onClick={() => toggleExpand(index)}>
              <h3 className="faq__question">{faq.question}</h3>
              <span className="faq__icon">{expandedIndex === index ? 'x' : '+'}</span>
            </div>
            {expandedIndex === index && (
              <p className="faq__answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;