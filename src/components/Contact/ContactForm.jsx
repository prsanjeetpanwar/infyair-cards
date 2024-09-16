import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        reasons: [],
        budget: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                reasons: checked 
                    ? [...prevState.reasons, id]
                    : prevState.reasons.filter(reason => reason !== id)
            }));
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('firstName', formData.firstName);
            formData.append('lastName', formData.lastName);
            formData.append('email', formData.email);
            formData.append('position', formData.position);
            formData.append('cv', formData.cv);
            formData.append('phoneNumber', formData.phoneNumber);
    const response = await axios.post('http://localhost:5000/api/submit-contact', formData);
            console.log('Server response:', response.data);
            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                reasons: [],
                budget: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="contact__form">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <div className="form__group">
                        <label htmlFor="fullName">Name</label>
                        <input type="text" id="fullName" value={formData.fullName} 
                        onChange={handleChange} placeholder="Type here" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email}
                        onChange={handleChange} placeholder="Type here" />
                    </div>
                </div>
                <div class="form__group">
                    <label>Who are you?</label>
                    <div class="form__checkboxes">
                        <label class="form__checkbox">
                            <input type="checkbox" id="webDesign"/>
                            <span class="form__checkbox-label">Individual</span>
                        </label>
                        <label class="form__checkbox">
                            <input type="checkbox" id="mobileAppDesign"/>
                            <span class="form__checkbox-label">Company</span>
                        </label>
                    </div>
                </div>
                <div className="form__group">
                    <label>Why are you contacting us?</label>
                    <div className="form__checkboxes">
                        <label className="form__checkbox">
                            <input type="checkbox" id="webDesign" checked={formData.reasons.includes('webDesign')}
    onChange={handleChange}/>
                            <span className="form__checkbox-label">Consulting</span>
                        </label>
                        <label className="form__checkbox">
                            <input type="checkbox" id="mobileAppDesign" />
                            <span className="form__checkbox-label">Software Development</span>
                        </label>
                        <label className="form__checkbox">
                            <input type="checkbox" id="collaboration" />
                            <span className="form__checkbox-label">Collaboration</span>
                        </label>
                        <label className="form__checkbox">
                            <input type="checkbox" id="others" />
                            <span className="form__checkbox-label">Others</span>
                        </label>
                    </div>
                </div>
                <div className="form__group">
                    <label htmlFor="budget">Your Budget</label>
                    <input type="number" id="budget" value={formData.budget} onChange={handleChange} placeholder= "Budget in €"/>                    
                </div>
                <div className="form__group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" value={formData.message}
    onChange={handleChange} placeholder="Type here"></textarea>
                </div>
                <div class="form__submit-container">
                    <button type="submit" class="form__submit">Submit</button>
                </div>
            </form>
            {submitStatus === 'success' && (
    <p className="form__success-message">Form submitted successfully!</p>
)}
{submitStatus === 'error' && (
    <p className="form__error-message">Error submitting form. Please try again.</p>
)}


        </div>
    );
};

export default Contact;