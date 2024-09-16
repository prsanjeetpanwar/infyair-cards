
import React from 'react';
import "./Home.css";


const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__content">
                <img src="/INFYAIR_Logo.svg" alt="Logo" className="contact__logo" />
                <div className="contact__text">
                    <h2>Thank you for your Interest in INFYAIR.</h2>
                    <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
                </div>
                <button className="contact__btn">Start Project</button>
            </div>
        </section>
    );
};

export default Contact;