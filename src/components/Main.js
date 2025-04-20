import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import ContactPage from './ContactPage';
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
    <main role="main" id="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={
          <BookingPage 
            availableTimes={availableTimes} 
            updateTimes={updateTimes}
            submitForm={submitForm}
          />
        } />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default Main;