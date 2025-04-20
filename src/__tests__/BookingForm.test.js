import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../components/BookingForm';

describe('BookingForm Component', () => {
  const mockSubmit = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];
  const defaultProps = {
    availableTimes: mockAvailableTimes,
    submitForm: mockSubmit
  };

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  const renderBookingForm = (props = defaultProps) => {
    return render(<BookingForm {...props} />);
  };

  test('renders all form fields', () => {
    renderBookingForm();
    
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('shows available time slots', () => {
    renderBookingForm();
    const timeSelect = screen.getByLabelText(/choose time/i);
    mockAvailableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('validates required fields before submission', async () => {
    renderBookingForm();
    const submitButton = screen.getByText(/continue to verification/i);
    
    fireEvent.click(submitButton);
    
    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/number of guests is required/i)).toBeInTheDocument();
  });

  test('shows personal information form after initial validation', async () => {
    renderBookingForm();
    
    // Fill out first form
    await userEvent.type(screen.getByLabelText(/choose date/i), '2025-04-21');
    await userEvent.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
    await userEvent.type(screen.getByLabelText(/number of guests/i), '4');
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');
    
    // Submit first form
    fireEvent.click(screen.getByText(/continue to verification/i));
    
    // Check for personal information fields
    await waitFor(() => {
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    });
  });

  test('validates email format', async () => {
    renderBookingForm();
    
    // Fill out first form
    await userEvent.type(screen.getByLabelText(/choose date/i), '2025-04-21');
    await userEvent.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
    await userEvent.type(screen.getByLabelText(/number of guests/i), '4');
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');
    
    // Submit first form
    fireEvent.click(screen.getByText(/continue to verification/i));
    
    // Fill out personal information with invalid email
    await waitFor(async () => {
      await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
      await userEvent.type(screen.getByLabelText(/phone number/i), '1234567890');
    });
    
    fireEvent.click(screen.getByText(/make your reservation/i));
    
    expect(await screen.findByText(/invalid email format/i)).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    renderBookingForm();
    
    // Fill out first form
    await userEvent.type(screen.getByLabelText(/choose date/i), '2025-04-21');
    await userEvent.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
    await userEvent.type(screen.getByLabelText(/number of guests/i), '4');
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');
    
    // Submit first form
    fireEvent.click(screen.getByText(/continue to verification/i));
    
    // Fill out personal information
    await waitFor(async () => {
      await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      await userEvent.type(screen.getByLabelText(/phone number/i), '1234567890');
    });
    
    fireEvent.click(screen.getByText(/make your reservation/i));
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        date: '2025-04-21',
        time: '18:00',
        guests: '4',
        occasion: 'Birthday',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890'
      });
    });
  });
});