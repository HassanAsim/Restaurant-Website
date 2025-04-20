import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, updateTimes, submitForm }) {
  return (
    <div className="booking-page" role="region" aria-labelledby="booking-title">
      <div className="hero">
        <h1 id="booking-title">Reserve a Table</h1>
        <p>Book your dining experience at Little Lemon</p>
      </div>
      <div className="booking-container" role="region" aria-label="Booking form section">
        <BookingForm 
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
}

export default BookingPage;