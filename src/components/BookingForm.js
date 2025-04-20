import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes = [], updateTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  // Validate all form fields
  const validateForm = () => {
    const newErrors = {};
    
    // Date validation
    if (!date) {
      newErrors.date = 'Please choose a date';
    } else if (new Date(date) < new Date(today)) {
      newErrors.date = 'Please choose a future date';
    }

    // Time validation
    if (!time) {
      newErrors.time = 'Please select a time';
    } else if (!availableTimes.includes(time)) {
      newErrors.time = 'Please select an available time slot';
    }

    // Guests validation
    if (!guests) {
      newErrors.guests = 'Please enter number of guests';
    } else if (guests < 1) {
      newErrors.guests = 'Minimum 1 guest required';
    } else if (guests > 10) {
      newErrors.guests = 'Maximum 10 guests allowed';
    }

    // Occasion validation
    if (!occasion) {
      newErrors.occasion = 'Please select an occasion';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update form validity whenever fields change
  useEffect(() => {
    setIsFormValid(validateForm());
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      submitForm(formData);
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="res-date">Choose date *</label>
        <input 
          type="date" 
          id="res-date" 
          value={date} 
          onChange={handleDateChange}
          min={today}
          required
          aria-invalid={errors.date ? "true" : "false"}
          aria-describedby="date-error"
        />
        {errors.date && <span id="date-error" className="error-message">{errors.date}</span>}
      </div>
      
      <div className="form-field">
        <label htmlFor="res-time">Choose time *</label>
        <select 
          id="res-time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
          required
          aria-invalid={errors.time ? "true" : "false"}
          aria-describedby="time-error"
        >
          {availableTimes.map(timeSlot => (
            <option key={timeSlot}>{timeSlot}</option>
          ))}
        </select>
        {errors.time && <span id="time-error" className="error-message">{errors.time}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests *</label>
        <input 
          type="number" 
          id="guests" 
          min="1" 
          max="10" 
          value={guests} 
          onChange={(e) => setGuests(parseInt(e.target.value) || '')}
          required
          aria-invalid={errors.guests ? "true" : "false"}
          aria-describedby="guests-error"
        />
        {errors.guests && <span id="guests-error" className="error-message">{errors.guests}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion *</label>
        <select 
          id="occasion" 
          value={occasion} 
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-invalid={errors.occasion ? "true" : "false"}
          aria-describedby="occasion-error"
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && <span id="occasion-error" className="error-message">{errors.occasion}</span>}
      </div>

      <button 
        type="submit" 
        className="submit-button" 
        disabled={!isFormValid}
        aria-label={isFormValid ? "Submit reservation" : "Form has errors, please correct them"}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;