import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes = [], updateTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange}
        required
      />
      
      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={availableTimes.includes(time) ? time : (availableTimes[0] || '17:00')}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map(timeSlot => (
          <option key={timeSlot}>{timeSlot}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        min="1" 
        max="10" 
        value={guests} 
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" className="submit-button">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;