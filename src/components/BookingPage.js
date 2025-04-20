import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, updateTimes, submitForm }) {
  return (
    <div className="booking-page">
      <div className="hero">
        <h1>Reserve a Table</h1>
        <p>Book your dining experience at Little Lemon</p>
      </div>
      <div className="booking-container">
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