import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '../components/ContactPage';

describe('ContactPage Component', () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  test('renders contact form', () => {
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  test('displays all form fields', () => {
    expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message \*/i)).toBeInTheDocument();
  });

  test('shows contact information', () => {
    expect(screen.getByText(/123 restaurant street/i)).toBeInTheDocument();
    expect(screen.getByText(/chicago, il 60601/i)).toBeInTheDocument();
    expect(screen.getByText(/phone:/i)).toBeInTheDocument();
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    const nameInput = screen.getByLabelText(/name \*/i);
    const emailInput = screen.getByLabelText(/email \*/i);
    const messageInput = screen.getByLabelText(/message \*/i);

    expect(nameInput).toBeInvalid();
    expect(emailInput).toBeInvalid();
    expect(messageInput).toBeInvalid();
  });

  test('validates email format', async () => {
    const emailInput = screen.getByLabelText(/email \*/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    await userEvent.type(emailInput, 'invalid-email');
    fireEvent.click(submitButton);

    expect(emailInput).toBeInvalid();
  });

  test('submits form with valid data', async () => {
    const nameInput = screen.getByLabelText(/name \*/i);
    const emailInput = screen.getByLabelText(/email \*/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const subjectInput = screen.getByLabelText(/subject \*/i);
    const messageInput = screen.getByLabelText(/message \*/i);

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(phoneInput, '1234567890');
    await userEvent.type(subjectInput, 'Test Subject');
    await userEvent.type(messageInput, 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    expect(nameInput).toBeValid();
    expect(emailInput).toBeValid();
    expect(messageInput).toBeValid();
  });

  test('displays business hours', () => {
    expect(screen.getByText(/monday - friday: 11:00 AM - 10:00 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/saturday - sunday: 12:00 PM - 11:00 PM/i)).toBeInTheDocument();
  });

  test('shows location information', () => {
    expect(screen.getByRole('heading', { name: /visit us/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /little lemon restaurant interior/i })).toBeInTheDocument();
  });

  test('has accessible form fields', () => {
    const formControls = screen.getAllByRole('textbox');
    formControls.forEach(control => {
      expect(control).toHaveAttribute('aria-required');
    });
  });
});