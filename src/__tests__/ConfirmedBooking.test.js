import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from '../components/ConfirmedBooking';

describe('ConfirmedBooking Component', () => {
  const mockBookingData = {
    date: '2025-04-21',
    time: '19:00',
    guests: '4',
    occasion: 'Birthday',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890'
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ConfirmedBooking bookingData={mockBookingData} />
      </BrowserRouter>
    );
  });

  test('displays success message', () => {
    expect(screen.getByRole('heading', { name: /booking confirmed/i })).toBeInTheDocument();
    expect(screen.getByText(/thank you for your reservation/i)).toBeInTheDocument();
  });

  test('shows booking details', () => {
    expect(screen.getByText(mockBookingData.date)).toBeInTheDocument();
    expect(screen.getByText(mockBookingData.time)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockBookingData.guests))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockBookingData.occasion))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockBookingData.name))).toBeInTheDocument();
  });

  test('displays confirmation number', () => {
    const confirmationNumber = screen.getByText(/^[A-Z0-9]{8}$/);
    expect(confirmationNumber).toBeInTheDocument();
  });

  test('shows return to home button', () => {
    const homeButton = screen.getByRole('link', { name: /return to home/i });
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveAttribute('href', '/');
  });

  test('displays email confirmation message', () => {
    expect(screen.getByText(/confirmation.*sent.*email/i)).toBeInTheDocument();
    expect(screen.getByText(mockBookingData.email)).toBeInTheDocument();
  });

  test('shows contact information', () => {
    expect(screen.getByText(/if you need to modify/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/\(123\) 456-7890/i)).toBeInTheDocument();
  });

  test('has accessible structure', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /booking details/i })).toBeInTheDocument();
  });
});