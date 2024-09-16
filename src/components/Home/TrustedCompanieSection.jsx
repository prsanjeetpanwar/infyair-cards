import React from 'react';
import './Home.css';
import trustedCompaniesData from '../..//Data/TrustedCompaniesData';

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <div className="trusted-companies__heading">
        <p>Trusted By 250+ Companies</p>
      </div>
      <div className="trusted-companies__logos">
        {trustedCompaniesData.map((company) => (
          <div key={company.id} className="trusted-companies__logo">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;