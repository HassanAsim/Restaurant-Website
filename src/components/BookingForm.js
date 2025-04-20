import React, { useState } from 'react';

export default function BookingForm(props) {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
        name: '',
        email: '',
        phone: ''
    });

    const [showUserInfo, setShowUserInfo] = useState(false);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.time) newErrors.time = 'Time is required';
        if (!formData.guests) newErrors.guests = 'Number of guests is required';
        
        if (showUserInfo) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
            if (!formData.phone) newErrors.phone = 'Phone number is required';
            else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!showUserInfo) {
            if (validateForm()) {
                setShowUserInfo(true);
            }
        } else {
            if (validateForm()) {
                props.submitForm(formData);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="booking-form">
                {!showUserInfo ? (
                    <>
                        <h2>Reservation Details</h2>
                        <div className="form-field">
                            <label htmlFor="date">Choose date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                aria-invalid={!!errors.date}
                                required
                            />
                            {errors.date && <span className="error-message">{errors.date}</span>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="time">Choose time</label>
                            <select
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                aria-invalid={!!errors.time}
                                required
                            >
                                <option value="">Select a time</option>
                                {props.availableTimes.map(time => 
                                    <option key={time} value={time}>{time}</option>
                                )}
                            </select>
                            {errors.time && <span className="error-message">{errors.time}</span>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="guests">Number of guests</label>
                            <input
                                type="number"
                                placeholder="1"
                                min="1"
                                max="10"
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                aria-invalid={!!errors.guests}
                                required
                            />
                            {errors.guests && <span className="error-message">{errors.guests}</span>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="occasion">Occasion</label>
                            <select
                                id="occasion"
                                name="occasion"
                                value={formData.occasion}
                                onChange={handleChange}
                                aria-invalid={!!errors.occasion}
                                required
                            >
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Business">Business</option>
                            </select>
                            {errors.occasion && <span className="error-message">{errors.occasion}</span>}
                        </div>
                    </>
                ) : (
                    <>
                        <h2>Personal Information</h2>
                        <div className="form-field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                aria-invalid={!!errors.name}
                                required
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                aria-invalid={!!errors.email}
                                required
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                aria-invalid={!!errors.phone}
                                required
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                    </>
                )}

                <button 
                    type="submit" 
                    className="submit-button"
                >
                    {!showUserInfo ? "Continue to Verification" : "Make Your Reservation"}
                </button>
            </form>
        </div>
    );
}