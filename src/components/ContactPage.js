import React, { useState } from 'react';
import restaurantImage from '../assets/images/restaurant.jpg';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="hero contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us</p>
      </section>

      <div className="contact-content">
        <section className="contact-info" aria-labelledby="contact-info-title">
          <h2 id="contact-info-title">Visit Us</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Address</h3>
              <address>
                123 Restaurant Street<br />
                Chicago, IL 60601
              </address>
            </div>
            <div className="info-card">
              <h3>Hours</h3>
              <p>
                Monday - Friday: 11:00 AM - 10:00 PM<br />
                Saturday - Sunday: 12:00 PM - 11:00 PM
              </p>
            </div>
            <div className="info-card">
              <h3>Contact</h3>
              <p>
                Phone: <a href="tel:+11234567890">(123) 456-7890</a><br />
                Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
              </p>
            </div>
          </div>
          <div className="restaurant-image">
            <img src={restaurantImage} alt="Little Lemon restaurant interior" />
          </div>
        </section>

        <section className="contact-form" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                aria-required="false"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;