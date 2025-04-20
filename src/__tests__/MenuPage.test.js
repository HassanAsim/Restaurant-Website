import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuPage from '../components/MenuPage';

describe('MenuPage Component', () => {
  beforeEach(() => {
    render(<MenuPage />);
  });

  test('renders menu page title', () => {
    expect(screen.getByText(/our menu/i)).toBeInTheDocument();
  });

  test('displays menu categories', () => {
    expect(screen.getByRole('heading', { name: /starters/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /main courses/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /desserts/i })).toBeInTheDocument();
  });

  test('renders menu items with prices', () => {
    const menuItems = [
      { name: 'Greek Salad', price: '$12.99' },
      { name: 'Mediterranean Pasta', price: '$18.99' },
      { name: 'Lemon Dessert', price: '$5.00' }
    ];

    menuItems.forEach(item => {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument();
      expect(screen.getByText(item.price)).toBeInTheDocument();
    });
  });

  test('displays menu item descriptions', () => {
    expect(screen.getByText(/fresh vegetables/i)).toBeInTheDocument();
    expect(screen.getByText(/fresh pasta/i)).toBeInTheDocument();
    expect(screen.getByText(/grandma's recipe/i)).toBeInTheDocument();
  });

  test('has correct semantic structure', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: /our menu/i })).toBeInTheDocument();
    const menuItems = screen.getAllByRole('article');
    expect(menuItems.length).toBeGreaterThan(0);
  });

  test('displays menu item images', () => {
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img).toHaveAttribute('src');
    });
  });
});