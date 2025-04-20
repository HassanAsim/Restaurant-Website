import React from 'react';

function ConfirmedBooking() {
  return (
    <div className="confirmation">
      <div className="hero">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for choosing Little Lemon</p>
      </div>
      <div className="confirmation-details">
        <p>Your reservation has been confirmed. You will receive a confirmation email shortly.</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;