import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../utils/api';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const date = new Date(action.payload);
      return fetchAPI(date);
    }
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, null, initializeTimes);
  const navigate = useNavigate();

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/booking-confirmed');
      return true;
    }
    return false;
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={
          <section className="hero">
            <h1>Welcome to Little Lemon</h1>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </section>
        } />
        <Route path="/booking" element={
          <BookingPage 
            availableTimes={availableTimes} 
            updateTimes={updateTimes}
            submitForm={submitForm}
          />
        } />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;