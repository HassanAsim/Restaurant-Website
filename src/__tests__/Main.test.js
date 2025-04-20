import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Main from '../components/Main';

describe('Main Component', () => {
  test('renders HomePage on default route', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/little lemon/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /reserve a table/i })).toBeInTheDocument();
  });

  test('renders BookingPage on /booking route', () => {
    render(
      <MemoryRouter initialEntries={['/booking']}>
        <Main />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
    expect(screen.getByTestId('booking-form')).toBeInTheDocument();
  });

  test('renders MenuPage on /menu route', () => {
    render(
      <MemoryRouter initialEntries={['/menu']}>
        <Main />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /our menu/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /menu navigation/i })).toBeInTheDocument();
  });

  test('renders AboutPage on /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Main />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByText(/mario and adrian/i)).toBeInTheDocument();
  });

  test('renders ContactPage on /contact route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Main />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  test('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <Main />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /return home/i })).toBeInTheDocument();
  });

  test('preserves navigation functionality', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });
});