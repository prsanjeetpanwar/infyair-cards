import React from 'react';
import './Home.css';
import testimonialsData from '../../Data/TestimonialsData';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__heading">
        <h2>What our Clients say About us</h2>
        <p>At INFYAIR, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us.</p>
      </div>
      <div className="testimonials__cards">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonials__card">
            <div className="testimonials__card-content">
              <p className="testimonials__quote">{testimonial.quote}</p>
              <p className="testimonials__description">{testimonial.description}</p>
            </div>
            <div className="testimonials__card-footer">
              <div className="testimonials__author">
                <img src={testimonial.image} alt={testimonial.author} className="testimonials__author-image" />
                <div>
                  <p className="testimonials__author-name">{testimonial.author}</p>
                  <p className="testimonials__author-company">{testimonial.company}</p>
                </div>
              </div>
              <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="testimonials__website-link">Open Website</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;