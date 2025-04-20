import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <div className="confirmation" role="main" aria-labelledby="confirmation-title">
      <div className="hero">
        <h1 id="confirmation-title">Booking Confirmed!</h1>
        <p>Thank you for choosing Little Lemon</p>
      </div>
      <div className="confirmation-details" role="region" aria-label="Booking confirmation details">
        <p>Your reservation has been confirmed. You will receive a confirmation email shortly.</p>
        <Link 
          to="/" 
          className="button-link" 
          aria-label="Return to homepage"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default ConfirmedBooking;