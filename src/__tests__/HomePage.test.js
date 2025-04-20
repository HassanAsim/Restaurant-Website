import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';

describe('HomePage Component', () => {
  const renderHomePage = () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    renderHomePage();
  });

  test('renders hero section', () => {
    expect(screen.getByRole('heading', { name: /little lemon/i })).toBeInTheDocument();
    expect(screen.getByText(/chicago/i)).toBeInTheDocument();
    expect(screen.getByText(/family owned mediterranean restaurant/i)).toBeInTheDocument();
  });

  test('renders specials section', () => {
    expect(screen.getByText(/this week's specials!/i)).toBeInTheDocument();
    const menuButton = screen.getByRole('link', { name: /online menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('href', '/menu');
  });

  test('renders special menu cards', () => {
    const menuItems = [
      {
        name: 'Greek Salad',
        price: '$12.99',
        description: /crispy lettuce, peppers, olives/i
      },
      {
        name: 'Bruschetta',
        price: '$5.99',
        description: /grilled bread, garlic, tomatoes/i
      },
      {
        name: 'Lemon Dessert',
        price: '$5.00',
        description: /fresh baked lemon bread/i
      }
    ];

    menuItems.forEach(item => {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument();
      expect(screen.getByText(item.price)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  test('renders testimonials section', () => {
    expect(screen.getByText(/what our customers say!/i)).toBeInTheDocument();
    const testimonials = screen.getAllByRole('article');
    expect(testimonials.length).toBeGreaterThan(0);
  });

  test('renders about section', () => {
    expect(screen.getByText(/little lemon restaurant/i)).toBeInTheDocument();
    expect(screen.getByText(/mario and adrian/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /mario and adrian/i })).toBeTruthy();
  });

  test('has correct navigation links', () => {
    const reserveButton = screen.getByRole('link', { name: /reserve a table/i });
    expect(reserveButton).toHaveAttribute('href', '/booking');
    
    const menuButton = screen.getByRole('link', { name: /online menu/i });
    expect(menuButton).toHaveAttribute('href', '/menu');
  });

  test('displays call-to-action buttons', () => {
    const ctaButtons = screen.getAllByRole('link', { name: /reserve a table|online menu/i });
    expect(ctaButtons).toHaveLength(2);
    ctaButtons.forEach(button => {
      expect(button).toHaveAttribute('href');
      expect(button).toBeInTheDocument();
    });
  });
});