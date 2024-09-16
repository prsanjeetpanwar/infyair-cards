import React, { useState, useCallback } from 'react';
import './careers.css';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    phoneNumber: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf,.doc,.docx',
    maxFiles: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (file) {
      data.append('resume', file);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/submit-application', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Application submitted successfully:', response.data);
      window.location.reload();
      // Reset the form or show a success message to the user
    } catch (error) {
      console.error('Error submitting application:', error);
      // Show an error message to the user
    }
  };

  return (
    <div className="career-form-container">
      <h2>Career Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required>
            <option value="">Select Position</option>
            <option value="UI Designer">UI Designer</option>
            <option value="UX Designer">UX Designer</option>
            <option value="Design Head">Design Head</option>
          </select>
        </div>
        <div className="form-group">
          <label>Resume</label>
          <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            {file ? (
              <p>File selected: {file.name}</p>
            ) : (
              <p style={{color:"black"}}>Drag 'n' drop your resume here, or click to select a file</p>
            )}
          </div>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default CareerForm;
