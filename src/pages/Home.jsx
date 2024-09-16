import React from 'react';
import Hero from '../components/Home/HeroSection';
import TrustedCompanies from '../components/Home/TrustedCompanieSection';
import Services from '../components/Home/ServiceSection';
import Testimonials from '../components/Home/TestimonialSection';
import Faq from '../components/Home/FAQSection';
import Contact from '../components/Home/ContactSection';

function Home() {
  return (
    <div className='home-container'>
      <Hero />
      <TrustedCompanies />
      <Services />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
}

export default Home;